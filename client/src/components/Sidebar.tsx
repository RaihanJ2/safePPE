import { Link, useLocation } from 'react-router-dom';

export default function Sidebar(){
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;
  const linkClass = (path: string) => `
    w-full text-left p-2 rounded-md transition-colors
    ${isActive(path) 
      ? 'bg-yellow-50 text-yellow-700' 
      : 'hover:bg-gray-50 text-gray-700'
    }
  `;

  return (
    <aside className="w-64 bg-white shadow-sm flex flex-col justify-between p-6">
      <div>
        <Link to="/monitoring" className="flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center text-white font-bold">O</div>
          <div>
            <div className="text-lg font-semibold">Oniex</div>
            <div className="text-xs text-gray-400">Endpoint Security</div>
          </div>
        </Link>

        <nav className="flex flex-col">
          <Link to="/monitoring" className={linkClass('/monitoring')}>
            📊 Monitoring
          </Link>
          <Link to="/cameras" className={linkClass('/cameras')}>
            🎥 Security Camera
          </Link>
          <Link to="/updates" className={linkClass('/updates')}>
            🔄 Update
          </Link>
          <Link to="/license" className={linkClass('/license')}>
            🧾 License
          </Link>
        </nav>
      </div>

      <div className="text-sm text-gray-500">
        <p>Managed by:</p>
        <p className="font-mono text-xs mt-1 text-gray-700">10.1.1.30</p>
        <p className="mt-2">Connected: <span className="text-green-600 font-medium">Active</span></p>
      </div>
    </aside>
  );
}
