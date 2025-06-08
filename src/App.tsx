import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import MiningIndaba from './pages/about/MiningIndaba'
import Team from './pages/about/mining-indaba/Team'
import MediaPage from './pages/about/media/MediaPage'
import PartnersPage from './pages/about/partners/PartnersPage'
import Sustainability from './pages/about/Sustainability'
import Highlights from './pages/about/Highlights'
import ThursdayHighlights from './pages/about/highlights/ThursdayHighlights'
import WednesdayHighlights from './pages/about/highlights/WednesdayHighlights'
import TuesdayHighlights from './pages/about/highlights/TuesdayHighlights'
import MondayHighlights from './pages/about/highlights/MondayHighlights'
import SundayHighlights from './pages/about/highlights/SundayHighlights'
import Contact from './pages/about/Contact'
import ExplorationJuniorMiningCompanies from './pages/attend/why-attend/ExplorationJuniorMiningCompanies'

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-20">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/mining-indaba" element={<MiningIndaba />} />
          <Route path="/about/mining-indaba/team" element={<Team />} />
          <Route path="/about/partners" element={<PartnersPage />} />
          <Route path="/about/media" element={<MediaPage/>}/>
          <Route path="/about/sustainability" element={<Sustainability />} />
          <Route path="/about/highlights" element={<Highlights />} />
          <Route path="/about/highlights/thursday" element={<ThursdayHighlights />} />
          <Route path="/about/highlights/wednesday" element={<WednesdayHighlights />} />
          <Route path="/about/highlights/tuesday" element={<TuesdayHighlights />} />
          <Route path="/about/highlights/monday" element={<MondayHighlights />} />
          <Route path="/about/highlights/sunday" element={<SundayHighlights />} />
          <Route path="/about/contact" element={<Contact />} />
          <Route path="/attend/why-attend/exploration-junior" element={<ExplorationJuniorMiningCompanies />} />
        </Routes>
        {/* Fixed Chat Icon Placeholder */}
        <div className="fixed bottom-6 right-6 bg-[#64a63a] text-white rounded-full p-3 shadow-lg cursor-pointer">
          {/* Placeholder for chat icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4.911 2a2.25 2.25 0 0 0-2.105 2.541L5.003 18.75H6.75a.75.75 0 0 0 0-1.5H5.318l-1.17-11.697L7.438 4.5H16.5a.75.75 0 0 0 0-1.5H7.183c-.224 0-.447.04-.662.12L3.611 1.823a2.25 2.25 0 0 0-1.5-.623ZM17.25 6a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0V6ZM20.25 6a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0V6ZM16.5 18.75h-2.25a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5Z" />
          </svg>
        </div>
      </div>
    </Router>
  )
}

export default App
