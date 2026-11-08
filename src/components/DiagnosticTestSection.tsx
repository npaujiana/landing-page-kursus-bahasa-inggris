import React from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { buildWhatsAppLink } from '../config/siteConfig'

export const DiagnosticTestSection: React.FC = () => {
  const assessmentAreas = [
    {
      title: 'Grammar & Vocabulary Range',
      desc: 'Evaluasi akurasi struktur kalimat dan kekayaan kosakata akademik atau profesional yang Anda kuasai.',
    },
    {
      title: 'Academic Writing Structure',
      desc: 'Analisis logika penulisan, koherensi paragraf, dan penyusunan argumen sesuai standar pengujian internasional.',
    },
    {
      title: 'Speaking Fluency & Pronunciation',
      desc: 'Pengujian kelancaran percakapan, intonasi, kejelasan pelafalan, dan keberanian menyampaikan gagasan.',
    },
    {
      title: 'CEFR & Predicted Band Score',
      desc: 'Pemetaan skor objektif mulai dari level A2 hingga C1 serta prediksi band score IELTS awal.',
    },
  ]

  return (
    <section id="diagnostic-test" className="py-20 md:py-28 bg-[#121E2C] text-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
            Layanan Unggulan Bebas Biaya
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4 font-normal">
            Free Online English Diagnostic Assessment.
          </h2>
          <p className="text-sm sm:text-base text-[#CAC6BA] leading-relaxed">
            Ketahui level kemampuan Bahasa Inggrismu secara objektif sebelum memilih kelas. Tim kurikulum kami memetakan kebutuhan belajarmu secara personal dan terarah langsung via WhatsApp.
          </p>
        </div>

        {/* 4 Assessment Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assessmentAreas.map((area, index) => (
            <div
              key={index}
              className="border border-[#202E3F] bg-[#172535] p-6 rounded-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#9C7A3C] block mb-2">
                  Aspek 0{index + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-[#CAC6BA] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion Showcase Banner (No Form / Direct WhatsApp) */}
        <div className="border border-[#202E3F] bg-[#172535] p-8 sm:p-10 rounded-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Gratis • Tanpa Kewajiban Mendaftar</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
              Klaim jadwal asesmen diagnostik Anda hari ini.
            </h3>
            <p className="text-xs sm:text-sm text-[#CAC6BA] leading-relaxed">
              Hubungi tim admissions kami melalui WhatsApp untuk menerima lembar panduan tes online, memilih jadwal briefing singkat, dan mendapatkan evaluasi hasil tertulis.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={buildWhatsAppLink('Halo Admissions Lingua Pro Academy, saya ingin mengklaim Free Diagnostic Test untuk pemetaan level Bahasa Inggris saya.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-4 rounded-xs shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:scale-105 transition-all text-sm"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.507 14.307l-.009.075c-.234-.117-1.385-.684-1.6-.762-.214-.078-.37-.117-.525.117-.156.234-.604.762-.741.918-.136.156-.273.175-.507.058-.234-.117-.988-.364-1.882-1.161-.696-.62-1.165-1.387-1.302-1.621-.137-.234-.015-.36.103-.477.106-.105.234-.273.351-.41.117-.137.156-.234.234-.39.078-.156.039-.293-.02-.41-.058-.117-.526-1.268-.72-1.737-.189-.457-.38-.395-.525-.403l-.448-.008c-.156 0-.41.058-.624.293-.214.234-.819.8-.819 1.951 0 1.151.838 2.264.955 2.42.117.156 1.649 2.518 3.996 3.531.558.241.994.385 1.334.493.561.178 1.072.153 1.475.093.45-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.136-1.113-.058-.098-.214-.156-.448-.273zm-5.467 7.693c-2.016 0-3.906-.576-5.518-1.57l-.396-.245-4.103 1.076 1.095-4-.258-.411a9.92 9.92 0 0 1-1.528-5.326c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm0-21.8c-6.507 0-11.8 5.293-11.8 11.8 0 2.083.543 4.118 1.573 5.908l-1.671 6.104 6.248-1.639a11.758 11.758 0 0 0 5.65 1.427h.005c6.506 0 11.8-5.293 11.8-11.8 0-6.507-5.294-11.8-11.8-11.8z" />
              </svg>
              <span>Klaim Asesmen via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
