import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig'

export const Programs: React.FC = () => {
  const ielts = siteConfig.programs.find((p) => p.id === 'ielts-prep')!
  const business = siteConfig.programs.find((p) => p.id === 'business-english')!
  const speaking = siteConfig.programs.find((p) => p.id === 'speaking-coaching')!

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-28 bg-[#FBFBFA] border-b border-[#E3E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-14"
        >
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
            Pilihan Program Pembelajaran
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Kurikulum terarah untuk kebutuhan akademik dan profesional.
          </h2>
          <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed">
            Pilih program yang sesuai dengan targetmu. Setiap pendaftaran dan konsultasi jadwal diproses langsung oleh tim admissions kami via WhatsApp.
          </p>
        </motion.div>

        {/* PROGRAM 1: FEATURED CARD (IELTS PREP) with Motion whileInView & whileHover */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="border border-[#121E2C] bg-[#FFFFFF] rounded-xs p-5 sm:p-8 md:p-10 mb-8 shadow-xs hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Information & Pricing */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-block text-[11px] font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
                  Persiapan Ujian Internasional
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#121E2C] font-normal mb-2">
                  {ielts.name}
                </h3>
                <p className="text-xs text-[#737C87] mb-4">
                  Target Beasiswa & Studi Luar Negeri • 8–12 Minggu
                </p>
                <p className="text-sm text-[#4A525D] leading-relaxed mb-6">
                  {ielts.description}
                </p>

                <div className="p-4 bg-[#F4F3EF] border border-[#E3E1DA] rounded-xs mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#4A525D] font-medium block">
                    Biaya Investasi Program
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121E2C] tabular-nums">
                      {ielts.price}
                    </span>
                    <span className="text-xs text-[#4A525D]">
                      {ielts.pricePeriod}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#737C87] mt-1 block">
                    Termasuk materi lengkap, bank soal, dan simulasi mock test
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <motion.a
                  href={buildWhatsAppLink('Halo Admin, saya tertarik mendaftar program IELTS Intensive Prep. Mohon info jadwal kelas terdekat.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#121E2C] hover:bg-[#202E3F] text-[#FBFBFA] text-xs font-semibold px-5 py-3.5 rounded-xs transition-colors text-center inline-flex items-center justify-center gap-2 group hover:shadow-md min-h-[44px]"
                >
                  <span>Daftar IELTS via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9C7A3C] transition-transform group-hover:translate-x-1 shrink-0" />
                </motion.a>

                <motion.a
                  href={buildWhatsAppLink('Halo Admin, saya ingin konsultasi strategi skor IELTS dan diagnostic test terlebih dahulu.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-xs font-medium text-[#121E2C] hover:text-[#9C7A3C] px-4 py-3.5 border border-[#E3E1DA] hover:border-[#CAC6BA] rounded-xs text-center transition-colors min-h-[44px] inline-flex items-center justify-center"
                >
                  Tanya Jadwal & Kurikulum
                </motion.a>
              </div>
            </div>

            {/* Right Column: Curriculum & Benefits */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#E3E1DA] lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-bold text-[#121E2C] uppercase tracking-wider mb-3">
                    Modul yang Dipelajari:
                  </div>
                  <ul className="space-y-2 text-xs text-[#4A525D]">
                    {ielts.learningMaterials.map((mat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#9C7A3C] mt-2 shrink-0" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-bold text-[#121E2C] uppercase tracking-wider mb-3">
                    Fasilitas Bimbingan:
                  </div>
                  <ul className="space-y-2 text-xs text-[#4A525D]">
                    {ielts.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#9C7A3C] shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {ielts.guaranteeNote && (
                <div className="mt-6 pt-4 border-t border-[#E3E1DA] text-[11px] text-[#737C87] leading-relaxed">
                  {ielts.guaranteeNote}
                </div>
              )}
            </div>

          </div>
        </motion.div>

        {/* BOTTOM ROW: TWO COMPLEMENTARY PROGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Program 2: Workplace Business English */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="border border-[#E3E1DA] bg-[#FFFFFF] rounded-xs p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <div className="text-[11px] font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
                Komunikasi Korporasi & Karier
              </div>
              <h3 className="font-serif text-2xl text-[#121E2C] font-normal mb-1">
                {business.name}
              </h3>
              <p className="text-xs text-[#737C87] mb-4">
                Meeting, Presentasi, & Negosiasi • 4–6 Minggu / level
              </p>

              <div className="p-3 bg-[#F4F3EF] border border-[#E3E1DA] rounded-xs mb-5">
                <span className="text-[10px] uppercase tracking-wider text-[#4A525D] font-medium block">
                  Biaya Program
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-serif text-2xl font-bold text-[#121E2C] tabular-nums">
                    {business.price}
                  </span>
                  <span className="text-xs text-[#4A525D]">
                    {business.pricePeriod}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A525D] leading-relaxed mb-5">
                {business.description}
              </p>

              <div className="text-xs font-bold text-[#121E2C] mb-2">Fokus Materi:</div>
              <ul className="space-y-1.5 text-xs text-[#4A525D] mb-6">
                {business.learningMaterials.slice(0, 5).map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9C7A3C] mt-2 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E3E1DA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-[#737C87]">Kelas Tatap Muka & Online</span>
              <motion.a
                href={buildWhatsAppLink('Halo Admin, saya tertarik mendaftar program Workplace Business English.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#121E2C] hover:bg-[#202E3F] text-[#FBFBFA] text-xs font-semibold px-4 py-3 rounded-xs transition-colors inline-flex items-center justify-center gap-1.5 group min-h-[44px]"
              >
                <span>Daftar via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9C7A3C] transition-transform group-hover:translate-x-1 shrink-0" />
              </motion.a>
            </div>
          </motion.div>

          {/* Program 3: 1-on-1 Speaking Private Coaching */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="border border-[#E3E1DA] bg-[#FFFFFF] rounded-xs p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <div className="text-[11px] font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
                Bimbingan Privat 1-on-1
              </div>
              <h3 className="font-serif text-2xl text-[#121E2C] font-normal mb-1">
                {speaking.name}
              </h3>
              <p className="text-xs text-[#737C87] mb-4">
                Kelancaran Berbicara & Pelafalan • 60 Menit / sesi
              </p>

              <div className="p-3 bg-[#F4F3EF] border border-[#E3E1DA] rounded-xs mb-5">
                <span className="text-[10px] uppercase tracking-wider text-[#4A525D] font-medium block">
                  Biaya Per Sesi
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-serif text-2xl font-bold text-[#121E2C] tabular-nums">
                    {speaking.price}
                  </span>
                  <span className="text-xs text-[#4A525D]">
                    {speaking.pricePeriod}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A525D] leading-relaxed mb-5">
                {speaking.description}
              </p>

              <div className="text-xs font-bold text-[#121E2C] mb-2">Fokus Pembelajaran:</div>
              <ul className="space-y-1.5 text-xs text-[#4A525D] mb-6">
                {speaking.learningMaterials.slice(0, 5).map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9C7A3C] mt-2 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E3E1DA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-[#737C87]">Jadwal Fleksibel (1 Tutor 1 Siswa)</span>
              <motion.a
                href={buildWhatsAppLink('Halo Admin, saya ingin memesan sesi 1-on-1 Speaking Private Coaching.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#121E2C] hover:bg-[#202E3F] text-[#FBFBFA] text-xs font-semibold px-4 py-3 rounded-xs transition-colors inline-flex items-center justify-center gap-1.5 group min-h-[44px]"
              >
                <span>Pesan Sesi via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9C7A3C] transition-transform group-hover:translate-x-1 shrink-0" />
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
