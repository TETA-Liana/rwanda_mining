import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: '🏠' },
  { name: 'Events', path: '/admin/events', icon: '📅' },
  { name: 'Sponsors', path: '/admin/sponsors', icon: '🤝' },
  { name: 'Exhibitors', path: '/admin/exhibitors', icon: '🏢' },
  { name: 'Requests', path: '/admin/requests', icon: '📨' },
  { name: 'Highlights', path: '/admin/highlights', icon: '✨' },
  { name: 'Articles', path: '/admin/articles', icon: '📰' },
  { name: 'Updates', path: '/admin/updates', icon: '🔔' },
  { name: 'Testimonials', path: '/admin/testimonials', icon: '💬' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
];

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const email = localStorage.getItem('adminEmail') || sessionStorage.getItem('adminEmail') || 'admin@example.com';
  const initial = email.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('adminEmail');
    sessionStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center text-2xl font-bold tracking-wide border-b border-blue-800">
          MiningAdmin
        </div>
        <nav className="flex-1 py-6">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-lg font-medium hover:bg-blue-800 transition ${isActive ? 'bg-blue-800' : ''}`
              }
            >
              <span className="mr-3 text-xl">{item.icon}</span> {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-blue-800 flex items-center justify-between px-8 shadow text-white relative">
          <div className="text-xl font-semibold">Admin Panel</div>
          <div className="flex items-center space-x-4 relative">
            <button
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg focus:outline-none"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              {initial}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-14 w-56 bg-white rounded-lg shadow-lg py-2 z-50 text-gray-900">
                <div className="px-4 py-2 border-b text-sm text-gray-700">{email}</div>
                <button
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-base text-gray-700"
                  onClick={() => { setDropdownOpen(false); navigate('/admin/profile'); }}
                >
                  <span className="mr-2 text-blue-700">👤</span> Profile
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-base text-red-600"
                  onClick={handleLogout}
                >
                  <span className="mr-2">↩️</span> Log out
                </button>
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 p-8 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 