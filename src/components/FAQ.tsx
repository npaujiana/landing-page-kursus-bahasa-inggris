import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
  category: 'general' | 'programs' | 'pricing' | 'method'
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<'all' | 'general' | 'programs' | 'pricing' | 'method'>('all')

  const faqs: FAQItem[] = [
    {
      q: 'Apakah Lingua Pro Academy menyediakan kelas online dan offline?',
      a: 'Ya, kami menerapkan sistem pembelajaran hybrid. Anda dapat mengikuti kelas tatap muka langsung di kampus kami di Ruko Emerald Avenue, BSD City, Tangerang Selatan, maupun mengikuti kelas daring interaktif dari mana saja di Indonesia.',
      category: 'general',
    },
    {
      q: 'Program apa saja yang tersedia?',
      a: 'Tersedia tiga program utama: 1) IELTS Intensive Prep (persiapan akademik & beasiswa), 2) Workplace Business English (komunikasi kerja profesional), dan 3) 1-on-1 Speaking Private Coaching (bimbingan percakapan intensif). Kami juga menyediakan Free Online English Diagnostic Test.',
      category: 'programs',
    },
    {
      q: 'Berapa biaya mengikuti program IELTS Preparation?',
      a: 'Biaya program IELTS Intensive Prep dimulai dari Rp3.800.000 per program (durasi 8–12 minggu). Program mencakup strategi menyeluruh 4 modul ujian (Listening, Reading, Writing, Speaking), bank soal, dan simulasi mock test berkala.',
      category: 'pricing',
    },
    {
      q: 'Apakah tersedia kelas Business English untuk profesional?',
      a: 'Ya, program Workplace Business English dirancang khusus bagi profesional, staf kantor multinasional, maupun eksekutif dengan biaya Rp1.950.000 per level (4–6 minggu). Kurikulum berfokus pada rapat kerja, presentasi bisnis, korespondensi email, dan negosiasi.',
      category: 'programs',
    },
    {
      q: 'Bagaimana cara mengikuti Speaking Private Coaching?',
      a: 'Speaking Private Coaching memiliki skema biaya Rp250.000 per sesi (60 menit). Jadwal kelas fleksibel dan materi disesuaikan dengan topik percakapan yang ingin Anda latih bersama tutor.',
      category: 'programs',
    },
    {
      q: 'Apakah saya harus mengikuti diagnostic test sebelum mendaftar?',
      a: 'Tes diagnostik sangat dianjurkan agar rencana belajar Anda tepat sasaran. Tes diagnostik online ini 100% gratis dan tidak mewajibkan Anda untuk langsung mendaftar kelas berbayar.',
      category: 'method',
    },
    {
      q: 'Apakah tersedia tutor dengan sertifikasi Cambridge CELTA?',
      a: 'Ya, Lingua Pro Academy memiliki instruktur yang berkualifikasi Cambridge CELTA guna menjamin standar pedagogi pengajaran Bahasa Inggris internasional yang teruji dan bermutu.',
      category: 'method',
    },
    {
      q: 'Apakah saya bisa belajar bersama native English speakers?',
      a: 'Ya, peserta memiliki kesempatan mengikuti sesi belajar bersama native English speakers untuk melatih kepekaan aksen, intonasi percakapan natural, dan penguasaan idiom sehari-hari.',
      category: 'method',
    },
    {
      q: 'Berapa lama durasi setiap program?',
      a: 'Estimasi durasi: IELTS Intensive Prep sekitar 8–12 minggu; Workplace Business English sekitar 4–6 minggu per level; Speaking Private Coaching berdurasi 60 menit per sesi dengan jumlah pertemuan disesuaikan kebutuhan peserta.',
      category: 'programs',
    },
    {
      q: 'Apakah tersedia sertifikat setelah menyelesaikan program?',
      a: 'Ya, peserta yang telah menyelesaikan seluruh rangkaian program dan memenuhi kriteria evaluasi akan menerima sertifikat resmi (Certificate of Completion) dari Lingua Pro Academy.',
      category: 'general',
    },
    {
      q: 'Apakah tersedia program pelatihan untuk perusahaan (Corporate Training)?',
      a: 'Ya, kami melayani Corporate Training yang dapat dikustomisasi sesuai bidang industri dan kebutuhan komunikasi spesifik perusahaan.',
      category: 'general',
    },
    {
      q: 'Bagaimana cara mendapatkan informasi jadwal dan pendaftaran?',
      a: 'Anda dapat langsung menghubungi nomor WhatsApp resmi admissions kami di +62 812-9000-2841 untuk mendapatkan informasi jadwal kelas, biaya program, serta panduan Free Diagnostic Test.',
      category: 'general',
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-[#E3E1DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
            Pertanyaan Umum
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Hal yang sering ditanyakan mengenai program dan pendaftaran.
          </h2>
          <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed">
            Informasi lengkap seputar metode pembelajaran, kualifikasi pengajar, serta jadwal kelas Lingua Pro Academy.
          </p>

          {/* Search Box */}
          <div className="relative mt-6 max-w-md">
            <Search className="w-4 h-4 text-[#737C87] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata kunci (IELTS, biaya, jadwal)..."
              className="w-full bg-[#FFFFFF] border border-[#E3E1DA] rounded-xs pl-10 pr-4 py-2 text-xs sm:text-sm text-[#121E2C] placeholder-[#737C87] focus:outline-hidden focus:border-[#121E2C] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
            {[
              { id: 'all', label: 'Semua' },
              { id: 'general', label: 'Umum' },
              { id: 'programs', label: 'Program' },
              { id: 'pricing', label: 'Biaya' },
              { id: 'method', label: 'Metode & Pengajar' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-xs transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-[#121E2C] text-[#FBFBFA]'
                    : 'bg-[#FFFFFF] text-[#4A525D] border border-[#E3E1DA] hover:text-[#121E2C]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#E3E1DA]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="border-b border-[#E3E1DA]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-5 flex items-center justify-between gap-4 hover:text-[#9C7A3C] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-[#121E2C] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#737C87] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#121E2C]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-5 pt-1 text-xs sm:text-sm text-[#4A525D] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <div className="py-8 text-center text-xs text-[#737C87]">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
