import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { Programs } from './components/Programs'
import { LearningApproach } from './components/LearningApproach'
import { WhyChooseUs } from './components/WhyChooseUs'
import { DiagnosticTestSection } from './components/DiagnosticTestSection'
import { Testimonials } from './components/Testimonials'
import { LearningProcess } from './components/LearningProcess'
import { HybridExperience } from './components/HybridExperience'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export function App() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#121E2C] font-sans flex flex-col selection:bg-[#9C7A3C]/20 selection:text-[#121E2C]">
      {/* 01. Floating Pill Navbar (Karviz Inspired) */}
      <Header />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <Hero />

        {/* 03. Trust & Credibility Strip */}
        <TrustStrip />

        {/* 04. Programs & Courses (Direct WhatsApp Inquiries) */}
        <Programs />

        {/* 05. Learning Approach & Philosophy */}
        <LearningApproach />

        {/* 06. Why Choose Lingua Pro */}
        <WhyChooseUs />

        {/* 07. Free Diagnostic Test Showcase */}
        <DiagnosticTestSection />

        {/* 08. Student Experiences & Testimonials */}
        <Testimonials />

        {/* 09. Learning Process (5 Stages) */}
        <LearningProcess />

        {/* 10. Hybrid Experience & Learning Environment */}
        <HybridExperience />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Final Closing CTA */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating WhatsApp Capsule Button (Karviz Inspired) */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
