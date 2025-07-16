import React, { useState, useEffect } from 'react';

interface Highlight {
  id: number;
  day: string;
  mainImagePath: string;
  title: string;
  description: string;
}

interface BackendHighlight {
  id: number;
  title: string;
  description: string;
  mainImagePath?: string;
  day: string;
}

const API_URL = 'http://localhost:8080/api/highlights';

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const HighlightsManager = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [form, setForm] = useState<Partial<Highlight>>({ day: '' });
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Map backend highlight to frontend
  const mapFromBackend = (h: BackendHighlight): Highlight => ({
    id: h.id,
    day: h.day,
    mainImagePath: h.mainImagePath || '',
    title: h.title,
    description: h.description,
  });

  // Load highlights from backend
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then((data: BackendHighlight[]) => {
        setHighlights(data.map(mapFromBackend));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load highlights');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.name === 'highlightImage') {
      setMainImageFile(e.target.files[0]);
    }
  };

  const uploadMainImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_URL}/upload-image`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to upload main image');
    return await response.text();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.day) return;
    setLoading(true);
    try {
      let mainImagePath = form.mainImagePath || '';
      if (mainImageFile) {
        mainImagePath = await uploadMainImage(mainImageFile);
      } else if (editingId !== null) {
        const existing = highlights.find(h => h.id === editingId);
        mainImagePath = existing?.mainImagePath || '';
      }
      const highlightData = {
        ...form,
        mainImagePath,
      };
      if (editingId !== null) {
        // Update
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(highlightData),
        });
        if (!res.ok) throw new Error('Failed to update');
        const updated = mapFromBackend(await res.json());
        setHighlights((prev) => prev.map(h => h.id === editingId ? updated : h));
        setEditingId(null);
      } else {
        // Create
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(highlightData),
        });
        if (!res.ok) throw new Error('Failed to create highlight');
        const created = mapFromBackend(await res.json());
        setHighlights((prev) => [...prev, created]);
      }
      setForm({ day: '' });
      setMainImageFile(null);
    } catch (err: any) {
      setError(err.message || 'Error saving highlight');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    const highlight = highlights.find(h => h.id === id);
    if (highlight) {
      setForm({ ...highlight });
      setMainImageFile(null);
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
      if (!res.ok) throw new Error('Failed to delete highlight');
      setHighlights((prev) => prev.filter(h => h.id !== id));
      if (editingId === id) {
        setForm({ day: '' });
        setMainImageFile(null);
        setEditingId(null);
      }
    } catch (err: any) {
      setError(err.message || 'Error deleting highlight');
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (filename: string) => {
    if (!filename) return '';
    return `${API_URL}/image/${encodeURIComponent(filename)}`;
  };

  return (
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
            {mainImageFile && <div className="text-sm text-gray-600 mt-1">Selected: {mainImageFile.name}</div>}
            {form.mainImagePath && !mainImageFile && (
              <img src={getImageUrl(form.mainImagePath)} alt="Highlight" className="w-24 h-24 object-contain mt-2 rounded" />
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold text-base mb-2">Highlight Title</label>
            <input type="text" name="title" value={form.title || ''} onChange={handleInputChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold text-base mb-2">Highlight Description</label>
            <textarea name="description" value={form.description || ''} onChange={handleInputChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300" disabled={loading}>
              {editingId !== null ? 'Update Highlight' : 'Add Highlight'}
            </button>
          </div>
          {error && <div className="md:col-span-2 text-red-600 text-sm font-semibold mt-2">{error}</div>}
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
                <th className="py-2 px-4 font-semibold">Main Image</th>
                <th className="py-2 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {highlights.length === 0 && (
                <tr><td colSpan={6} className="text-center text-gray-500 py-4">No highlights yet.</td></tr>
              )}
              {highlights.map(h => (
                <tr key={h.id} className="border-b">
                  <td className="py-2 px-4">{h.id}</td>
                  <td className="py-2 px-4">{h.day}</td>
                  <td className="py-2 px-4">{h.title}</td>
                  <td className="py-2 px-4">{h.description}</td>
                  <td className="py-2 px-4">
                    {h.mainImagePath && (
                      <img src={getImageUrl(h.mainImagePath)} alt="Main" className="w-16 h-16 object-contain rounded" />
                    )}
                  </td>
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
  );
};

export default HighlightsManager; 