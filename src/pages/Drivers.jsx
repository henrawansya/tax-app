import { useState, useEffect } from 'react'
import DriverCard from '../components/DriverCard'

export default function Drivers() {
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const mockDrivers = [
    {
      id: 1,
      name: 'Budi Santoso',
      rating: 4.8,
      vehicle: 'Toyota Avanza',
      status: 'Online',
      price: 'Rp 50.000/km',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Ahmad Wijaya',
      rating: 4.9,
      vehicle: 'Honda Odyssey',
      status: 'Online',
      price: 'Rp 55.000/km',
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Rudi Hermawan',
      rating: 4.7,
      vehicle: 'Suzuki Ertiga',
      status: 'Offline',
      price: 'Rp 45.000/km',
      image: '👨‍💼',
    },
    {
      id: 4,
      name: 'Toni Kusuma',
      rating: 4.6,
      vehicle: 'Daihatsu Xenia',
      status: 'Online',
      price: 'Rp 40.000/km',
      image: '👨‍💼',
    },
  ]

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setDrivers(mockDrivers)
        setLoading(false)
      } catch (err) {
        setError('Gagal memuat data driver')
        setLoading(false)
      }
    }

    fetchDrivers()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-blue-600">Loading drivers...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Driver Tersedia</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  )
}
