import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { buildWhatsAppLink } from '../config/siteConfig'

const easeCurve = [0.16, 1, 0.3, 1] as const

export const Hero: React.FC = () => {
  const handleScrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.getElementById('programs')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#9C7A3C]/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-ambient-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subhead, Direct WhatsApp CTA with Staggered Entrance */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* The Direct Editorial Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-[4rem] text-[#121E2C] leading-[1.08] tracking-tight mb-6 font-normal"
            >
              Bicara dengan percaya diri. Buka kesempatan akademik dan karier global.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.2 }}
              className="text-base sm:text-lg text-[#4A525D] leading-relaxed max-w-xl mb-8 font-normal"
            >
              Pelatihan intensif persiapan ujian IELTS, komunikasi bisnis kantor, dan pendampingan privat bersama instruktur berkualifikasi Cambridge CELTA di BSD City dan kelas online.
            </motion.p>

            {/* Actions Group */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <motion.a
                href={buildWhatsAppLink('Halo Lingua Pro Academy, saya ingin berkonsultasi mengenai program kursus dan mengambil Free Diagnostic Test.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-[#121E2C] hover:bg-[#202E3F] text-[#FBFBFA] font-medium px-7 py-3.5 rounded-xs shadow-xs hover:shadow-md transition-colors text-sm group"
              >
                <span>Konsultasi & Tes Gratis via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#9C7A3C] transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#programs"
                onClick={handleScrollToPrograms}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center text-sm font-medium text-[#121E2C] hover:text-[#9C7A3C] px-5 py-3.5 border border-[#E3E1DA] hover:border-[#CAC6BA] rounded-xs bg-[#FFFFFF] hover:bg-[#F4F3EF]/60 transition-colors"
              >
                Lihat Katalog Program
              </motion.a>
            </motion.div>

            {/* Supporting Facts Strip */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.4 }}
              className="w-full pt-8 border-t border-[#E3E1DA]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs"
            >
              <div className="group">
                <div className="font-semibold text-[#121E2C] group-hover:text-[#9C7A3C] transition-colors">
                  Asesmen Awal Gratis
                </div>
                <div className="text-[#737C87] mt-0.5 leading-relaxed">
                  Pemetaan level kemampuan objektif tanpa biaya
                </div>
              </div>

              <div className="group">
                <div className="font-semibold text-[#121E2C] group-hover:text-[#9C7A3C] transition-colors">
                  Kualifikasi Cambridge CELTA
                </div>
                <div className="text-[#737C87] mt-0.5 leading-relaxed">
                  Tersedia instruktur berstandar internasional
                </div>
              </div>

              <div className="group">
                <div className="font-semibold text-[#121E2C] group-hover:text-[#9C7A3C] transition-colors">
                  Sistem Belajar Hybrid
                </div>
                <div className="text-[#737C87] mt-0.5 leading-relaxed">
                  Kampus BSD City & kelas daring interaktif
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Mockup with Ambient Glow Pulse & Smooth Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Breathing Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#9C7A3C]/20 via-[#121E2C]/10 to-[#9C7A3C]/15 rounded-3xl blur-3xl -z-10 animate-ambient-glow pointer-events-none" />

            <div className="border border-[#E3E1DA] p-2 bg-[#FFFFFF] rounded-xs shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden bg-[#F4F3EF] rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                  alt="Sesi diskusi dan presentasi profesional di Lingua Pro Academy"
                  className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-102"
                  loading="eager"
                />
              </div>

              <div className="p-3 pt-3.5 flex items-center justify-between text-[11px] text-[#4A525D] border-t border-[#E3E1DA]/80 mt-2">
                <span>Lingua Pro Academy • Ruko Emerald Avenue, BSD City</span>
                <span className="font-mono text-[#121E2C] font-semibold">Est. 2021</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
