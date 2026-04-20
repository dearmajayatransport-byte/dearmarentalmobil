# Dearma Sewa Mobil Medan

Website resmi Dearma Sewa Mobil Medan - Penyedia layanan sewa mobil terpercaya di Medan, Sumatera Utara.

## Fitur

- 🏠 **Homepage** dengan animasi otomotif penuh
- 🚗 **Fleet Page** - Daftar armada mobil dengan filter
- 📝 **Services** - Paket layanan sewa mobil
- 📰 **Articles** - Blog dan tips perjalanan
- 📍 **Contact** - Formulir kontak, Google Maps, social links
- ⚙️ **Admin Dashboard** - Kelola mobil, artikel, pengaturan (Firebase Auth)
- 📱 **Responsif** - Tampilan mobile-first

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Firebase Firestore
- **Auth**: Firebase Auth
- **Media**: Cloudinary

## Panduan Installasi

```bash
# Clone repository
git clone https://github.com/username/dearma.git
cd dearma

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan konfigurasi Firebase & Cloudinary

# Run development server
npm run dev
```

## Konfigurasi Environment Variables

Buat file `.env.local` dengan:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Deploy ke Vercel

1. Push ke GitHub
2. Import project di vercel.com
3. Tambahkan environment variables
4. Deploy!

## Struktur Project

```
app/
├── admin/        # Halaman admin dashboard
├── articles/    # Halaman blog
├── components/   # Komponen reusable
├── config/      # Konfigurasi Firebase & Cloudinary
├── contact/     # Halaman kontak
├── fleet/      # Halaman armada mobil
├── services/    # Halaman layanan
├── types/      # TypeScript types
├── layout.tsx   # Root layout
├── page.tsx    # Homepage
└── globals.css # Global styles
```

## License

MIT License - Dearma Sewa Mobil Medan © 2024