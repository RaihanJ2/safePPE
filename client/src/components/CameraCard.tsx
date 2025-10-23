type CameraCardProps = {
  name: string;
  status: 'active' | 'offline';
  lastUpdate: string;
  alerts: number;
}

export default function CameraCard({ name, status, lastUpdate, alerts }: CameraCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-500">{lastUpdate}</span>
          </div>
        </div>
      </div>

      {alerts > 0 && (
        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
          {alerts} Alert{alerts !== 1 ? 's' : ''}
        </span>
      )}
    </div>
  );
}