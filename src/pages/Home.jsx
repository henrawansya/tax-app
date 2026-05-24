import { useState, useEffect } from 'react'
import BookingForm from '../components/BookingForm'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">TAX App</h1>
          <p className="text-xl mb-8">Layanan Transportasi Online Terpercaya</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Pesan Sekarang
          </button>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Pesan Perjalanan Anda</h2>
          <BookingForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Responsive Mobile</h3>
              <p className="text-gray-600">Akses mudah dari smartphone Anda di mana saja kapan saja</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Driver Profesional</h3>
              <p className="text-gray-600">Driver terlatih dan berpengalaman untuk keselamatan Anda</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pembayaran Aman</h3>
              <p className="text-gray-600">Berbagai metode pembayaran yang aman dan terpercaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2">Penumpang Puas</p>
            </div>
            <div className="bg-green-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2">Driver Profesional</p>
            </div>
            <div className="bg-yellow-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="mt-2">Perjalanan Selesai</p>
            </div>
            <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold">4.9⭐</h3>
              <p className="mt-2">Rating Aplikasi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
