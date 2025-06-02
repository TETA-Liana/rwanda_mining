import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-20">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
