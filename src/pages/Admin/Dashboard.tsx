import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition duration-300"
            onClick={() => navigate('/admin/highlights')}
          >
            Manage Highlights
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition duration-300"
            onClick={() => navigate('/admin/articles')}
          >
            Manage News Articles
          </button>
          <button
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition duration-300"
            onClick={() => navigate('/admin/updates')}
          >
            Manage Latest Updates
          </button>
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition duration-300"
            onClick={() => navigate('/admin/testimonials')}
          >
            Manage Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 