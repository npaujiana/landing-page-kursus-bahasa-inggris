import React from 'react'
import { motion } from 'framer-motion'

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      title: 'Cambridge CELTA Certified Tutors',
      desc: 'Pengajaran berstandar internasional didampingi instruktur berkualifikasi Cambridge CELTA dengan pengalaman nyata mengajar peserta Indonesia.',
    },
    {
      title: 'Native English Speaker Sessions',
      desc: 'Peluang berinteraksi langsung dengan penutur asli untuk membiasakan telinga terhadap aksen internasional, ekspresi natural, dan idiom modern.',
    },
    {
      title: 'Real-World Simulation Approach',
      desc: 'Latihan difokuskan pada studi kasus praktis: wawancara kerja, rapat lintas negara, presentasi ke dewan direksi, dan strategi menjawab soal IELTS.',
    },
    {
      title: 'Free Online Diagnostic Test',
      desc: 'Tes diagnostik tanpa biaya untuk mengetahui level kemampuan riil sebelum memutuskan untuk bergabung dalam kelas berbayar.',
    },
    {
      title: 'Personalized Study Plan',
      desc: 'Materi dan target waktu disesuaikan dengan kebutuhan individu dan tujuan spesifik, bukan kurikulum massal yang kaku.',
    },
    {
      title: 'Measurable Performance Tracking',
      desc: 'Evaluasi berkala menggunakan rubrik standar resmi dan feedback personal tertulis untuk setiap tugas Writing dan Speaking.',
    },
  ]

  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-28 bg-[#FBFBFA] border-b border-[#E3E1DA]">
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
            Keunggulan Akademi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Standar pengajaran tinggi untuk hasil yang dapat dipertanggungjawabkan.
          </h2>
          <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed">
            Fokus kami adalah membantu setiap peserta mencapai target akademik dan profesional mereka secara terukur dan realistis.
          </p>
        </motion.div>

        {/* 6 Differentiators in Structured Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-14">
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-[#FFFFFF] border border-[#E3E1DA] rounded-xs p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-xs font-mono text-[#9C7A3C] block mb-2 tabular-nums">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#121E2C] mb-2 leading-snug">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A525D] leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Director Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="border border-[#121E2C] bg-[#121E2C] text-[#FBFBFA] p-6 sm:p-10 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
        >
          <div className="max-w-2xl">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#FBFBFA] font-normal leading-relaxed mb-3">
              &ldquo;Kemampuan Bahasa Inggris bukan sekadar penguasaan tata bahasa di atas kertas, melainkan jembatan yang menghubungkan Anda dengan peluang global selanjutnya.&rdquo;
            </p>
            <div className="text-xs text-[#CAC6BA]">
              Adrian Pratama — Founder & Academic Director, Nama Brand
            </div>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs font-mono text-[#9C7A3C] uppercase tracking-wider block">
              BSD City Campus
            </span>
            <span className="text-xs text-[#CAC6BA] mt-1 block">
              Tangerang Selatan, Banten
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
