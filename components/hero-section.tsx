'use client'

import CursorAnimation from './cursor-animation'

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const handleApplyClick = () => {
    const element = document.querySelector('#apply')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('apply')
    }
  }

  return (
    <main className="relative bg-background">
      {/* Map Background */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <img
          src="/Hero.png"
          alt="Hero background"
          className="w-full h-auto block"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-1 pt-12">
        <p className="text-[13px] tracking-[0.3em] font-medium text-gray-500 uppercase mb-6">
          MAGNIFICENT GRANTS
        </p>
        <h1 className="text-5xl lg:text-[55px] leading-[1.05] font-garamond-bold text-gray-900 mb-12">
          $10.000+ fellowships to outliers taking down the walls of universities, credentialism, and elitist hierarchies to have impact on the world.
        </h1>

      </div>
    </main >
  )
}
