import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition" onClick={() => navigate('/admin/events')}>
          <div className="text-2xl text-blue-700 mb-2">📅</div>
          <div className="font-bold text-lg">Events</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition" onClick={() => navigate('/admin/sponsors')}>
          <div className="text-2xl text-blue-700 mb-2">🤝</div>
          <div className="font-bold text-lg">Sponsors</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition" onClick={() => navigate('/admin/exhibitors')}>
          <div className="text-2xl text-blue-700 mb-2">🏢</div>
          <div className="font-bold text-lg">Exhibitors</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition" onClick={() => navigate('/admin/attendees')}>
          <div className="text-2xl text-blue-700 mb-2">🧑‍🤝‍🧑</div>
          <div className="font-bold text-lg">Attendees</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition" onClick={() => navigate('/admin/requests')}>
          <div className="text-2xl text-blue-700 mb-2">📨</div>
          <div className="font-bold text-lg">Requests</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="text-2xl text-yellow-600 mb-2">⏰</div>
          <div className="font-bold text-lg">Pending Highlights</div>
          <div className="text-3xl font-bold mt-2">0</div>
          <div className="text-gray-500 text-sm">Awaiting review</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="text-2xl text-blue-600 mb-2">🕒</div>
          <div className="font-bold text-lg">Under Review</div>
          <div className="text-3xl font-bold mt-2">0</div>
          <div className="text-gray-500 text-sm">Being processed</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="text-2xl text-green-600 mb-2">✅</div>
          <div className="font-bold text-lg">Approved</div>
          <div className="text-3xl font-bold mt-2">1</div>
          <div className="text-gray-500 text-sm">Successfully completed</div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="font-bold text-xl mb-2">Highlight Categories</div>
        <div className="text-gray-600 mb-4">Distribution of highlights by category</div>
        {/* Placeholder for chart or list */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-600 rounded-full inline-block"></span>
            <span className="font-medium">Sample Category</span>
            <span className="ml-2 text-gray-500">1</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-bold text-xl">Recent Highlights</div>
            <div className="text-gray-600 text-sm">Latest highlights for your event</div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">All Highlights</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 font-semibold">ID</th>
                <th className="py-2 px-4 font-semibold">Title</th>
                <th className="py-2 px-4 font-semibold">Day</th>
                <th className="py-2 px-4 font-semibold">Status</th>
                <th className="py-2 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Sample Highlight</td>
                <td className="py-2 px-4">Monday</td>
                <td className="py-2 px-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">APPROVED</span></td>
                <td className="py-2 px-4 text-blue-700 font-semibold cursor-pointer">View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/admin/profile" className="text-blue-700 underline">Go to Profile</Link>
      </div>
    </>
  );
};

export default Dashboard; 