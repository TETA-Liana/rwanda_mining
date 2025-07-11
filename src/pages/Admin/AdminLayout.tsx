import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: '🏠' },
  { name: 'Highlights', path: '/admin/highlights', icon: '✨' },
  { name: 'Articles', path: '/admin/articles', icon: '📰' },
  { name: 'Updates', path: '/admin/updates', icon: '🔔' },
  { name: 'Testimonials', path: '/admin/testimonials', icon: '💬' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
        <header className="h-16 bg-blue-800 flex items-center justify-between px-8 shadow text-white">
          <div className="text-xl font-semibold">Admin Panel</div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">U</div>
          </div>
        </header>
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout; 