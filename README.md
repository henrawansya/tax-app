# TAX App - Layanan Transportasi Online

## 📱 Fitur Utama

- ✅ Responsive Mobile Design
- ✅ Dashboard Admin
- ✅ Form Pemesanan
- ✅ Daftar Driver Online
- ✅ Tema Biru Modern
- ✅ Siap Dijadikan APK Android
- ✅ Siap Integrasi Firebase
- ✅ Siap Login Google

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **State Management:** useState & useEffect
- **Deployment:** Vercel

## 📁 Struktur Folder

```
tax-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BookingForm.jsx
│   │   ├── DriverCard.jsx
│   │   ├── DashboardCard.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Drivers.jsx
│   │   ├── Admin.jsx
│   │   └── Login.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── index.html
```

## 🚀 Cara Menjalankan Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Akses di `http://localhost:5173`

### 3. Build untuk Production
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

## 📤 Deploy ke Vercel

### 1. Push ke GitHub
```bash
git add .
git commit -m "TAX App Initial Setup"
git push origin main
```

### 2. Deploy
1. Buka https://vercel.com
2. Login dengan akun GitHub
3. Klik "New Project"
4. Import repository `tax-app`
5. Klik "Deploy"

### 3. Hasil Deploy
Website akan otomatis online dengan URL seperti:
```
https://tax-app-henrawansya.vercel.app
```

## 📝 Hooks yang Digunakan

### useState
Menyimpan dan mengupdate state dalam komponen:
```javascript
const [formData, setFormData] = useState({...})
const [loading, setLoading] = useState(true)
```

### useEffect
Menjalankan side effects seperti fetch data:
```javascript
useEffect(() => {
  // Fetch data
  return () => {
    // Cleanup
  }
}, []) // Dependency array
```

## 📞 Kontak & Dukungan

- Email: info@taxapp.com
- WhatsApp: +62 812-3456-7890
- Lokasi: Jakarta, Indonesia

## 📄 Lisensi

MIT License - Bebas digunakan untuk tujuan komersial dan non-komersial.

---

**Happy Coding! 🎉**
