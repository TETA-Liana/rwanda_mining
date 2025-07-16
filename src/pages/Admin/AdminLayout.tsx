import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import {
  HomeIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  UsersIcon,
  EnvelopeIcon,
  SparklesIcon,
  NewspaperIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <HomeIcon className="w-6 h-6" /> },
  { name: 'Events', path: '/admin/events', icon: <CalendarDaysIcon className="w-6 h-6" /> },
  { name: 'Sponsors', path: '/admin/sponsors', icon: <UserGroupIcon className="w-6 h-6" /> },
  { name: 'Exhibitors', path: '/admin/exhibitors', icon: <BuildingOffice2Icon className="w-6 h-6" /> },
  { name: 'Attendees', path: '/admin/attendees', icon: <UsersIcon className="w-6 h-6" /> },
  { name: 'Requests', path: '/admin/requests', icon: <EnvelopeIcon className="w-6 h-6" /> },
  { name: 'Highlights', path: '/admin/highlights', icon: <SparklesIcon className="w-6 h-6" /> },
  { name: 'Articles', path: '/admin/articles', icon: <NewspaperIcon className="w-6 h-6" /> },
  { name: 'Updates', path: '/admin/updates', icon: <BellAlertIcon className="w-6 h-6" /> },
  { name: 'Testimonials', path: '/admin/testimonials', icon: <ChatBubbleLeftRightIcon className="w-6 h-6" /> },
  { name: 'Settings', path: '/admin/settings', icon: <Cog6ToothIcon className="w-6 h-6" /> },
];

const SIDEBAR_WIDTH = 256;

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
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
      <aside
        className={`bg-blue-900 text-white flex flex-col fixed top-0 left-0 h-screen z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}
        style={{ width: SIDEBAR_WIDTH }}
      >
        <div className="h-16 flex items-center justify-center text-2xl font-bold tracking-wide border-b border-blue-800">
          MiningAdmin
        </div>
        <nav className="flex-1 py-6 overflow-y-auto">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-lg font-medium hover:bg-blue-800 transition ${isActive ? 'bg-blue-800' : ''}`
              }
              onClick={() => { if (window.innerWidth < 768) setSidebarOpen(false); }}
            >
              <span className="mr-3">{item.icon}</span> {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Main Content */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0, transition: 'margin-left 0.3s' }}>
        {/* Topbar */}
        <header className="h-16 bg-blue-800 flex items-center justify-between px-8 shadow text-white fixed top-0 z-30 w-full" style={{ left: sidebarOpen ? SIDEBAR_WIDTH : 0, transition: 'left 0.3s' }}>
          <button
            className="mr-4 focus:outline-none bg-transparent hover:bg-transparent border-none shadow-none"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="w-7 h-7" />
          </button>
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
        <main className="flex-1 p-8 bg-gray-100" style={{ marginTop: 64 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 