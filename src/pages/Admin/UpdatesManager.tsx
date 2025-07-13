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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [reportFile, setReportFile] = useState<File | null>(null);

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
      setImageFile(e.target.files[0]);
      setForm((prev) => ({ ...prev, imagePath: e.target.files![0].name }));
    }
    if (e.target.files && e.target.name === 'report') {
      setReportFile(e.target.files[0]);
      setForm((prev) => ({ ...prev, reportPath: e.target.files![0].name }));
    }
  };

  const uploadFile = async (file: File, type: 'image' | 'report'): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    
    const endpoint = type === 'image' ? `${API_URL}/upload-image` : `${API_URL}/upload-report`;
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Failed to upload ${type}`);
    }
    
    return await response.text();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.title || !form.description) return;
    
    setLoading(true);
    try {
      let imagePath = form.imagePath;
      let reportPath = form.reportPath;
      
      // Upload files if new ones are selected
      if (imageFile) {
        const uploaded = await uploadFile(imageFile, 'image');
        imagePath = uploaded; // store only filename
      }
      if (reportFile) {
        const uploaded = await uploadFile(reportFile, 'report');
        reportPath = uploaded; // store only filename
      }
      
      const updateData = {
        ...form,
        imagePath,
        reportPath,
      };
      
      if (editingId !== null) {
        // Update
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapToBackend(updateData)),
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
          body: JSON.stringify(mapToBackend(updateData)),
        });
        if (!res.ok) throw new Error('Failed to create update');
        const created = mapFromBackend(await res.json());
        setUpdates((prev) => [...prev, created]);
      }
      
      // Reset form
      setForm({ imagePath: '', title: '', description: '', reportPath: '' });
      setImageFile(null);
      setReportFile(null);
      
      // Reset file inputs
      const imageInput = document.querySelector('input[name="image"]') as HTMLInputElement;
      const reportInput = document.querySelector('input[name="report"]') as HTMLInputElement;
      if (imageInput) imageInput.value = '';
      if (reportInput) reportInput.value = '';
      
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
      setImageFile(null);
      setReportFile(null);
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
        setImageFile(null);
        setReportFile(null);
      }
    } catch (err: any) {
      setError(err.message || 'Error deleting update');
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return null;
    // If it's a full path, use the file endpoint
    if (imagePath.includes('/')) {
      return `${API_URL}/file?path=${encodeURIComponent(imagePath)}`;
    }
    // If it's just a filename, use the image endpoint
    return `${API_URL}/image/${encodeURIComponent(imagePath)}`;
  };

  const getReportUrl = (reportPath: string) => {
    if (!reportPath) return null;
    // If it's a full path, use the file endpoint
    if (reportPath.includes('/')) {
      return `${API_URL}/file?path=${encodeURIComponent(reportPath)}`;
    }
    // If it's just a filename, use the report endpoint
    return `${API_URL}/report/${encodeURIComponent(reportPath)}`;
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
                <div className="text-sm text-gray-600 mt-1">
                  {imageFile ? `New file: ${imageFile.name}` : `Current: ${form.imagePath}`}
                </div>
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
                <div className="text-sm text-gray-600 mt-1">
                  {reportFile ? `New file: ${reportFile.name}` : `Current: ${form.reportPath}`}
                </div>
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
                    <th className="py-2 px-4 font-semibold">Image</th>
                    <th className="py-2 px-4 font-semibold">Title</th>
                    <th className="py-2 px-4 font-semibold">Description</th>
                    <th className="py-2 px-4 font-semibold">Report</th>
                    <th className="py-2 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {updates.length === 0 && (
                    <tr><td colSpan={6} className="text-center text-gray-500 py-4">No updates yet.</td></tr>
                  )}
                  {updates.map(u => (
                    <tr key={u.id} className="border-b">
                      <td className="py-2 px-4">{u.id}</td>
                      <td className="py-2 px-4">
                        {u.imagePath && getImageUrl(u.imagePath) && (
                          <img 
                            src={getImageUrl(u.imagePath)!} 
                            alt={u.title}
                            className="w-16 h-16 object-contain bg-white rounded"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                      </td>
                      <td className="py-2 px-4 font-bold text-blue-900">{u.title}</td>
                      <td className="py-2 px-4 max-w-xs truncate">{u.description}</td>
                      <td className="py-2 px-4">
                        {u.reportPath && getReportUrl(u.reportPath) && (
                          <a 
                            href={getReportUrl(u.reportPath)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            📄 Download PDF
                          </a>
                        )}
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