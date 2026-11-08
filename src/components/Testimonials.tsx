import React from 'react'
import { motion } from 'framer-motion'

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Metode belajarnya sangat terstruktur. Saya jadi lebih memahami strategi IELTS Writing dan Speaking dibandingkan sebelumnya.',
      author: 'Sarah',
      role: 'IELTS Preparation Student',
      tag: 'Target Akademik',
    },
    {
      quote:
        'Materinya sangat relevan dengan pekerjaan saya. Sekarang saya lebih percaya diri ketika harus melakukan presentasi dalam Bahasa Inggris.',
      author: 'Daniel',
      role: 'Working Professional',
      tag: 'Komunikasi Bisnis',
    },
    {
      quote:
        'Sesi privatnya membantu saya lebih berani berbicara. Tutor juga memberikan feedback yang detail dan mudah dipahami.',
      author: 'Michelle',
      role: 'Speaking Coaching Student',
      tag: 'Percakapan 1-on-1',
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E3E1DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
            Pengalaman Belajar
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Hasil bimbingan yang membangun kepercayaan diri.
          </h2>
          <p className="text-xs sm:text-sm text-[#737C87] leading-relaxed">
            Catatan: Contoh kutipan di bawah merupakan data demonstrasi showcase (Sample Testimonials — Demonstration Content).
          </p>
        </motion.div>

        {/* Testimonials in Hairline Split Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l border-[#E3E1DA] pl-6 flex flex-col justify-between"
            >
              <div>
                <p className="font-serif text-base sm:text-lg text-[#121E2C] italic leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E1DA]/60">
                <div className="text-sm font-bold text-[#121E2C]">{item.author}</div>
                <div className="text-xs text-[#4A525D]">{item.role}</div>
                <div className="text-[11px] text-[#9C7A3C] font-mono mt-1">{item.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
