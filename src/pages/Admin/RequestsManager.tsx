import React, { useEffect, useState } from 'react';

const RequestsManager: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState<'all' | 'sponsor' | 'exhibitor'>('all');
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<{[key: string]: boolean}>({});

  const fetchRequests = () => {
    setLoading(true);
    fetch(`/api/requests?type=${type}&search=${encodeURIComponent(search)}`)
      .then(res => res.json())
      .then(data => setRequests(data))
      .catch(() => setRequests([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRequests();
    // eslint-disable-next-line
  }, [search, type]);

  const handleAction = async (req: any, action: 'grant' | 'deny') => {
    setActionLoading(l => ({ ...l, [req.type + '-' + req.id]: true }));
    let url = '';
    if (req.type === 'sponsor') {
      url = `/api/requests/sponsor/${req.id}/${action}`;
    } else if (req.type === 'exhibitor') {
      url = `/api/requests/exhibitor/${req.id}/${action}`;
    } else if (req.type === 'attendee') {
      url = `/api/requests/attendee/${req.id}/${action}`;
    }
    await fetch(url, { method: 'POST' });
    setActionLoading(l => ({ ...l, [req.type + '-' + req.id]: false }));
    fetchRequests();
  };

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
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-1 px-2 font-semibold">Type</th>
                <th className="py-1 px-2 font-semibold">Name</th>
                <th className="py-1 px-2 font-semibold">Company</th>
                <th className="py-1 px-2 font-semibold">Event</th>
                <th className="py-1 px-2 font-semibold">Email</th>
                <th className="py-1 px-2 font-semibold">Submitted</th>
                <th className="py-1 px-2 font-semibold">Status</th>
                <th className="py-1 px-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-2">No requests found.</td>
                </tr>
              ) : (
                requests.map((req, idx) => (
                  <tr key={req.type + '-' + req.id + '-' + idx} className="border-b">
                    <td className="py-1 px-2 capitalize">{req.type}</td>
                    <td className="py-1 px-2 break-words">{req.name}</td>
                    <td className="py-1 px-2 break-words">{req.company}</td>
                    <td className="py-1 px-2 break-words">{req.event}</td>
                    <td className="py-1 px-2 break-words">{req.email}</td>
                    <td className="py-1 px-2">{req.createdAt ? new Date(req.createdAt).toLocaleDateString() : ''}</td>
                    <td className="py-1 px-2">{req.raw && req.raw.status ? req.raw.status : 'PENDING'}</td>
                    <td className="py-1 px-2">
                      {(!req.raw || req.raw.status === 'PENDING') ? (
                        <>
                          <button
                            className="bg-green-500 text-white px-2 py-1 rounded mr-1 text-xs"
                            disabled={actionLoading[req.type + '-' + req.id]}
                            onClick={() => handleAction(req, 'grant')}
                          >
                            {actionLoading[req.type + '-' + req.id] ? 'Granting...' : 'Grant'}
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                            disabled={actionLoading[req.type + '-' + req.id]}
                            onClick={() => handleAction(req, 'deny')}
                          >
                            {actionLoading[req.type + '-' + req.id] ? 'Denying...' : 'Deny'}
                          </button>
                        </>
                      ) : (
                        <span className="text-gray-400">No actions</span>
                      )}
                    </td>
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