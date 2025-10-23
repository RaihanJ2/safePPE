const releases = [
  {
    version: 'v1.9.0',
    date: '2025-10-19',
    type: 'major',
    notes: [
      'Improved PPE detection accuracy by 5%',
      'Added support for new camera models',
      'Enhanced real-time notification system'
    ]
  },
  {
    version: 'v1.8.2',
    date: '2025-10-10',
    type: 'patch',
    notes: [
      'Fixed camera connection stability issues',
      'Performance optimizations'
    ]
  },
  {
    version: 'v1.8.1',
    date: '2025-10-05',
    type: 'patch',
    notes: [
      'Bug fixes in reporting module',
      'Updated dependencies'
    ]
  }
];

export default function ReleaseNotes() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold">Release Notes</h3>

      <div className="mt-6 relative">
        <div className="absolute top-0 bottom-0 left-[1.625rem] w-px bg-gray-200" />
        
        <div className="space-y-8">
          {releases.map((release) => (
            <div key={release.version} className="relative">
              <div className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  release.type === 'major' ? 'bg-yellow-500 border-yellow-500' : 'bg-white border-gray-300'
                }`} />
                <div>
                  <div className="font-medium">{release.version}</div>
                  <div className="text-sm text-gray-500">{release.date}</div>
                </div>
              </div>

              <div className="mt-3 ml-8">
                <ul className="list-disc text-sm text-gray-600 space-y-2 marker:text-yellow-500">
                  {release.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-6 w-full text-center text-sm text-gray-600 hover:text-gray-900">
        View Full History
      </button>
    </div>
  );
}