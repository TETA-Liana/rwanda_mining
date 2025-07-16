import React, { useEffect, useState } from 'react';

const AttendeesManager: React.FC = () => {
  const [attendees, setAttendees] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/requests/attendees/granted')
      .then(res => res.json())
      .then(data => setAttendees(data))
      .catch(() => setAttendees([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendees Manager</h1>
      <div className="bg-white rounded shadow p-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-1 px-2 font-semibold">Name</th>
                <th className="py-1 px-2 font-semibold">Company</th>
                <th className="py-1 px-2 font-semibold">Event</th>
                <th className="py-1 px-2 font-semibold">Email</th>
                <th className="py-1 px-2 font-semibold">Granted At</th>
              </tr>
            </thead>
            <tbody>
              {attendees.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-4">No attendees found.</td></tr>
              ) : (
                attendees.map((at, idx) => (
                  <tr key={at.id + '-' + idx} className="border-b">
                    <td className="py-1 px-2">{at.firstName} {at.lastName}</td>
                    <td className="py-1 px-2">{at.companyName}</td>
                    <td className="py-1 px-2">{at.event}</td>
                    <td className="py-1 px-2">{at.email}</td>
                    <td className="py-1 px-2">{at.grantedAt ? new Date(at.grantedAt).toLocaleDateString() : ''}</td>
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

export default AttendeesManager; 