import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({
    emailOrUsername: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8080/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emailOrUsername: form.emailOrUsername,
          password: form.password,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Invalid credentials');
        setLoading(false);
        return;
      }
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('adminEmail', data.email || 'admin@example.com');
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="emailOrUsername" className="block text-gray-700 text-sm font-bold mb-2">Email or Username</label>
            <input
              type="text"
              id="emailOrUsername"
              name="emailOrUsername"
              value={form.emailOrUsername}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {error && <div className="mb-4 text-red-600 text-sm font-semibold">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 