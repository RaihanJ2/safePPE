type Detection = {
  id: string;
  timestamp: string;
  location: string;
  type: 'warning' | 'violation' | 'compliant';
  details: string;
}

const mockData: Detection[] = [
  {
    id: '1',
    timestamp: '2025-10-22T11:45:00',
    location: 'Loading Bay',
    type: 'warning',
    details: 'Missing safety helmet'
  },
  {
    id: '2',
    timestamp: '2025-10-22T11:43:00',
    location: 'Assembly Line',
    type: 'compliant',
    details: 'All PPE requirements met'
  },
  {
    id: '3',
    timestamp: '2025-10-22T11:40:00',
    location: 'Main Entrance',
    type: 'violation',
    details: 'Multiple PPE violations detected'
  }
];

const typeStyles = {
  warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  violation: 'bg-red-50 text-red-700 border-red-200',
  compliant: 'bg-green-50 text-green-700 border-green-200'
};

export default function DetectionLogTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {mockData.map((detection) => (
            <tr key={detection.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                {new Date(detection.timestamp).toLocaleTimeString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {detection.location}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${typeStyles[detection.type]}`}>
                  {detection.type.charAt(0).toUpperCase() + detection.type.slice(1)}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {detection.details}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between px-4">
        <div className="text-sm text-gray-500">
          Showing latest 3 detections
        </div>
        <button className="text-sm text-yellow-600 hover:text-yellow-700">
          View Full Log
        </button>
      </div>
    </div>
  );
}