import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/admin/profile';

const getToken = () => localStorage.getItem('token') || sessionStorage.getItem('token');

const Profile: React.FC = () => {
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch profile');
        return res.json();
      })
      .then(data => {
        setProfile({ name: data.name || '', email: data.email || '', password: '' });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load profile');
        setLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(profile),
      });
      if (!res.ok) throw new Error('Failed to update profile');
      setSuccess('Profile updated successfully!');
      setEditMode(false);
      setProfile(prev => ({ ...prev, password: '' }));
    } catch (err: any) {
      setError(err.message || 'Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Your Profile</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {success && <div className="text-green-600 mb-4">{success}</div>}
      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Password (leave blank to keep unchanged)</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div className="flex gap-4 mt-6">
          {editMode ? (
            <>
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300" disabled={loading}>
                Save
              </button>
              <button type="button" className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded transition duration-300" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile; 