import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  const navLinks = [
    { id: 'hero', label: 'Beranda', href: '#hero' },
    { id: 'programs', label: 'Program', href: '#programs' },
    { id: 'approach', label: 'Metode', href: '#approach' },
    { id: 'why-us', label: 'Tentang Kami', href: '#why-us' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ]

  useEffect(() => {
    const sectionIds = ['hero', 'programs', 'approach', 'why-us', 'diagnostic-test', 'testimonials', 'hybrid', 'faq']

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('faq')
        return
      }

      const scrollPos = window.scrollY + 140
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            current = id
            break
          }
        }
      }

      if (current) {
        if (current === 'diagnostic-test' || current === 'programs') {
          setActiveSection('programs')
        } else if (current === 'testimonials' || current === 'hybrid' || current === 'why-us') {
          setActiveSection('why-us')
        } else {
          setActiveSection(current)
        }
      } else if (window.scrollY < 200) {
        setActiveSection('hero')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setActiveSection(id)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 sm:py-4 bg-[#FBFBFA]/90 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-b border-[#E3E1DA]/50'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Header Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="flex items-center gap-2.5 group focus-visible:outline-hidden py-1 min-h-[44px]"
          aria-label="English Academy Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#121E2C] text-white flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <svg className="w-4 h-4 text-[#9C7A3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#121E2C] leading-none">
              English Academy
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#737C87] mt-0.5 font-medium">
              IELTS & Professional Courses
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Spacious & Clean, No Noisy CTA) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`text-xs transition-colors py-2 relative min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-[#121E2C] font-bold'
                    : 'text-[#4A525D] hover:text-[#121E2C] font-medium'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#121E2C] rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile Hamburger Toggle (44px min tap target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#121E2C] hover:bg-neutral-200/50 rounded-lg transition-colors focus-visible:outline-hidden"
          aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer with Backdrop Blur */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] sm:top-[68px] z-30 bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-[#FBFBFA] border-b border-[#E3E1DA] px-4 py-5 sm:p-6 shadow-xl flex flex-col gap-2 max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-sm py-3 px-4 rounded-lg transition-colors flex items-center justify-between border-l-2 min-h-[44px] ${
                    isActive
                      ? 'font-bold text-[#121E2C] bg-[#F4F3EF] border-[#121E2C]'
                      : 'font-medium text-[#4A525D] hover:text-[#121E2C] hover:bg-neutral-100/60 border-transparent'
                  }`}
                >
                  <span className="text-base">{link.label}</span>
                  {isActive && <span className="text-xs text-[#9C7A3C] font-mono">Aktif</span>}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
