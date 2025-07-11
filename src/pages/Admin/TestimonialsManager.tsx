import React, { useState } from 'react';

interface Testimonial {
  id: number;
  youtubeLink?: string;
  testimony: string;
  witnessName: string;
  witnessTitle: string;
  witnessCompany: string;
}

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.testimony || !form.witnessName || !form.witnessTitle || !form.witnessCompany) return;
    if (editingId !== null) {
      setTestimonials((prev) => prev.map(t => t.id === editingId ? { ...form, id: editingId } : t));
      setEditingId(null);
    } else {
      setTestimonials((prev) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    }
    setForm({ youtubeLink: '', testimony: '', witnessName: '', witnessTitle: '', witnessCompany: '' });
  };

  const handleEdit = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
      setForm({ ...testimonial });
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setTestimonials((prev) => prev.filter(t => t.id !== id));
    if (editingId === id) {
      setForm({ youtubeLink: '', testimony: '', witnessName: '', witnessTitle: '', witnessCompany: '' });
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 text-center">Manage Testimonials</h2>
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label className="block font-semibold mb-1">YouTube Link</label>
            <input type="url" name="youtubeLink" value={form.youtubeLink} onChange={handleInputChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Testimony<span className="text-red-500">*</span></label>
            <textarea name="testimony" value={form.testimony} onChange={handleInputChange} required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Witness Name<span className="text-red-500">*</span></label>
            <input type="text" name="witnessName" value={form.witnessName} onChange={handleInputChange} required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Witness Title<span className="text-red-500">*</span></label>
            <input type="text" name="witnessTitle" value={form.witnessTitle} onChange={handleInputChange} required className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Witness Company<span className="text-red-500">*</span></label>
            <input type="text" name="witnessCompany" value={form.witnessCompany} onChange={handleInputChange} required className="w-full border rounded p-2" />
          </div>
          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded transition duration-300">
            {editingId !== null ? 'Update Testimonial' : 'Add Testimonial'}
          </button>
        </form>
        <h3 className="text-xl font-semibold mb-4">Existing Testimonials</h3>
        <div className="space-y-4">
          {testimonials.length === 0 && <div className="text-gray-500">No testimonials yet.</div>}
          {testimonials.map(t => (
            <div key={t.id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                {t.youtubeLink && <a href={t.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs">YouTube</a>}
                <div className="font-bold text-purple-700">{t.witnessName}</div>
                <div className="text-gray-700">{t.testimony}</div>
                <div className="text-xs text-gray-500">{t.witnessTitle} at {t.witnessCompany}</div>
              </div>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <button onClick={() => handleEdit(t.id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(t.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsManager; 