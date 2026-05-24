import { useState } from 'react'

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', key: 'home' },
    { name: 'Driver', key: 'drivers' },
    { name: 'Admin', key: 'admin' },
  ]

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">🚕 TAX App</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === item.key
                    ? 'bg-white text-blue-600 font-bold'
                    : 'hover:bg-blue-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key)
                  setMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  currentPage === item.key
                    ? 'bg-white text-blue-600 font-bold'
                    : 'hover:bg-blue-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
