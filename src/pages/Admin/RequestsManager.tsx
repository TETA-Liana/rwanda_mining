import React, { useEffect, useState } from 'react';

const RequestsManager: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState<'all' | 'sponsor' | 'exhibitor'>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/requests?type=${type}&search=${encodeURIComponent(search)}`)
      .then(res => res.json())
      .then(data => setRequests(data))
      .catch(() => setRequests([]))
      .finally(() => setLoading(false));
  }, [search, type]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Requests Manager</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name, company, or event..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-64"
        />
        <select
          value={type}
          onChange={e => setType(e.target.value as any)}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="sponsor">Sponsor</option>
          <option value="exhibitor">Exhibitor</option>
        </select>
      </div>
      <div className="bg-white rounded shadow p-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 font-semibold">Type</th>
                <th className="py-2 px-4 font-semibold">Name</th>
                <th className="py-2 px-4 font-semibold">Company</th>
                <th className="py-2 px-4 font-semibold">Event</th>
                <th className="py-2 px-4 font-semibold">Email</th>
                <th className="py-2 px-4 font-semibold">Phone</th>
                <th className="py-2 px-4 font-semibold">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {requests.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-4">No requests found.</td></tr>
              ) : (
                requests.map((req, idx) => (
                  <tr key={req.type + '-' + req.id + '-' + idx} className="border-b">
                    <td className="py-2 px-4 capitalize">{req.type}</td>
                    <td className="py-2 px-4">{req.name}</td>
                    <td className="py-2 px-4">{req.company}</td>
                    <td className="py-2 px-4">{req.event}</td>
                    <td className="py-2 px-4">{req.email}</td>
                    <td className="py-2 px-4">{req.phone}</td>
                    <td className="py-2 px-4">{req.createdAt ? new Date(req.createdAt).toLocaleString() : ''}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RequestsManager; 