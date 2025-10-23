type Alert = {
  type: 'warning' | 'danger';
  message: string;
  location: string;
}

type AlertCardProps = {
  count: number;
  description: string;
  alerts: Alert[];
}

export default function AlertCard({ count, description, alerts }: AlertCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">Active Alerts</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-semibold text-gray-900">{count}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        
        <div className="p-3 rounded-lg bg-red-50">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {alerts.map((alert, index) => (
          <div 
            key={index}
            className={`p-3 rounded-lg ${
              alert.type === 'danger' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'
            }`}
          >
            <p className="text-sm font-medium text-gray-900">{alert.message}</p>
            <p className="text-xs text-gray-500 mt-1">{alert.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}