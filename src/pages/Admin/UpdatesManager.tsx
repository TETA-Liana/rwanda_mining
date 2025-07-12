import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';

interface Update {
  id: number;
  imagePath?: string;
  title: string;
  description: string;
  reportPath?: string;
}

// Backend model mapping
interface BackendUpdate {
  id: number;
  title: string;
  description: string;
  imagePath?: string;
  reportPath?: string;
  createdAt?: string;
  updatedAt?: string;
}

const API_URL = 'http://localhost:8080/api/updates';

const UpdatesManager = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [form, setForm] = useState<Omit<Update, 'id'>>({
    imagePath: '',
    title: '',
    description: '',
    reportPath: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Map backend update to frontend
  const mapFromBackend = (u: BackendUpdate): Update => ({
    id: u.id,
    title: u.title,
    description: u.description,
    imagePath: u.imagePath || '',
    reportPath: u.reportPath || '',
  });

  // Map frontend update to backend
  const mapToBackend = (u: Omit<Update, 'id'>): Omit<BackendUpdate, 'id'> => ({
    title: u.title,
    description: u.description,
    imagePath: u.imagePath || null,
    reportPath: u.reportPath || null,
  });

  // Load updates from backend
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then((data: BackendUpdate[]) => {
        setUpdates(data.map(mapFromBackend));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load updates');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.name === 'image') {
      // For now, we'll store the filename as the path
      // In a real implementation, you'd upload the file to a server
      const fileName = e.target.files[0].name;
      setForm((prev) => ({ ...prev, imagePath: fileName }));
    }
    if (e.target.files && e.target.name === 'report') {
      const fileName = e.target.files[0].name;
      setForm((prev) => ({ ...prev, reportPath: fileName }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.title || !form.description) return;
    
    setLoading(true);
    try {
      if (editingId !== null) {
        // Update
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapToBackend(form)),
        });
        if (!res.ok) throw new Error('Failed to update');
        const updated = mapFromBackend(await res.json());
        setUpdates((prev) => prev.map(u => u.id === editingId ? updated : u));
        setEditingId(null);
      } else {
        // Create
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapToBackend(form)),
        });
        if (!res.ok) throw new Error('Failed to create update');
        const created = mapFromBackend(await res.json());
        setUpdates((prev) => [...prev, created]);
      }
      setForm({ imagePath: '', title: '', description: '', reportPath: '' });
    } catch (err: any) {
      setError(err.message || 'Error saving update');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    const update = updates.find(u => u.id === id);
    if (update) {
      setForm({ ...update });
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
      if (!res.ok) throw new Error('Failed to delete update');
      setUpdates((prev) => prev.filter(u => u.id !== id));
      if (editingId === id) {
        setForm({ imagePath: '', title: '', description: '', reportPath: '' });
        setEditingId(null);
      }
    } catch (err: any) {
      setError(err.message || 'Error deleting update');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Add / Edit Update</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-base mb-2">Update Image</label>
              <input type="file" name="image" accept="image/*" onChange={handleFileChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
              {form.imagePath && (
                <div className="text-sm text-gray-600 mt-1">Selected: {form.imagePath}</div>
              )}
            </div>
            <div>
              <label className="block font-semibold text-base mb-2">Title<span className="text-red-500">*</span></label>
              <input type="text" name="title" value={form.title} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-base mb-2">Description<span className="text-red-500">*</span></label>
              <textarea name="description" value={form.description} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-base mb-2">Update Report (If any)</label>
              <input type="file" name="report" accept="application/pdf" onChange={handleFileChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
              {form.reportPath && (
                <div className="text-sm text-gray-600 mt-1">Selected: {form.reportPath}</div>
              )}
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300" disabled={loading}>
                {editingId !== null ? 'Update' : 'Add Update'}
              </button>
            </div>
            {error && <div className="md:col-span-2 text-red-600 text-sm font-semibold mt-2">{error}</div>}
          </form>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Existing Updates</h3>
          {loading ? (
            <div className="text-center text-gray-500 py-4">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 font-semibold">ID</th>
                    <th className="py-2 px-4 font-semibold">Title</th>
                    <th className="py-2 px-4 font-semibold">Description</th>
                    <th className="py-2 px-4 font-semibold">Files</th>
                    <th className="py-2 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {updates.length === 0 && (
                    <tr><td colSpan={5} className="text-center text-gray-500 py-4">No updates yet.</td></tr>
                  )}
                  {updates.map(u => (
                    <tr key={u.id} className="border-b">
                      <td className="py-2 px-4">{u.id}</td>
                      <td className="py-2 px-4 font-bold text-blue-900">{u.title}</td>
                      <td className="py-2 px-4">{u.description}</td>
                      <td className="py-2 px-4">
                        {u.imagePath && <div className="text-xs text-gray-600">📷 {u.imagePath}</div>}
                        {u.reportPath && <div className="text-xs text-gray-600">📄 {u.reportPath}</div>}
                      </td>
                      <td className="py-2 px-4">
                        <button onClick={() => handleEdit(u.id)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">Edit</button>
                        <button onClick={() => handleDelete(u.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdatesManager; 