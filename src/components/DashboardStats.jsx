import { useState, useEffect } from 'react'

export default function DashboardStats() {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulasi fetch data statistik
    const fetchStats = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStats([
        { label: 'Pemesanan Hari Ini', value: '24', icon: '📊', color: 'blue' },
        { label: 'Driver Online', value: '18', icon: '👥', color: 'green' },
        { label: 'Penumpang Aktif', value: '42', icon: '🚗', color: 'yellow' },
        { label: 'Pendapatan Hari Ini', value: 'Rp 2.4M', icon: '💰', color: 'purple' },
      ])
      setLoading(false)
    }
    fetchStats()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading statistik...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition`}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <h3 className="text-sm font-semibold opacity-90">{stat.label}</h3>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
