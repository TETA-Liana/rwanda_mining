import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

interface Highlight {
  id: number;
  day: string;
  highlightImage?: File | null;
  title?: string;
  description?: string;
  galleryImages?: File[];
}

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const HighlightsManager = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [form, setForm] = useState<Partial<Highlight>>({ day: '' });
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.name === 'highlightImage') {
      setForm((prev) => ({ ...prev, highlightImage: e.target.files![0] }));
    }
    if (e.target.files && e.target.name === 'galleryImages') {
      setGalleryFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.day) return;
    if (editingId !== null) {
      setHighlights((prev) => prev.map(h => h.id === editingId ? { ...h, ...form, galleryImages: galleryFiles } : h));
      setEditingId(null);
    } else {
      setHighlights((prev) => [
        ...prev,
        { ...form, id: Date.now(), galleryImages: galleryFiles } as Highlight
      ]);
    }
    setForm({ day: '' });
    setGalleryFiles([]);
  };

  const handleEdit = (id: number) => {
    const highlight = highlights.find(h => h.id === id);
    if (highlight) {
      setForm({ ...highlight });
      setGalleryFiles(highlight.galleryImages || []);
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setHighlights((prev) => prev.filter(h => h.id !== id));
    if (editingId === id) {
      setForm({ day: '' });
      setGalleryFiles([]);
      setEditingId(null);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Add / Edit Highlight</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-base mb-2">Day of the Week<span className="text-red-500">*</span></label>
              <select name="day" value={form.day || ''} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                <option value="">Select Day</option>
                {daysOfWeek.map(day => <option key={day} value={day}>{day}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold text-base mb-2">Highlight Image</label>
              <input type="file" name="highlightImage" accept="image/*" onChange={handleFileChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-base mb-2">Highlight Title</label>
              <input type="text" name="title" value={form.title || ''} onChange={handleInputChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-base mb-2">Highlight Description</label>
              <textarea name="description" value={form.description || ''} onChange={handleInputChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-base mb-2">Gallery Images (multiple)</label>
              <input type="file" name="galleryImages" accept="image/*" multiple onChange={handleFileChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300">
                {editingId !== null ? 'Update Highlight' : 'Add Highlight'}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Existing Highlights</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold">ID</th>
                  <th className="py-2 px-4 font-semibold">Day</th>
                  <th className="py-2 px-4 font-semibold">Title</th>
                  <th className="py-2 px-4 font-semibold">Description</th>
                  <th className="py-2 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {highlights.length === 0 && (
                  <tr><td colSpan={5} className="text-center text-gray-500 py-4">No highlights yet.</td></tr>
                )}
                {highlights.map(h => (
                  <tr key={h.id} className="border-b">
                    <td className="py-2 px-4">{h.id}</td>
                    <td className="py-2 px-4">{h.day}</td>
                    <td className="py-2 px-4">{h.title}</td>
                    <td className="py-2 px-4">{h.description}</td>
                    <td className="py-2 px-4">
                      <button onClick={() => handleEdit(h.id)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">Edit</button>
                      <button onClick={() => handleDelete(h.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default HighlightsManager; 