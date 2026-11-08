import React from 'react'
import { ArrowUp } from 'lucide-react'
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#FFFFFF] text-[#121E2C] pt-16 pb-12 border-t border-[#E3E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E3E1DA]">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-xs bg-[#121E2C] text-white font-serif font-bold text-xs flex items-center justify-center tracking-tighter">
                NB
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-[#121E2C]">
                Nama Brand
              </span>
            </div>

            <p className="font-serif text-sm text-[#4A525D] italic mb-3">
              &ldquo;English is not just a language. It&rsquo;s your next opportunity.&rdquo;
            </p>

            <p className="text-xs text-[#737C87] leading-relaxed max-w-sm mb-4">
              Lembaga pelatihan Bahasa Inggris profesional di BSD City dan kelas daring nasional, dengan bimbingan pengajar berkualifikasi Cambridge CELTA.
            </p>

            <div className="text-xs text-[#4A525D] font-mono">
              Instagram: {siteConfig.contact.socials.instagram.handle}
            </div>
          </div>

          {/* Navigation Links (Cols 6-7) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#121E2C] mb-3">
              Navigasi
            </div>
            <ul className="space-y-1 text-xs text-[#4A525D]">
              <li><a href="#hero" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Home</a></li>
              <li><a href="#programs" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Program Kursus</a></li>
              <li><a href="#approach" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Metode Belajar</a></li>
              <li><a href="#why-us" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Keunggulan</a></li>
              <li><a href="#hybrid" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Sistem Hybrid</a></li>
              <li><a href="#faq" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Tanya Jawab</a></li>
            </ul>
          </div>

          {/* Program Links (Cols 8-9) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#121E2C] mb-3">
              Program Kursus
            </div>
            <ul className="space-y-1 text-xs text-[#4A525D]">
              <li><a href="#programs" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">IELTS Intensive Prep</a></li>
              <li><a href="#programs" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">Workplace Business English</a></li>
              <li><a href="#programs" className="hover:text-[#121E2C] py-1.5 inline-block min-h-[36px] sm:min-h-0">1-on-1 Speaking Coaching</a></li>
              <li><a href="#diagnostic-test" className="text-[#9C7A3C] hover:underline font-medium py-1.5 inline-block min-h-[36px] sm:min-h-0">Free Diagnostic Test</a></li>
            </ul>
          </div>

          {/* Contact & Hours (Cols 10-12) */}
          <div className="lg:col-span-3 text-xs text-[#4A525D]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#121E2C] mb-3">
              Kampus & Kontak
            </div>
            <p className="leading-relaxed mb-2">
              {siteConfig.contact.address}
            </p>
            <p className="mb-1">
              WhatsApp: <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#121E2C] hover:underline">{siteConfig.contact.phone}</a>
            </p>
            <p className="mb-3">
              Email: {siteConfig.contact.email}
            </p>

            <div className="pt-2 border-t border-[#E3E1DA] text-[11px] text-[#737C87]">
              <div>Jam Layanan Administrasi:</div>
              <div>{siteConfig.contact.hours.weekday}</div>
              <div>{siteConfig.contact.hours.saturday}</div>
            </div>
          </div>

        </div>

        {/* Showcase Disclaimer */}
        <div className="py-4 border-b border-[#E3E1DA] text-[11px] text-[#737C87] leading-relaxed">
          <strong>Catatan Showcase:</strong> Identitas kontak, nomor telepon, alamat email, dan data testimoni pada landing page ini merupakan data simulasi untuk keperluan demonstrasi perancangan website profesional.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737C87]">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brand.fullName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#121E2C] hover:text-[#9C7A3C] transition-colors py-2.5 px-3 min-h-[44px] rounded-xs"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
