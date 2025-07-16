import React, { useEffect, useState } from 'react';

const SponsorsManager: React.FC = () => {
  const [sponsors, setSponsors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/requests/sponsors/granted')
      .then(res => res.json())
      .then(data => setSponsors(data))
      .catch(() => setSponsors([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sponsors Manager</h1>
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
              {sponsors.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-4">No sponsors found.</td></tr>
              ) : (
                sponsors.map((sp, idx) => (
                  <tr key={sp.id + '-' + idx} className="border-b">
                    <td className="py-2 px-4">{sp.sponsorName}</td>
                    <td className="py-2 px-4">{sp.sponsorCompany}</td>
                    <td className="py-2 px-4">{sp.event}</td>
                    <td className="py-2 px-4">{sp.sponsorEmail}</td>
                    <td className="py-2 px-4">{sp.sponsorPhone}</td>
                    <td className="py-2 px-4">{sp.grantedAt ? new Date(sp.grantedAt).toLocaleString() : ''}</td>
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

export default SponsorsManager; 