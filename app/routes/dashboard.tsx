import { Outlet,useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import axios from "axios"

const API_URL = "http://localhost:1337/api"

export const loader: LoaderFunction = async()=>{
    const [ matchesRes, leaguesRes ] = await Promise.all([
        axios.get(`${API_URL}/matches?populate=home_team,away_team`),
        axios.get(`${API_URL}/leagues`)
    ]);
}

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

        {/* Hero Section */}
        <section className="relative p-6 bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg shadow-lg mx-6 my-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Win $200,000 with a Free Prediction</h2>
            <p className="text-gray-200 text-sm max-w-md mt-2">
              Energetically implement expanded arch channels through visionary methods.
            </p>
            <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded font-semibold">More Details</button>
          </div>
          <img src="/hero-image.png" alt="Football players" className="w-48 h-auto" />
        </section>

        {/* Matches Table */}
        <section className="p-6">
          <h3 className="text-xl font-semibold mb-4">Football Leagues</h3>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2">League</th>
                  <th className="py-2">All Matches</th>
                  <th className="py-2">Live Play</th>
                  <th className="py-2">Completed</th>
                  <th className="py-2">Scheduled</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { league: 'La Liga', matches: 29 },
                  { league: 'Premier League', matches: 52 },
                  { league: 'Bundesliga', matches: 25 },
                  { league: 'Serie A', matches: 22 },
                  { league: 'League 01', matches: 34 },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2">{item.league}</td>
                    <td className="py-2">{item.matches}</td>
                    <td className="py-2 text-green-400">Live</td>
                    <td className="py-2 text-gray-400">0</td>
                    <td className="py-2 text-gray-400">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
