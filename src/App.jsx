import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Drivers from './pages/Drivers'
import Admin from './pages/Admin'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'drivers' && <Drivers />}
        {currentPage === 'admin' && <Admin />}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
