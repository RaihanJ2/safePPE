import ChartCard from '../../components/ChartCard';
import AlertCard from '../../components/AlertCard';
import CameraCard from '../../components/CameraCard';
import DetectionLogTable from './DetectionLogTable';
import PPEChart from './PPEChart';

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard 
          title="Person Detection"
          value="24"
          trend="+12%"
          description="People detected today"
          type="count"
        />
        <ChartCard 
          title="PPE Coverage"
          value="92%"
          trend="+5%"
          description="Current compliance rate"
          type="percentage"
        />
        <AlertCard 
          count={3}
          description="Active alerts need attention"
          alerts={[
            { type: 'warning', message: 'No helmet detected', location: 'Camera Room' },
            { type: 'danger', message: 'Multiple violations', location: 'Loading Bay' }
          ]}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - PPE Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">PPE Compliance Trend</h3>
            <PPEChart />
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Detections</h3>
            <DetectionLogTable />
          </div>
        </div>

        {/* Right Column - Cameras & Alerts */}
        <div className="space-y-6">
          {/* Active Cameras */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Active Cameras</h3>
              <button className="text-sm text-yellow-600 hover:text-yellow-700">View All</button>
            </div>
            <div className="space-y-4">
              <CameraCard 
                name="Loading Bay"
                status="active"
                lastUpdate="2m ago"
                alerts={2}
              />
              <CameraCard 
                name="Main Entrance"
                status="active"
                lastUpdate="1m ago"
                alerts={0}
              />
              <CameraCard 
                name="Assembly Line"
                status="active"
                lastUpdate="Just now"
                alerts={1}
              />
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Firestore Sync</span>
                <span className="text-green-600 font-medium">Connected</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">BigQuery Analytics</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}