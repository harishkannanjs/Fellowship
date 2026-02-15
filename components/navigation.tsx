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
    { label: 'Apply', href: '#apply' },
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
    <nav className="fixed right-10 top-12 z-40 flex flex-col items-end gap-1">
      <a
        href="/"
        onClick={(e) => handleNavClick(e, '/')}
        className={`text-sm font-medium tracking-tight transition-all mb-4 inline-block border-gray-900 ${activeSection === 'hero' ? 'text-gray-900 border-b-2' : 'text-gray-900 hover:text-gray-600'
          }`}
      >
        Fellowship
      </a>
      <div className="space-y-4 text-right">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1)
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block text-xs uppercase tracking-wider transition-all font-medium py-1 ${isActive
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
