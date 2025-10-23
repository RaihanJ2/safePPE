
export default function LicensePage() {
  const users = [
    { name: 'John Smith', email: 'john@example.com', role: 'Admin', lastActive: '2 hours ago' },
    { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Operator', lastActive: '5 mins ago' },
    { name: 'Mike Brown', email: 'mike@example.com', role: 'Viewer', lastActive: '1 day ago' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">License Management</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your system license and authorized users</p>
      </div>

      {/* License Warning Banner */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <div className="font-medium text-yellow-800">License Expiring Soon</div>
            <p className="text-sm text-yellow-700 mt-1">
              Your license will expire in 30 days. Please renew to maintain uninterrupted service.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* License Status */}

          {/* Authorized Users */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Authorized Users</h3>
              <button className="text-sm text-yellow-600 hover:text-yellow-700">Add User</button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                        <th className="relative px-4 py-3"><span className="sr-only">Actions</span></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.email} className="hover:bg-gray-50">
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                          <td className="px-4 py-4 text-sm text-gray-500">{user.email}</td>
                          <td className="px-4 py-4 text-sm text-gray-500">{user.role}</td>
                          <td className="px-4 py-4 text-sm text-gray-500">{user.lastActive}</td>
                          <td className="px-4 py-4 text-right text-sm">
                            <button className="text-yellow-600 hover:text-yellow-700">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  );
}