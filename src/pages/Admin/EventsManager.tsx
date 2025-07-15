import React, { useState, useEffect } from 'react';

const timezones = [
  'UTC', 'CAT', 'EAT', 'WAT', 'SAST', 'WET', 'EET', 'GMT', 'BST', 'CEST', 'EEST', 'MSK', 'AST', 'EST', 'CST', 'MST', 'PST',
];

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  timezone: string;
  venue: string;
  imagePath?: string;
}

const EventsManager: React.FC = () => {
  // Form state
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('CAT');
  const [venue, setVenue] = useState('');
  const [error, setError] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch events
  useEffect(() => {
    setLoading(true);
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(() => setError('Failed to load events'))
      .finally(() => setLoading(false));
  }, []);

  // Reset form
  const resetForm = () => {
    setImage(null);
    setTitle('');
    setDate('');
    setTime('');
    setTimezone('CAT');
    setVenue('');
    setEditId(null);
    setError('');
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (date && new Date(date) <= new Date()) {
      setError('Date must be in the future.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const formData = new FormData();
      const eventObj = {
        id: editId,
        title,
        date,
        time,
        timezone,
        venue,
      };
      formData.append('event', new Blob([JSON.stringify(eventObj)], { type: 'application/json' }));
      if (image) formData.append('image', image);
      const method = editId ? 'PUT' : 'POST';
      const url = editId ? `/api/events/${editId}` : '/api/events';
      const res = await fetch(url, {
        method,
        body: formData,
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || 'Failed to save event');
      }
      // Refresh events
      const updated = await res.json();
      if (editId) {
        setEvents(evts => evts.map(ev => ev.id === updated.id ? updated : ev));
      } else {
        setEvents(evts => [...evts, updated]);
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save event');
    } finally {
      setSubmitting(false);
    }
  };

  // Handle edit
  const handleEdit = (event: Event) => {
    setEditId(event.id);
    setTitle(event.title);
    setDate(event.date);
    setTime(event.time);
    setTimezone(event.timezone);
    setVenue(event.venue);
    setImage(null);
    setError('');
  };

  // Handle delete
  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      await fetch(`/api/events/${id}`, { method: 'DELETE' });
      setEvents(evts => evts.filter(ev => ev.id !== id));
    } catch {
      setError('Failed to delete event');
    }
  };

  const getImageUrl = (imagePath?: string) => {
    if (!imagePath) return undefined;
    // Always extract the filename for robustness
    const filename = imagePath.split('/').pop();
    return `/api/events/image/${encodeURIComponent(filename ?? imagePath)}`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">{editId ? 'Edit Event' : 'Add Event'}</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Event Image</label>
            <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} className="block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Title<span className="text-red-500">*</span></label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Date<span className="text-red-500">*</span></label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200" min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} />
          </div>
          <div className="flex flex-col mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Time<span className="text-red-500">*</span></label>
            <input type="time" value={time} onChange={e => setTime(e.target.value)} required className="block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Timezone<span className="text-red-500">*</span></label>
            <select value={timezone} onChange={e => setTimezone(e.target.value)} required className="block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
              {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Venue<span className="text-red-500">*</span></label>
            <input type="text" value={venue} onChange={e => setVenue(e.target.value)} required className="block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="md:col-span-2 flex justify-end mt-2 gap-2">
            {editId && <button type="button" className="bg-gray-300 px-4 py-2 rounded-lg font-semibold" onClick={resetForm}>Cancel</button>}
            <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition" disabled={submitting}>{submitting ? 'Saving...' : (editId ? 'Update Event' : 'Add Event')}</button>
          </div>
        </form>
        {error && <div className="text-red-600 mt-4 font-medium">{error}</div>}
      </div>

      <div className="bg-white rounded shadow p-6">
        <h3 className="text-lg font-bold mb-4">Existing Events</h3>
        {loading ? <div>Loading events...</div> : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 border">ID</th>
                <th className="px-2 py-1 border">Image</th>
                <th className="px-2 py-1 border">Title</th>
                <th className="px-2 py-1 border">Date</th>
                <th className="px-2 py-1 border">Time</th>
                <th className="px-2 py-1 border">Timezone</th>
                <th className="px-2 py-1 border">Venue</th>
                <th className="px-2 py-1 border">Actions</th>
                <th className="px-2 py-1 border">Links</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-4">No events yet.</td></tr>
              ) : events.map(event => (
                <tr key={event.id}>
                  <td className="border px-2 py-1">{event.id}</td>
                  <td className="border px-2 py-1">{event.imagePath ? <img src={getImageUrl(event.imagePath)} alt="event" className="w-12 h-12 object-cover rounded" /> : '-'}</td>
                  <td className="border px-2 py-1">{event.title}</td>
                  <td className="border px-2 py-1">{event.date}</td>
                  <td className="border px-2 py-1">{event.time}</td>
                  <td className="border px-2 py-1">{event.timezone}</td>
                  <td className="border px-2 py-1">{event.venue}</td>
                  <td className="border px-2 py-1">
                    <button className="text-blue-600 hover:underline mr-2" onClick={() => handleEdit(event)}>Edit</button>
                    <button className="text-red-600 hover:underline" onClick={() => handleDelete(event.id)}>Delete</button>
                  </td>
                  <td className="border px-2 py-1">
                    <a href="#" className="text-blue-600 hover:underline mr-2">Show Attendees</a>
                    <a href="#" className="text-blue-600 hover:underline mr-2">Show Sponsors</a>
                    <a href="#" className="text-blue-600 hover:underline">Show Exhibitors</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </div>
  );
};

export default EventsManager; 