import { useState } from 'react'
import DashboardCard from '../components/DashboardCard'

export default function Admin() {
  const [stats] = useState({
    totalBookings: 156,
    totalRevenue: 'Rp 15.600.000',
    activeDrivers: 12,
    totalUsers: 245,
  })

  const [bookings] = useState([
    { id: 1, passenger: 'Andi Pratama', driver: 'Budi Santoso', status: 'Completed' },
    { id: 2, passenger: 'Siti Nurhaliza', driver: 'Ahmad Wijaya', status: 'In Progress' },
    { id: 3, passenger: 'Roni Syahputra', driver: 'Rudi Hermawan', status: 'Pending' },
    { id: 4, passenger: 'Dewi Lestari', driver: 'Toni Kusuma', status: 'Completed' },
    { id: 5, passenger: 'Hendra Kusuma', driver: 'Budi Santoso', status: 'In Progress' },
  ])

  const dashboardCards = [
    { title: 'Total Pemesanan', value: stats.totalBookings, icon: '📊', color: 'bg-blue-100' },
    { title: 'Total Pendapatan', value: stats.totalRevenue, icon: '💰', color: 'bg-green-100' },
    { title: 'Driver Aktif', value: stats.activeDrivers, icon: '👨‍💼', color: 'bg-yellow-100' },
    { title: 'Total User', value: stats.totalUsers, icon: '👥', color: 'bg-purple-100' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardCards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pemesanan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Penumpang</th>
                <th className="px-4 py-2 text-left">Driver</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">#{booking.id}</td>
                  <td className="px-4 py-2">{booking.passenger}</td>
                  <td className="px-4 py-2">{booking.driver}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : booking.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
