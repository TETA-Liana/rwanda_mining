import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-yellow-700 text-center">Manage Latest Updates</h2>
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label className="block font-semibold mb-1">Update Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleFileChange} className="w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Title<span className="text-red-500">*</span></label>
            <input type="text" name="title" value={form.title} onChange={handleInputChange} required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description<span className="text-red-500">*</span></label>
            <textarea name="description" value={form.description} onChange={handleInputChange} required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Update Report (PDF)</label>
            <input type="file" name="report" accept="application/pdf" onChange={handleFileChange} className="w-full" />
          </div>
          <button type="submit" className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-6 rounded transition duration-300">
            {editingId !== null ? 'Update' : 'Add Update'}
          </button>
        </form>
        <h3 className="text-xl font-semibold mb-4">Existing Updates</h3>
        <div className="space-y-4">
          {updates.length === 0 && <div className="text-gray-500">No updates yet.</div>}
          {updates.map(u => (
            <div key={u.id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-bold text-yellow-700">{u.title}</div>
                <div className="text-gray-700">{u.description}</div>
                {u.image && <div className="mt-2 text-xs text-gray-500">[Image uploaded]</div>}
                {u.report && <div className="mt-2 text-xs text-gray-500">[PDF uploaded]</div>}
              </div>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <button onClick={() => handleEdit(u.id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(u.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesManager; 