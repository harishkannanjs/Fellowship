'use client'

import { useState, useEffect, useRef } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import CoreContent from '@/components/core-content'
import AccountabilitySection from '@/components/accountability'
import FAQSection from '@/components/faq-section'
import ApplySection from '@/components/apply-section'
import Footer from '@/components/footer'

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero')
  const isManualScrolling = useRef(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-1% 0px -98% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ['hero', 'what', 'mentorship', 'who', 'how', 'accountability', 'faq', 'apply']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleManualScroll = (sectionId: string) => {
    isManualScrolling.current = true
    setActiveSection(sectionId)

    // Lock observer for 1 second during smooth scroll
    setTimeout(() => {
      isManualScrolling.current = false
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-gray-900">
      <Navigation activeSection={activeSection} setActiveSection={handleManualScroll} />
      <div className="">
        <HeroSection setActiveSection={handleManualScroll} />
        <CoreContent />
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
