import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  youtubeLink?: string;
  testimony: string;
  witnessName: string;
  witnessTitle: string;
  witnessCompany: string;
}

// Backend model mapping
interface BackendTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  youtubeLink?: string;
  // createdAt, updatedAt can be added if needed
}

const API_URL = 'http://localhost:8080/api/testimonials';

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<Omit<Testimonial, 'id'>>({
    youtubeLink: '',
    testimony: '',
    witnessName: '',
    witnessTitle: '',
    witnessCompany: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Map backend testimonial to frontend
  const mapFromBackend = (t: BackendTestimonial): Testimonial => ({
    id: t.id,
    testimony: t.message,
    witnessName: t.name,
    witnessTitle: t.role,
    witnessCompany: t.company,
    youtubeLink: t.youtubeLink || '',
  });

  // Map frontend testimonial to backend
  const mapToBackend = (t: Omit<Testimonial, 'id'>): Omit<BackendTestimonial, 'id'> => ({
    name: t.witnessName,
    role: t.witnessTitle,
    company: t.witnessCompany,
    message: t.testimony,
    youtubeLink: t.youtubeLink || null,
  });

  // Load testimonials from backend
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then((data: BackendTestimonial[]) => {
        setTestimonials(data.map(mapFromBackend));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load testimonials');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.testimony || !form.witnessName || !form.witnessTitle || !form.witnessCompany) return;
    setLoading(true);
    try {
    if (editingId !== null) {
        // Update
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapToBackend(form)),
        });
        if (!res.ok) throw new Error('Failed to update testimonial');
        const updated = mapFromBackend(await res.json());
        setTestimonials((prev) => prev.map(t => t.id === editingId ? updated : t));
      setEditingId(null);
    } else {
        // Create
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapToBackend(form)),
        });
        if (!res.ok) throw new Error('Failed to create testimonial');
        const created = mapFromBackend(await res.json());
        setTestimonials((prev) => [...prev, created]);
    }
    setForm({ youtubeLink: '', testimony: '', witnessName: '', witnessTitle: '', witnessCompany: '' });
    } catch (err: any) {
      setError(err.message || 'Error saving testimonial');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
      setForm({ ...testimonial });
      setEditingId(id);
    }
  };

  const handleDelete = async (id: number) => {
    setError('');
    setLoading(true);
    try {
              const res = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE',
        });
      if (!res.ok) throw new Error('Failed to delete testimonial');
    setTestimonials((prev) => prev.filter(t => t.id !== id));
    if (editingId === id) {
      setForm({ youtubeLink: '', testimony: '', witnessName: '', witnessTitle: '', witnessCompany: '' });
      setEditingId(null);
      }
    } catch (err: any) {
      setError(err.message || 'Error deleting testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Add / Edit Testimonial</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block font-semibold text-base mb-2">YouTube Link</label>
            <input type="url" name="youtubeLink" value={form.youtubeLink} onChange={handleInputChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
        </div>
          <div className="md:col-span-2">
            <label className="block font-semibold text-base mb-2">Testimony<span className="text-red-500">*</span></label>
            <textarea name="testimony" value={form.testimony} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
        </div>
        <div>
            <label className="block font-semibold text-base mb-2">Witness Name<span className="text-red-500">*</span></label>
            <input type="text" name="witnessName" value={form.witnessName} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
        </div>
        <div>
            <label className="block font-semibold text-base mb-2">Witness Title<span className="text-red-500">*</span></label>
            <input type="text" name="witnessTitle" value={form.witnessTitle} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
        </div>
        <div>
            <label className="block font-semibold text-base mb-2">Witness Company<span className="text-red-500">*</span></label>
            <input type="text" name="witnessCompany" value={form.witnessCompany} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
        </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300" disabled={loading}>
          {editingId !== null ? 'Update Testimonial' : 'Add Testimonial'}
        </button>
          </div>
          {error && <div className="md:col-span-2 text-red-600 text-sm font-semibold mt-2">{error}</div>}
      </form>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Existing Testimonials</h3>
        {loading ? (
          <div className="text-center text-gray-500 py-4">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold">ID</th>
                  <th className="py-2 px-4 font-semibold">Witness</th>
                  <th className="py-2 px-4 font-semibold">Testimony</th>
                  <th className="py-2 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.length === 0 && (
                  <tr><td colSpan={4} className="text-center text-gray-500 py-4">No testimonials yet.</td></tr>
                )}
        {testimonials.map(t => (
                  <tr key={t.id} className="border-b">
                    <td className="py-2 px-4">{t.id}</td>
                    <td className="py-2 px-4">
                      <div className="font-bold text-blue-900">{t.witnessName}</div>
                      <div className="text-xs text-gray-500">{t.witnessTitle} at {t.witnessCompany}</div>
              {t.youtubeLink && <a href={t.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs">YouTube</a>}
                    </td>
                    <td className="py-2 px-4">{t.testimony}</td>
                    <td className="py-2 px-4">
                      <button onClick={() => handleEdit(t.id)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">Edit</button>
                      <button onClick={() => handleDelete(t.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
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

export default TestimonialsManager; 