import React from 'react'
import { motion } from 'framer-motion'

export const LearningProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Initial Inquiry',
      desc: 'Hubungi tim admissions untuk menyampaikan latar belakang dan target belajar yang ingin dicapai.',
    },
    {
      step: '02',
      title: 'Diagnostic Test',
      desc: 'Ikuti tes diagnostik awal online gratis untuk pemetaan level kompetensi secara objektif.',
    },
    {
      step: '03',
      title: 'Rekomendasi Program',
      desc: 'Dapatkan rencana belajar dan durasi program yang paling relevan dengan jadwal dan targetmu.',
    },
    {
      step: '04',
      title: 'Pendaftaran & Jadwal',
      desc: 'Konfirmasi pemilihan kelas (online / tatap muka BSD City) dan selesaikan administrasi.',
    },
    {
      step: '05',
      title: 'Mulai Pembelajaran',
      desc: 'Mulai sesi pembelajaran terarah bersama tutor dan akses materi kurikulum berstandar Cambridge.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] border-b border-[#E3E1DA]">
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
            Alur Pendaftaran
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Lima tahapan terstruktur menuju target kemampuanmu.
          </h2>
          <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed">
            Setiap proses dirancang sederhana agar peserta mendapatkan bimbingan yang tepat sejak hari pertama.
          </p>
        </motion.div>

        {/* Steps Grid: Clean Editorial Index Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-[#121E2C] pt-4 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm text-[#9C7A3C] font-semibold block mb-2 tabular-nums">
                  Step {item.step}
                </span>
                <h3 className="font-serif text-base font-bold text-[#121E2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A525D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
