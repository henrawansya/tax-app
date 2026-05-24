export default function DriverCard({ driver }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <div className="text-5xl mb-4">{driver.image}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{driver.name}</h3>
      <div className="mb-3">
        <span className="text-yellow-500">⭐ {driver.rating}</span>
        <span
          className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${
            driver.status === 'Online'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {driver.status}
        </span>
      </div>
      <p className="text-gray-600 mb-2">
        <strong>Kendaraan:</strong> {driver.vehicle}
      </p>
      <p className="text-blue-600 font-semibold mb-4">{driver.price}</p>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
        Pesan Driver
      </button>
    </div>
  )
}
