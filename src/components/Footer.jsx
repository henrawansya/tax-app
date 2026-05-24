export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🚕 TAX App</h3>
            <p className="text-gray-400">
              Layanan transportasi online terpercaya dengan driver profesional dan harga terjangkau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu Cepat</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition">Driver</a></li>
              <li><a href="#" className="hover:text-white transition">Admin</a></li>
              <li><a href="#" className="hover:text-white transition">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +62 812-3456-7890</li>
              <li>📧 info@taxapp.com</li>
              <li>📍 Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TAX App. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
