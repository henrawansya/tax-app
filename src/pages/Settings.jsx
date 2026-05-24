import { useState } from 'react'
import Alert from '../components/Alert'

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'id',
    currency: 'IDR',
  })

  const [alert, setAlert] = useState(null)

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
    setAlert({ type: 'success', message: 'Pengaturan berhasil diubah!' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Pengaturan</h1>

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Notifications */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Notifikasi</h3>
              <p className="text-gray-600 text-sm mt-1">Aktifkan notifikasi push dari aplikasi</p>
            </div>
            <button
              onClick={() => handleToggle('notifications')}
              className={`w-14 h-8 rounded-full transition ${
                settings.notifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white transition transform ${
                  settings.notifications ? 'translate-x-7' : 'translate-x-1'
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Mode Gelap</h3>
              <p className="text-gray-600 text-sm mt-1">Aktifkan mode gelap untuk kenyamanan mata</p>
            </div>
            <button
              onClick={() => handleToggle('darkMode')}
              className={`w-14 h-8 rounded-full transition ${
                settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white transition transform ${
                  settings.darkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="border-b pb-6">
          <label className="block text-xl font-bold text-gray-800 mb-3">Bahasa</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="id">Bahasa Indonesia</option>
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>

        {/* Currency */}
        <div>
          <label className="block text-xl font-bold text-gray-800 mb-3">Mata Uang</label>
          <select
            name="currency"
            value={settings.currency}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="IDR">IDR (Rupiah Indonesia)</option>
            <option value="USD">USD (Dollar Amerika)</option>
            <option value="SGD">SGD (Dollar Singapura)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
