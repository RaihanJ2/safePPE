import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ChartPPE from "../components/ChartPPE";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <main className="flex-1 p-8 space-y-6">
        <Header />

        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Realtime Overview</h3>
              <p className="text-sm text-gray-500 mt-1">Live PPE detection metrics and camera preview</p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <Card title="Person Count" value="12" accent="yellow" />
                <Card title="PPE Coverage" value="87%" accent="yellow" />
                <Card title="Realtime Alerts" value="2" accent="red" />
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
                  <img src="https://via.placeholder.com/800x400" alt="camera" className="rounded-lg object-cover w-full h-64" />
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-medium">Detection Log</h4>
                    <p className="text-sm text-gray-500 mt-2">Recent events appear here. (Realtime table coming)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-medium">Top Cameras</h4>
                    <ul className="mt-3 space-y-2">
                      {['Camera Hostel','Camera Room','Camera Garden'].map(cam => (
                        <li key={cam} className="flex items-center justify-between border border-gray-100 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-md flex items-center justify-center font-semibold">C</div>
                            <div>
                              <div className="text-sm font-medium">{cam}</div>
                              <div className="text-xs text-gray-400">Active • 4 feeds</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">Online</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">PPE Compliance</h3>
              <div className="mt-4">
                <ChartPPE />
              </div>
            </div>
          </div>

          <aside className="col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold">Alerts</h4>
              <div className="mt-4 space-y-3">
                <div className="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-400">
                  <div className="text-sm font-medium">No Helmet detected</div>
                  <div className="text-xs text-gray-500">Camera Room • 2m ago</div>
                </div>
                <div className="p-3 rounded-lg bg-red-50 border-l-4 border-red-400">
                  <div className="text-sm font-medium">Unauthorized person</div>
                  <div className="text-xs text-gray-500">Camera Garden • 10m ago</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold">Data Sources</h4>
              <p className="text-sm text-gray-500 mt-2">Live: Firestore onSnapshot • BigQuery (batch)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold">Settings</h4>
              <p className="text-sm text-gray-500 mt-2">Quick actions and toggles will go here.</p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
