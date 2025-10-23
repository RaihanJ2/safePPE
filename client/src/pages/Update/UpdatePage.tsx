import SystemStatusCard from './SystemStatusCard';
import ReleaseNotes from './ReleaseNotes';

export default function UpdatePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">System Updates</h2>
        <p className="mt-1 text-sm text-gray-500">Monitor system status and manage updates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* System Status */}
          <SystemStatusCard />

          {/* AI Model Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Active AI Models</h3>
            
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">PPE Detection v1.9.0</div>
                    <p className="text-sm text-gray-500 mt-1">Last updated 3 days ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">Active</span>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500">Accuracy</div>
                    <div className="text-lg font-semibold text-yellow-500">98.5%</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Processing</div>
                    <div className="text-lg font-semibold text-yellow-500">45ms</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Objects</div>
                    <div className="text-lg font-semibold text-yellow-500">5,234</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors">
              Check for Updates
            </button>
          </div>
        </div>

        <div>
          {/* Release Notes */}
          <ReleaseNotes />
        </div>
      </div>
    </div>
  );
}