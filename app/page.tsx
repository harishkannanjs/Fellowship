'use client'

import { useState, useEffect, useRef } from 'react'
import { NavBar } from '@/components/nav-bar'
import { Info, Users, Sparkles, HelpCircle, ShieldCheck, FileText, Home } from 'lucide-react'
import HeroSection from '@/components/hero-section'
import CoreContent from '@/components/core-content'
import WhySection from '@/components/why-section'
import AccountabilitySection from '@/components/accountability'
import FAQSection from '@/components/faq-section'
import ApplySection from '@/components/apply-section'
import Footer from '@/components/footer'

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero')
  const isManualScrolling = useRef(false)

  const navItems = [
    { name: 'HOME', url: '#hero', icon: Home },
    { name: 'WHAT', url: '#what', icon: Info },
    { name: 'WHO', url: '#who', icon: Users },
    { name: 'BENEFITS', url: '#benefits', icon: Sparkles },
    { name: 'WHY', url: '#why', icon: HelpCircle },
    { name: 'ACCOUNTABILITY', url: '#accountability', icon: ShieldCheck },
    { name: 'APPLY', url: '#apply', icon: FileText },
  ]

  useEffect(() => {
    const sectionIds = ['hero', 'what', 'who', 'benefits', 'why', 'accountability', 'faq', 'apply']
    // Activate a section when its top reaches the navbar (≈80px from top of screen)
    const triggerOffset = 80
    let rafId: number

    const updateActiveSection = () => {
      if (isManualScrolling.current) return

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (isAtBottom) {
        setActiveSection('apply')
        return
      }

      // Find the section whose top is closest to triggerOffset without going past it
      let bestId = sectionIds[0]
      let bestDist = Infinity

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        // Distance from trigger line (positive = section is below trigger, negative = above)
        const dist = top - triggerOffset
        // We want the section that has just scrolled past the trigger line (dist <= 0)
        // and whose top is closest to the trigger line from above
        if (dist <= 0 && Math.abs(dist) < bestDist) {
          bestDist = Math.abs(dist)
          bestId = id
        }
      }

      setActiveSection(bestId)
    }

    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateActiveSection)
    }

    // Run once on mount to set correct initial state
    updateActiveSection()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const handleManualScroll = (sectionId: string) => {
    isManualScrolling.current = true
    setActiveSection(sectionId)

    // Lock observer for 800ms during smooth scroll animation,
    // but release immediately if the user manually scrolls
    const timeout = setTimeout(() => {
      isManualScrolling.current = false
    }, 800)

    // If the user physically scrolls (wheel or touch), release the lock immediately
    const releaseOnUserScroll = () => {
      isManualScrolling.current = false
      clearTimeout(timeout)
      window.removeEventListener('wheel', releaseOnUserScroll)
      window.removeEventListener('touchstart', releaseOnUserScroll)
    }
    window.addEventListener('wheel', releaseOnUserScroll, { once: true, passive: true })
    window.addEventListener('touchstart', releaseOnUserScroll, { once: true, passive: true })
  }

  return (
    <div className="min-h-screen bg-background text-gray-900">
      <NavBar items={navItems} className="top-0" activeId={activeSection} onItemClick={handleManualScroll} />
      <div className="">
        <HeroSection setActiveSection={handleManualScroll} />
        <CoreContent />
        <WhySection />
        <AccountabilitySection />

        {/* Section Breaker Symbol */}
        <div className="flex justify-center py-16">
          <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
            {/* Top row */}
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            <rect x="12" y="0" width="4" height="4" fill="currentColor" />
            {/* Bottom row */}
            <rect x="0" y="12" width="4" height="4" fill="currentColor" />
            <rect x="24" y="12" width="4" height="4" fill="currentColor" />
          </svg>
        </div>

        <FAQSection setActiveSection={handleManualScroll} />
        {/* Section Breaker Symbol */}
        <div className="flex justify-center py-16">
          <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
            {/* Top row */}
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            <rect x="12" y="0" width="4" height="4" fill="currentColor" />
            {/* Bottom row */}
            <rect x="0" y="12" width="4" height="4" fill="currentColor" />
            <rect x="24" y="12" width="4" height="4" fill="currentColor" />
          </svg>
        </div>
        <ApplySection />
        <Footer />
      </div>
    </div>
  )
}
