import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';

interface Article {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  releaseDate: string;
  link: string;
}

interface BackendArticle {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  imagePath?: string;
  link: string;
}

const API_URL = 'http://localhost:8080/api/articles';

const ArticlesManager = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [form, setForm] = useState<Omit<Article, 'id' | 'imagePath'>>({
    title: '',
    description: '',
    releaseDate: '',
    link: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Map backend article to frontend
  const mapFromBackend = (a: BackendArticle): Article => ({
    id: a.id,
    title: a.title,
    description: a.description,
    releaseDate: a.releaseDate,
    imagePath: a.imagePath || '',
    link: a.link,
  });

  // Load articles from backend
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then((data: BackendArticle[]) => {
        setArticles(data.map(mapFromBackend));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load articles');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_URL}/upload-image`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to upload image');
    return await response.text();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.title || !form.description || !form.releaseDate || !form.link) return;
    setLoading(true);
    try {
      let imagePath = '';
      if (imageFile) {
        imagePath = await uploadImage(imageFile);
      } else if (editingId !== null) {
        // Keep existing image if editing and no new file selected
        const existing = articles.find(a => a.id === editingId);
        imagePath = existing?.imagePath || '';
      }
      const articleData = {
        ...form,
        imagePath,
      };
      if (editingId !== null) {
        // Update
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData),
        });
        if (!res.ok) throw new Error('Failed to update');
        const updated = mapFromBackend(await res.json());
        setArticles((prev) => prev.map(a => a.id === editingId ? updated : a));
        setEditingId(null);
      } else {
        // Create
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData),
        });
        if (!res.ok) throw new Error('Failed to create article');
        const created = mapFromBackend(await res.json());
        setArticles((prev) => [...prev, created]);
      }
      setForm({ title: '', description: '', releaseDate: '', link: '' });
      setImageFile(null);
      // Reset file input
      const imageInput = document.querySelector('input[name="image"]') as HTMLInputElement;
      if (imageInput) imageInput.value = '';
    } catch (err: any) {
      setError(err.message || 'Error saving article');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    const article = articles.find(a => a.id === id);
    if (article) {
      setForm({
        title: article.title,
        description: article.description,
        releaseDate: article.releaseDate,
        link: article.link,
      });
      setEditingId(id);
      setImageFile(null);
    }
  };

  const handleDelete = async (id: number) => {
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete article');
      setArticles((prev) => prev.filter(a => a.id !== id));
      if (editingId === id) {
        setForm({ title: '', description: '', releaseDate: '', link: '' });
        setEditingId(null);
        setImageFile(null);
      }
    } catch (err: any) {
      setError(err.message || 'Error deleting article');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Add / Edit Article</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-base mb-2">Article Image<span className="text-red-500">*</span></label>
              <input type="file" name="image" accept="image/*" onChange={handleFileChange} className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
              {imageFile && <div className="text-sm text-gray-600 mt-1">Selected: {imageFile.name}</div>}
            </div>
            <div>
              <label className="block font-semibold text-base mb-2">Title<span className="text-red-500">*</span></label>
              <input type="text" name="title" value={form.title} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-base mb-2">Description<span className="text-red-500">*</span></label>
              <textarea name="description" value={form.description} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div>
              <label className="block font-semibold text-base mb-2">Release Date<span className="text-red-500">*</span></label>
              <input type="date" name="releaseDate" value={form.releaseDate} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div>
              <label className="block font-semibold text-base mb-2">Link to Full Article<span className="text-red-500">*</span></label>
              <input type="url" name="link" value={form.link} onChange={handleInputChange} required className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300" disabled={loading}>
                {editingId !== null ? 'Update Article' : 'Add Article'}
              </button>
            </div>
            {error && <div className="md:col-span-2 text-red-600 text-sm font-semibold mt-2">{error}</div>}
          </form>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Existing Articles</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold">ID</th>
                  <th className="py-2 px-4 font-semibold">Image</th>
                  <th className="py-2 px-4 font-semibold">Title</th>
                  <th className="py-2 px-4 font-semibold">Description</th>
                  <th className="py-2 px-4 font-semibold">Release Date</th>
                  <th className="py-2 px-4 font-semibold">Link</th>
                  <th className="py-2 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.length === 0 && (
                  <tr><td colSpan={7} className="text-center text-gray-500 py-4">No articles yet.</td></tr>
                )}
                {articles.map(a => (
                  <tr key={a.id} className="border-b">
                    <td className="py-2 px-4">{a.id}</td>
                    <td className="py-2 px-4">
                      {a.imagePath && (
                        <img src={`${API_URL}/image/${encodeURIComponent(a.imagePath)}`} alt={a.title} className="w-16 h-16 object-contain bg-white rounded" />
                      )}
                    </td>
                    <td className="py-2 px-4">{a.title}</td>
                    <td className="py-2 px-4">{a.description}</td>
                    <td className="py-2 px-4">{a.releaseDate}</td>
                    <td className="py-2 px-4">
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a>
                    </td>
                    <td className="py-2 px-4">
                      <button onClick={() => handleEdit(a.id)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">Edit</button>
                      <button onClick={() => handleDelete(a.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
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

export default ArticlesManager; 