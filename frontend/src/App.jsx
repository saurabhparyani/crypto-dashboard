import CurrencyConverter from "./components/CurrencyConverter"
import NewsFeed from "./components/NewsFeed"

const App = () => {

  return (
    <div className="flex flex-col bg-slate-200 h-screen">
      <h1 className="text-5xl my-5 font-bold text-center">Crypto Dashboard</h1>
      <div className="flex flex-row justify-center">
        <div className="bg-beige mx-4 pb-6 rounded drop-shadow-xl shadow-inner w-1/2">
          <CurrencyConverter />
        </div>
        <div className="bg-idk rounded drop-shadow-xl shadow-inner w-3/12">
          <NewsFeed />
        </div>
      </div>
    </div>
  )
}

export default App
