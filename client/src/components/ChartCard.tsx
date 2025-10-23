type ChartCardProps = {
  title: string;
  value: string;
  trend: string;
  description: string;
  type: 'count' | 'percentage';
}

export default function ChartCard({ title, value, trend, description, type }: ChartCardProps) {
  const isPositive = trend.startsWith('+');
  const trendColor = isPositive ? 'text-green-600' : 'text-red-600';
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-semibold text-gray-900">{value}</p>
            <span className={`ml-2 text-sm font-medium ${trendColor}`}>
              {trend}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        
        <div className={`p-3 rounded-lg ${type === 'count' ? 'bg-yellow-50' : 'bg-blue-50'}`}>
          {type === 'count' ? (
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}