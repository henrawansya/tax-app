import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    passengerName: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: 1,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking Data:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      passengerName: '',
      pickupLocation: '',
      dropoffLocation: '',
      date: '',
      time: '',
      passengers: 1,
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Pesan Perjalanan</h2>

      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          ✓ Pemesanan berhasil!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Nama Penumpang</label>
          <input
            type="text"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Lokasi Penjemputan</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Dari mana?"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Lokasi Tujuan</label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Tujuan?"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Tanggal</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Waktu</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Jumlah Penumpang</label>
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Penumpang
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
        >
          Pesan Sekarang
        </button>
      </form>
    </div>
  )
}
