type Camera = {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'offline';
}

type Props = {
  cameras: Camera[];
  selectedId: string | null;
}

export default function MapView({ cameras, selectedId }: Props) {
  // This is a placeholder component - in a real app, you'd integrate with Leaflet.js or Google Maps
  return (
    <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
      {/* Placeholder Map Grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px bg-gray-200">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="bg-gray-100" />
        ))}
      </div>

      {/* Camera Markers */}
      {cameras.map(camera => (
        <div
          key={camera.id}
          className={`absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 ${
            camera.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
          } ${
            selectedId === camera.id ? 'ring-2 ring-yellow-500 ring-offset-2' : ''
          } rounded-full`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`
          }}
        />
      ))}

      {/* Placeholder Notice */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm text-gray-400">Map View Coming Soon</span>
      </div>
    </div>
  );
}