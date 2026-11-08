import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { buildWhatsAppLink } from '../config/siteConfig'

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#121E2C] text-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-3">
            Langkah Awal Belajar
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.12] mb-5 sm:mb-6 font-normal">
            Kesiapan Bahasa Inggris dimulai dari evaluasi kemampuan yang tepat.
          </h2>

          <p className="text-sm sm:text-base text-[#CAC6BA] leading-relaxed mb-8 max-w-2xl font-normal">
            Mulai dari memahami level kemampuanmu hari ini hingga menyusun rencana belajar yang realistis untuk target beasiswa, promosi karier, atau komunikasi global. Konsultasikan langsung dengan admissions kami.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <motion.a
              href={buildWhatsAppLink('Halo Admissions Nama Brand, saya ingin mengikuti Free Diagnostic Test dan konsultasi program.')}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-6 sm:px-7 py-3.5 rounded-xs shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-colors text-sm min-h-[48px] text-center"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.507 14.307l-.009.075c-.234-.117-1.385-.684-1.6-.762-.214-.078-.37-.117-.525.117-.156.234-.604.762-.741.918-.136.156-.273.175-.507.058-.234-.117-.988-.364-1.882-1.161-.696-.62-1.165-1.387-1.302-1.621-.137-.234-.015-.36.103-.477.106-.105.234-.273.351-.41.117-.137.156-.234.234-.39.078-.156.039-.293-.02-.41-.058-.117-.526-1.268-.72-1.737-.189-.457-.38-.395-.525-.403l-.448-.008c-.156 0-.41.058-.624.293-.214.234-.819.8-.819 1.951 0 1.151.838 2.264.955 2.42.117.156 1.649 2.518 3.996 3.531.558.241.994.385 1.334.493.561.178 1.072.153 1.475.093.45-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.136-1.113-.058-.098-.214-.156-.448-.273zm-5.467 7.693c-2.016 0-3.906-.576-5.518-1.57l-.396-.245-4.103 1.076 1.095-4-.258-.411a9.92 9.92 0 0 1-1.528-5.326c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm0-21.8c-6.507 0-11.8 5.293-11.8 11.8 0 2.083.543 4.118 1.573 5.908l-1.671 6.104 6.248-1.639a11.758 11.758 0 0 0 5.65 1.427h.005c6.506 0 11.8-5.293 11.8-11.8 0-6.507-5.294-11.8-11.8-11.8z" />
              </svg>
              <span>Ikuti Tes Diagnostik via WhatsApp</span>
            </motion.a>

            <motion.a
              href={buildWhatsAppLink('Halo Admissions Nama Brand, saya ingin berkonsultasi mengenai rekomendasi program dan jadwal kelas.')}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium text-white hover:text-[#9C7A3C] px-5 py-3.5 border border-[#202E3F] hover:border-[#CAC6BA] rounded-xs transition-colors text-center min-h-[48px]"
            >
              <span>Tanya Jadwal & Biaya via WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </motion.a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#202E3F] text-xs text-[#CAC6BA] flex flex-wrap gap-4 sm:gap-6">
            <span>• Tanpa biaya pendaftaran tes awal</span>
            <span>• Pilihan kelas tatap muka BSD City & daring</span>
            <span>• Rencana belajar disesuaikan target individu</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
