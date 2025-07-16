import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dashboardItems = [
  { label: 'Events', path: '/admin/events', api: '/api/events' },
  { label: 'Sponsors', path: '/admin/sponsors', api: '/api/sponsors' },
  { label: 'Exhibitors', path: '/admin/exhibitors', api: '/api/exhibitors' },
  { label: 'Attendees', path: '/admin/attendees', api: '/api/attendees' },
  { label: 'Requests', path: '/admin/requests', api: '/api/requests' },
  { label: 'Updates', path: '/admin/updates', api: '/api/updates' },
  { label: 'Articles', path: '/admin/articles', api: '/api/articles' },
  { label: 'Testimonials', path: '/admin/testimonials', api: '/api/testimonials' },
  { label: 'Highlights', path: '/admin/highlights', api: '/api/highlights' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    dashboardItems.forEach(item => {
      fetch(item.api)
        .then(res => res.json())
        .then(data => {
          let count = 0;
          if (Array.isArray(data)) {
            count = data.length;
          } else if (data && data.content && Array.isArray(data.content)) {
            count = data.content.length;
          }
          setCounts(prev => ({ ...prev, [item.label]: count }));
        })
        .catch(() => {
          setCounts(prev => ({ ...prev, [item.label]: 0 }));
        });
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {dashboardItems.map(item => (
        <div
          key={item.label}
          className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition"
          onClick={() => navigate(item.path)}
        >
          <div className="text-3xl font-bold text-blue-700 mb-2">{counts[item.label] ?? '-'}</div>
          <div className="font-bold text-lg">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard; 