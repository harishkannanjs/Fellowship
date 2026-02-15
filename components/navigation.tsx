'use client'

interface NavigationProps {
  activeSection?: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { label: 'WHAT', href: '#what' },
    { label: 'WHO', href: '#who' },
    { label: 'BENEFITS', href: '#benefits' },
    { label: 'WHY', href: '#why' },
    { label: 'ACCOUNTABILITY', href: '#accountability' },
    { label: 'APPLY', href: '#apply' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('hero')
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(href.slice(1))
    }
  }

  return (
    <nav className="absolute md:fixed top-7 left-0 right-0 mx-auto max-w-4xl px-6 md:left-auto md:right-10 md:top-6 md:max-w-none md:px-0 z-40 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-1">
      <a
        href="/"
        onClick={(e) => handleNavClick(e, '/')}
        className={`text-base md:text-sm font-medium tracking-tight transition-all md:mb-4 inline-block border-gray-900 ${activeSection === 'hero' ? 'text-gray-900 border-b-2' : 'text-gray-900 hover:text-gray-600'
          }`}
      >
        Fellowship
      </a>
      <div className="md:space-y-4 text-right flex flex-row md:flex-col items-end">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1)
          const isApply = item.label === 'APPLY'
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`${isApply ? 'block' : 'hidden md:block'} text-xs uppercase tracking-wider transition-all font-medium py-1 ${isActive
                ? 'text-gray-900 border-b-2 border-gray-900 inline-block ml-auto'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {item.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
