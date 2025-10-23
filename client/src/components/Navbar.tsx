import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Monitoring Dashboard',
  '/cameras': 'Security Cameras',
  '/updates': 'System Updates',
  '/license': 'License Management'
};

export default function Navbar() {
  const { pathname } = useLocation();
  const pageTitle = pageTitles[pathname] || 'Dashboard';

  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {pathname === '/' ? 'Real-time PPE monitoring overview' : 'Manage your security system'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Live
          </div>

          {/* User/Settings Menu */}
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}