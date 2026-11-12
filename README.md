# English Academy - Landing Page

Landing page kursus bahasa Inggris dan persiapan IELTS (English Academy) berbasis di BSD City, Tangerang Selatan. Project ini dibuat dengan React, Vite, Tailwind CSS, dan Framer Motion.

## Fitur

- **Katalog Program**: IELTS Preparation, Workplace Business English, Speaking Coaching, dan General English.
- **Integrasi WhatsApp**: Tombol CTA dan pendaftaran tes diagnostik langsung terhubung ke kontak admin WhatsApp.
- **Desain Responsif**: Tampilan optimal untuk perangkat mobile, tablet, hingga desktop.
- **Interaksi & Animasi**: Transisi halus menggunakan Framer Motion dan ikon modern dari Lucide React.
- **Informasi Kampus**: Detail kelas online interaktif dan sesi tatap muka di kampus BSD City.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Cara Menjalankan

### Prasyarat
- Node.js (versi 18 ke atas disarankan)
- npm

### Instalasi & Menjalankan Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/npaujiana/landing-page-kursus-bahasa-inggris.git
   cd landing-page-kursus-bahasa-inggris
   ```

2. Pasang dependensi:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```
   Aplikasi dapat diakses di `http://localhost:5173`.

4. Build untuk production:
   ```bash
   npm run build
   ```

## Struktur Folder

```text
src/
├── components/       # Komponen UI (Hero, Header, Programs, FAQ, Footer, dll.)
├── config/           # Konfigurasi data situs dan kontak (siteConfig.ts)
├── App.tsx           # Komponen utama halaman
├── main.tsx          # Entry point aplikasi
└── index.css         # Styling global & Tailwind CSS setup
```
