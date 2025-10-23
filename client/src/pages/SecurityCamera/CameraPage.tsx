import CameraCard from '../../components/CameraCard';
import MapView from './MapView';
import CameraDetailModal from './CameraDetailModal';
import { useState } from 'react';

const mockCameras = [
  { id: '1', name: 'Loading Bay', location: 'Building A', status: 'active' as const, alerts: 2, lastUpdate: '2m ago' },
  { id: '2', name: 'Main Entrance', location: 'Building A', status: 'active' as const, alerts: 0, lastUpdate: '1m ago' },
  { id: '3', name: 'Assembly Line', location: 'Building B', status: 'active' as const, alerts: 1, lastUpdate: 'Just now' },
  { id: '4', name: 'Storage Area', location: 'Building B', status: 'offline' as const, alerts: 0, lastUpdate: '15m ago' }
];

export default function CameraPage() {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'offline'>('all');

  const filteredCameras = mockCameras.filter(camera => 
    filterStatus === 'all' ? true : camera.status === filterStatus
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Security Cameras</h2>
          <p className="mt-1 text-sm text-gray-500">Monitor and manage your security camera network</p>
        </div>

        <div className="flex items-center gap-4">
          <select 
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
          >
            <option value="all">All Cameras</option>
            <option value="active">Active Only</option>
            <option value="offline">Offline</option>
          </select>

          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors">
            Add Camera
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredCameras.map(camera => (
              <div 
                key={camera.id}
                onClick={() => setSelectedCamera(camera.id)}
                className="cursor-pointer"
              >
                <CameraCard {...camera} />
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Camera Locations</h3>
          <MapView cameras={mockCameras} selectedId={selectedCamera} />
        </div>
      </div>

      {/* Camera Detail Modal */}
      {selectedCamera && (
        <CameraDetailModal 
          camera={mockCameras.find(c => c.id === selectedCamera)!}
          onClose={() => setSelectedCamera(null)}
        />
      )}
    </div>
  );
}