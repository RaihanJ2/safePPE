type Camera = {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'offline';
  alerts: number;
  lastUpdate: string;
}

type Props = {
  camera: Camera;
  onClose: () => void;
}

export default function CameraDetailModal({ camera, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{camera.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{camera.location}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {/* Preview */}
          <div className="col-span-2 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Info Cards */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-500">Status</div>
            <div className="mt-1 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${camera.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="font-medium text-gray-900">
                {camera.status.charAt(0).toUpperCase() + camera.status.slice(1)}
              </span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-500">Last Update</div>
            <div className="mt-1 font-medium text-gray-900">{camera.lastUpdate}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-500">IP Address</div>
            <div className="mt-1 font-medium text-gray-900">192.168.1.100</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-500">Active Feeds</div>
            <div className="mt-1 font-medium text-gray-900">4 streams</div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors">
            View Live Feed
          </button>
          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
            Configure
          </button>
        </div>
      </div>
    </div>
  );
}