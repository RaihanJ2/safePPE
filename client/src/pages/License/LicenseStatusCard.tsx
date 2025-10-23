export default function LicenseStatusCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold">License Status</h3>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="col-span-2 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500">License Type</div>
              <div className="mt-1 font-medium">Enterprise Plan</div>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">Active</span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Expiration Date</div>
          <div className="mt-1 font-medium">Nov 21, 2025</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Days Remaining</div>
          <div className="mt-1 font-medium text-yellow-600">30 days</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Licensed Users</div>
          <div className="mt-1 font-medium">5 / 10 used</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Active Cameras</div>
          <div className="mt-1 font-medium">8 / 15 used</div>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <div className="flex items-center justify-between text-sm">
        <div className="text-gray-500">
          License ID: <span className="font-mono">ABC-123-XYZ</span>
        </div>
        <button className="text-yellow-600 hover:text-yellow-700">View Details</button>
      </div>
    </div>
  );
}