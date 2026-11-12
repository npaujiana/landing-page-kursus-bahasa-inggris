import React from 'react'
import { motion } from 'framer-motion'
import { buildWhatsAppLink } from '../config/siteConfig'

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.a
          href={buildWhatsAppLink('Halo Admin, saya ingin berkonsultasi mengenai program kursus dan jadwal kelas.')}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] transition-shadow duration-200 group min-h-[44px]"
          aria-label="Konsultasi WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0 transition-transform group-hover:scale-110 duration-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.507 14.307l-.009.075c-.234-.117-1.385-.684-1.6-.762-.214-.078-.37-.117-.525.117-.156.234-.604.762-.741.918-.136.156-.273.175-.507.058-.234-.117-.988-.364-1.882-1.161-.696-.62-1.165-1.387-1.302-1.621-.137-.234-.015-.36.103-.477.106-.105.234-.273.351-.41.117-.137.156-.234.234-.39.078-.156.039-.293-.02-.41-.058-.117-.526-1.268-.72-1.737-.189-.457-.38-.395-.525-.403l-.448-.008c-.156 0-.41.058-.624.293-.214.234-.819.8-.819 1.951 0 1.151.838 2.264.955 2.42.117.156 1.649 2.518 3.996 3.531.558.241.994.385 1.334.493.561.178 1.072.153 1.475.093.45-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.136-1.113-.058-.098-.214-.156-.448-.273zm-5.467 7.693c-2.016 0-3.906-.576-5.518-1.57l-.396-.245-4.103 1.076 1.095-4-.258-.411a9.92 9.92 0 0 1-1.528-5.326c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm0-21.8c-6.507 0-11.8 5.293-11.8 11.8 0 2.083.543 4.118 1.573 5.908l-1.671 6.104 6.248-1.639a11.758 11.758 0 0 0 5.65 1.427h.005c6.506 0 11.8-5.293 11.8-11.8 0-6.507-5.294-11.8-11.8-11.8z" />
          </svg>
          <span className="tracking-tight whitespace-nowrap">Konsultasi WhatsApp</span>
        </motion.a>
      </motion.div>
    </div>
  )
}
