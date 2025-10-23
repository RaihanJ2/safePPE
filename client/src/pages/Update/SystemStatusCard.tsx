export default function SystemStatusCard() {
  const services = [
    { name: 'Firestore Connection', status: 'connected', latency: '45ms' },
    { name: 'BigQuery Analytics', status: 'connected', latency: '120ms' },
    { name: 'Camera Streams', status: 'partial', latency: '250ms' },
    { name: 'AI Processing', status: 'connected', latency: '80ms' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'partial': return 'bg-yellow-500';
      case 'disconnected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">System Status</h3>
        <button className="text-sm text-yellow-600 hover:text-yellow-700">Refresh</button>
      </div>

      <div className="mt-4 space-y-4">
        {services.map((service) => (
          <div key={service.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${getStatusColor(service.status)}`} />
              <span className="font-medium">{service.name}</span>
            </div>
            <div className="text-sm text-gray-500">{service.latency}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div className="font-medium text-yellow-800">System Maintenance</div>
            <p className="text-sm text-yellow-700 mt-1">
              Scheduled maintenance in 2 days. Some features may be temporarily unavailable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}