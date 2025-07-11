import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

interface Update {
  id: number;
  image?: File | null;
  title: string;
  description: string;
  report?: File | null;
}

const UpdatesManager = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [form, setForm] = useState<Omit<Update, 'id'>>({
    image: null,
    title: '',
    description: '',
    report: null,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.name === 'image') {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
    if (e.target.files && e.target.name === 'report') {
      setForm((prev) => ({ ...prev, report: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;
    if (editingId !== null) {
      setUpdates((prev) => prev.map(u => u.id === editingId ? { ...form, id: editingId } : u));
      setEditingId(null);
    } else {
      setUpdates((prev) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    }
    setForm({ image: null, title: '', description: '', report: null });
  };

  const handleEdit = (id: number) => {
    const update = updates.find(u => u.id === id);
    if (update) {
      setForm({ ...update });
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setUpdates((prev) => prev.filter(u => u.id !== id));
    if (editingId === id) {
      setForm({ image: null, title: '', description: '', report: null });
      setEditingId(null);
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
              <label className="block font-semibold text-base mb-2">Update Report (PDF)</label>
              <input type="file" name="report" accept="application/pdf" onChange={handleFileChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300">
                {editingId !== null ? 'Update' : 'Add Update'}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Existing Updates</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold">ID</th>
                  <th className="py-2 px-4 font-semibold">Title</th>
                  <th className="py-2 px-4 font-semibold">Description</th>
                  <th className="py-2 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {updates.length === 0 && (
                  <tr><td colSpan={4} className="text-center text-gray-500 py-4">No updates yet.</td></tr>
                )}
                {updates.map(u => (
                  <tr key={u.id} className="border-b">
                    <td className="py-2 px-4">{u.id}</td>
                    <td className="py-2 px-4">{u.title}</td>
                    <td className="py-2 px-4">{u.description}</td>
                    <td className="py-2 px-4">
                      <button onClick={() => handleEdit(u.id)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">Edit</button>
                      <button onClick={() => handleDelete(u.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
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

export default UpdatesManager; 