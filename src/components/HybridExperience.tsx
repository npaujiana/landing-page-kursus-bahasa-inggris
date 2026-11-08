import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig'

export const HybridExperience: React.FC = () => {
  return (
    <section id="hybrid" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E3E1DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
            Lingkungan Pembelajaran Hybrid
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Pilihan kelas tatap muka atau kelas daring interaktif.
          </h2>
          <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed">
            Fleksibilitas penuh untuk menyesuaikan ritme belajarmu tanpa mengurangi mutu pengajaran dan interaktivitas antar pengajar dan siswa.
          </p>
        </motion.div>

        {/* Dual Mode Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Online Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="border border-[#E3E1DA] p-6 sm:p-8 bg-[#FBFBFA] rounded-xs flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div>
              <div className="text-xs font-mono text-[#9C7A3C] mb-1">Daring Nasional</div>
              <h3 className="font-serif text-2xl text-[#121E2C] font-normal mb-3">
                Online Interactive Classes
              </h3>
              <p className="text-xs sm:text-sm text-[#4A525D] leading-relaxed mb-6">
                Kelas langsung tatap muka secara virtual (live meeting), bukan modul rekaman pasif. Peserta aktif berdiskusi, latihan presentasi, dan menerima evaluasi langsung.
              </p>

              <div className="space-y-2.5 text-xs text-[#121E2C] border-t border-[#E3E1DA] pt-4">
                <div>• Sesi video interaktif langsung dua arah</div>
                <div>• Akses materi digital dan bank latihan mandiri</div>
                <div>• Pengumpulan tugas esai dan rekaman speaking terstruktur</div>
                <div>• Fleksibel diikuti dari seluruh wilayah Indonesia</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E3E1DA] text-[11px] text-[#737C87]">
              Kebutuhan perangkat: Komputer/Laptop dan koneksi internet stabil
            </div>
          </motion.div>

          {/* Offline Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="border border-[#E3E1DA] p-6 sm:p-8 bg-[#FBFBFA] rounded-xs flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div>
              <div className="text-xs font-mono text-[#9C7A3C] mb-1">Tatap Muka</div>
              <h3 className="font-serif text-2xl text-[#121E2C] font-normal mb-3">
                BSD City Campus
              </h3>
              <p className="text-xs sm:text-sm text-[#4A525D] leading-relaxed mb-6">
                Ruang belajar representatif di BSD City untuk interaksi langsung, latihan percakapan bebas hambatan teknis, serta simulasi situasi profesional tatap muka.
              </p>

              <div className="space-y-2.5 text-xs text-[#121E2C] border-t border-[#E3E1DA] pt-4">
                <div>• Interaksi tatap muka langsung bersama pengajar</div>
                <div>• Ruang simulasi rapat kerja dan presentasi formal</div>
                <div>• Diskusi kelompok kecil dengan lingkungan kondusif</div>
                <div>• Konsultasi personal tatap muka sebelum sesi kelas</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E3E1DA] text-[11px] text-[#737C87]">
              Alamat: Ruko Emerald Avenue, BSD City, Tangerang Selatan
            </div>
          </motion.div>

        </div>

        {/* Location Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="border border-[#E3E1DA] bg-[#F4F3EF] p-6 sm:p-8 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div className="text-xs font-bold text-[#121E2C] uppercase tracking-wider mb-1">
              Alamat Kampus & Layanan Administrasi
            </div>
            <p className="text-xs sm:text-sm text-[#4A525D]">
              {siteConfig.contact.address}
            </p>
            <p className="text-xs text-[#737C87] mt-1">
              Senin–Jumat: 08.00–20.00 WIB • Sabtu: 09.00–17.00 WIB
            </p>
          </div>

          <motion.a
            href={buildWhatsAppLink('Halo Lingua Pro, saya ingin informasi konsultasi tatap muka di kampus BSD City.')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0 bg-[#121E2C] hover:bg-[#202E3F] text-[#FBFBFA] text-xs font-semibold px-5 py-2.5 rounded-xs transition-colors"
          >
            Jadwalkan Kunjungan Kampus
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
