export default function Header(){
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">SafePPE Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Realtime PPE monitoring • Live</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h.01M12 6v6" /></svg>
          <span className="text-sm font-medium">Live</span>
        </div>

        <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm">Settings</button>
      </div>
    </header>
  );
}
