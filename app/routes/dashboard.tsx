import { Outlet } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-800 flex flex-col items-center py-5 space-y-4">
        {['⚽', '🏀', '🎾', '🏈', '🏒'].map((icon, index) => (
          <button key={index} className="text-2xl hover:text-purple-500">
            {icon}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between px-6 py-4 bg-gray-800 text-lg font-semibold">
          <nav className="flex space-x-6">
            {['Matches', 'Live Score', 'Statistics', 'Analytics'].map((item) => (
              <a key={item} href="#" className="hover:text-purple-400">
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* Content */}
        <section className="p-6 flex-1 overflow-auto">
          <Outlet />
        </section>
      </main>

      {/* Right Panel */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="mb-6">
          <h3 className="text-lg font-bold">William Jonson</h3>
          <p className="text-gray-400">My Balance: $275.55</p>
        </div>
        <h4 className="font-semibold mb-2">Top Following</h4>
        <div className="flex space-x-2 mb-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-gray-600 rounded-full" />
          ))}
        </div>
        <h4 className="font-semibold mb-2">UEFA Champions League</h4>
        <div className="bg-purple-600 p-4 rounded-lg text-center">
          <p>Barcelona 3 : 2 Liverpool</p>
          <button className="mt-3 bg-white text-purple-600 px-4 py-1 rounded">Place a Bet</button>
        </div>
      </aside>
    </div>
  );
}
