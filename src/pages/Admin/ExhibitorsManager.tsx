import React, { useEffect, useState } from 'react';

const ExhibitorsManager: React.FC = () => {
  const [exhibitors, setExhibitors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/requests/exhibitors/granted')
      .then(res => res.json())
      .then(data => setExhibitors(data))
      .catch(() => setExhibitors([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exhibitors Manager</h1>
      <div className="bg-white rounded shadow p-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 font-semibold">Name</th>
                <th className="py-2 px-4 font-semibold">Company</th>
                <th className="py-2 px-4 font-semibold">Event</th>
                <th className="py-2 px-4 font-semibold">Email</th>
                <th className="py-2 px-4 font-semibold">Phone</th>
                <th className="py-2 px-4 font-semibold">Granted At</th>
              </tr>
            </thead>
            <tbody>
              {exhibitors.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-4">No exhibitors found.</td></tr>
              ) : (
                exhibitors.map((ex, idx) => (
                  <tr key={ex.id + '-' + idx} className="border-b">
                    <td className="py-2 px-4">{ex.firstName} {ex.lastName}</td>
                    <td className="py-2 px-4">{ex.companyName}</td>
                    <td className="py-2 px-4">{ex.event}</td>
                    <td className="py-2 px-4">{ex.email}</td>
                    <td className="py-2 px-4">{ex.phoneNumber}</td>
                    <td className="py-2 px-4">{ex.grantedAt ? new Date(ex.grantedAt).toLocaleString() : ''}</td>
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

export default ExhibitorsManager; 