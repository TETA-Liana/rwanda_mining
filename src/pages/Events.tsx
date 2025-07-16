import React, { useEffect, useState } from 'react';

// Event type based on backend model
interface EventType {
  id: number;
  title: string;
  date: string; // ISO string
  time: string; // e.g. "09:00:00"
  timezone: string;
  venue: string;
  imagePath?: string;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatTime(timeStr: string) {
  // timeStr is like "09:00:00"
  if (!timeStr) return '';
  const [h, m] = timeStr.split(":");
  const date = new Date();
  date.setHours(Number(h), Number(m));
  return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function EventCard({ event }: { event: EventType }) {
  // Compose image URL
  const imageUrl = event.imagePath
    ? `/api/events/image/${encodeURIComponent(event.imagePath)}`
    : '/placeholder-event.jpg';
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={event.title}
          className="object-cover w-full h-full"
          onError={e => (e.currentTarget.src = '/placeholder-event.jpg')}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            {event.timezone}
          </span>
          <span className="text-gray-500 text-xs">{formatDate(event.date)} • {formatTime(event.time)}</span>
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">{event.title}</h3>
        <div className="flex items-center gap-2 mt-auto">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="text-gray-700 text-sm font-medium">{event.venue}</span>
        </div>
      </div>
    </div>
  );
}

const Events = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/events')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch events');
        const data = await res.json();
        setEvents(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching events');
        setEvents([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 text-center drop-shadow-sm">Upcoming Events</h2>
        {loading ? (
          <div className="text-center text-blue-700 py-10 text-lg">Loading events...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 text-lg">{error}</div>
        ) : events.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-lg">No events found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
