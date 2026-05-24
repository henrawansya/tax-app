import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'

export default function Bookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredBookings, setFilteredBookings] = useState([])

  useEffect(() => {
    // Simulasi fetch bookings
    const fetchBookings = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const mockBookings = [
        {
          id: 1,
          date: '2026-05-24',
          time: '10:30',
          passenger: 'Andi Pratama',
          driver: 'Budi Santoso',
          from: 'Jakarta Pusat',
          to: 'Jakarta Selatan',
          status: 'Completed',
          price: 'Rp 150.000',
        },
        {
          id: 2,
          date: '2026-05-24',
          time: '14:15',
          passenger: 'Siti Nurhaliza',
          driver: 'Ahmad Wijaya',
          from: 'Bandung',
          to: 'Jakarta',
          status: 'In Progress',
          price: 'Rp 450.000',
        },
        {
          id: 3,
          date: '2026-05-25',
          time: '08:00',
          passenger: 'Roni Syahputra',
          driver: 'Rudi Hermawan',
          from: 'Bogor',
          to: 'Jakarta Pusat',
          status: 'Pending',
          price: 'Rp 250.000',
        },
      ]
      setBookings(mockBookings)
      setFilteredBookings(mockBookings)
      setLoading(false)
    }
    fetchBookings()
  }, [])

  const handleSearch = (query) => {
    const filtered = bookings.filter(
      (booking) =>
        booking.passenger.toLowerCase().includes(query.toLowerCase()) ||
        booking.driver.toLowerCase().includes(query.toLowerCase()) ||
        booking.from.toLowerCase().includes(query.toLowerCase()) ||
        booking.to.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredBookings(filtered)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">Loading bookings...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Riwayat Pemesanan</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid gap-4">
        {filteredBookings.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <p className="text-yellow-700 font-semibold">Tidak ada pemesanan yang ditemukan</p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <p className="text-gray-600 text-sm">Tanggal & Waktu</p>
                  <p className="font-semibold">{booking.date} {booking.time}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Penumpang</p>
                  <p className="font-semibold">{booking.passenger}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Rute</p>
                  <p className="font-semibold text-sm">{booking.from} → {booking.to}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Driver</p>
                  <p className="font-semibold">{booking.driver}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                      booking.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : booking.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {booking.status}
                  </span>
                  <p className="text-blue-600 font-bold">{booking.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
