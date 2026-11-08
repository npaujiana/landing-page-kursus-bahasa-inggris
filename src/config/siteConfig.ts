export interface ProgramItem {
  id: string
  name: string
  category: string
  badge: string
  price: string
  pricePeriod: string
  duration: string
  description: string
  learningMaterials: string[]
  benefits: string[]
  ctaText: string
  isFeatured?: boolean
  guaranteeNote?: string
}

export const siteConfig = {
  brand: {
    name: 'NAMA BRAND',
    fullName: 'Nama Brand',
    shortName: 'Nama Brand',
    tagline: 'Tingkatkan Percaya Diri Berbicara Bahasa Inggris & Raih Target Skor IELTS.',
    philosophy: "English is not just a language. It's your next opportunity.",
    subTagline: 'Your English Journey Starts Here.',
    establishedYear: 2021,
    founder: 'Adrian Pratama',
  },
  contact: {
    address: 'Ruko Emerald Avenue, BSD City, Tangerang Selatan, Banten 15345, Indonesia',
    phone: '+62 812-9000-2841',
    whatsappRaw: '6281290002841',
    email: 'info@namabrand.example',
    website: 'https://www.namabrand.example',
    hours: {
      weekday: 'Senin – Jumat: 08.00 – 20.00 WIB',
      saturday: 'Sabtu: 09.00 – 17.00 WIB',
      sunday: 'Minggu: Tutup untuk layanan administrasi reguler',
    },
    socials: {
      instagram: {
        handle: '@namabrand',
        url: 'https://instagram.com/namabrand',
      },
      tiktok: {
        handle: '@namabrand',
        url: 'https://tiktok.com/@namabrand',
      },
      linkedin: {
        handle: 'Nama Brand',
        url: 'https://linkedin.com/company/nama-brand',
      },
    },
  },
  programs: [
    {
      id: 'ielts-prep',
      name: 'IELTS Intensive Prep',
      category: 'Academic & Career Preparation',
      badge: 'Flagship Academic',
      price: 'Mulai Rp3.800.000',
      pricePeriod: '/ program',
      duration: '8 – 12 Minggu (Tergantung hasil assessment)',
      description:
        'Program persiapan IELTS terstruktur untuk membantu kamu memahami strategi ujian, meningkatkan kemampuan akademik, dan mempersiapkan diri mencapai target band score.',
      learningMaterials: [
        'IELTS Listening Strategies & Practice',
        'IELTS Reading Techniques (Skimming & Scanning)',
        'IELTS Writing Task 1 (Report) & Task 2 (Essay)',
        'IELTS Speaking Fluency & Coherence',
        'Academic Vocabulary Development',
        'Grammar Accuracy for Academic English',
        'Simulasi Ujian Mock Test & Evaluasi Performa Berkala',
      ],
      benefits: [
        'Study plan terstruktur berbasis target band score',
        'Tersedia bimbingan oleh tutor berkualifikasi Cambridge CELTA',
        'Feedback personal dan mendalam untuk Writing & Speaking',
        'Simulasi mock test dengan standar pengujian resmi',
        'Evaluasi perkembangan kemampuan secara berkala',
        'Konsultasi strategi beasiswa dan studi luar negeri',
      ],
      ctaText: 'Explore IELTS Preparation',
      isFeatured: true,
      guaranteeNote:
        '*Skema program garansi target skor dapat tersedia berdasarkan hasil diagnostic assessment, tingkat kehadiran kelas, penyelesaian tugas mandiri, dan ketentuan resmi program.',
    },
    {
      id: 'business-english',
      name: 'Workplace Business English',
      category: 'Professional Workplace Communication',
      badge: 'Corporate & Career',
      price: 'Rp1.950.000',
      pricePeriod: '/ level',
      duration: '4 – 6 Minggu / level',
      description:
        'Program Bahasa Inggris profesional untuk meningkatkan kemampuan komunikasi di lingkungan kerja internasional, meeting, presentasi, dan korespondensi bisnis.',
      learningMaterials: [
        'Professional Workplace Communication',
        'Modern Business Vocabulary & Idioms',
        'English for International Meetings & Discussions',
        'Impactful Presentation Skills',
        'Professional Business Email & Report Writing',
        'Negotiation Skills & Persuasive Dialogue',
        'Client Communication & Relationship Management',
        'Workplace Cross-Cultural Etiquette',
      ],
      benefits: [
        'Simulasi situasi dunia kerja nyata (real-world simulation)',
        'Materi berbasis studi kasus bisnis internasional',
        'Latihan percakapan aktif dan role-play interaktif',
        'Peningkatan kepercayaan diri berbicara di depan umum',
        'Evaluasi kemampuan profesional berkala',
        'Sertifikat resmi penyelesaian program',
      ],
      ctaText: 'Explore Business English',
      isFeatured: false,
    },
    {
      id: 'speaking-coaching',
      name: '1-on-1 Speaking Private Coaching',
      category: 'Personalized Fluency & Confidence',
      badge: 'Private 1-on-1',
      price: 'Rp250.000',
      pricePeriod: '/ sesi (60 menit)',
      duration: '60 Menit / sesi (Jadwal fleksibel)',
      description:
        'Program pembelajaran privat yang dirancang untuk membantu kamu berbicara lebih lancar, natural, dan percaya diri melalui bimbingan intensif 1-on-1 bersama tutor berpengalaman.',
      learningMaterials: [
        'Natural Daily Conversation & Small Talk',
        'Pronunciation Improvement & Intonation',
        'Vocabulary Expansion for Real-life Situations',
        'Fluency & Thought-Structuring Techniques',
        'Constructive Real-time Grammar Correction',
        'Confidence & Mindset Building in English',
        'Idiomatic & Natural English Expressions',
      ],
      benefits: [
        'Sesi privat 1-on-1 yang 100% fokus pada kebutuhanmu',
        'Materi dan topik pembelajaran yang fleksibel disesuaikan minat',
        'Koreksi dan feedback langsung di tempat dari tutor',
        'Latihan berbicara aktif tanpa rasa takut salah',
        'Evaluasi perkembangan kelancaran secara personal',
      ],
      ctaText: 'Explore Private Coaching',
      isFeatured: false,
    },
  ] as ProgramItem[],
  trustPoints: [
    { title: 'Established 2021', desc: 'Berpengalaman mendampingi ratusan pembelajar' },
    { title: 'Cambridge CELTA Qualified', desc: 'Kualifikasi pengajar standar internasional' },
    { title: 'Native Speaker Sessions', desc: 'Kesempatan belajar ekspresi & aksen autentik' },
    { title: 'Personalized Approach', desc: 'Rencana belajar sesuai target dan kemampuan' },
    { title: 'Hybrid Learning', desc: 'Pusat belajar BSD City & kelas online interaktif' },
  ],
}

export function buildWhatsAppLink(message?: string): string {
  const defaultText =
    'Halo Tim Admissions Nama Brand, saya ingin berkonsultasi mengenai program kursus dan jadwal diagnostic test gratis.'
  const text = encodeURIComponent(message || defaultText)
  return `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${text}`
}
