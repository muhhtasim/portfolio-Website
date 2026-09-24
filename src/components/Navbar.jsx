import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clubs', href: '#clubs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onNavigate, currentPage, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e, href) => {
    if (currentPage !== 'home') {
      e.preventDefault()
      onNavigate('home')
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <button
            className="navbar-brand-badge"
            onClick={() => onNavigate('home')}
            aria-label="Home"
          >
            <div className="brand-logo-icon">
              <span className="brand-icon-letter">L</span>
              <span className="brand-pulse-dot" />
            </div>
            <span className="brand-name-text">
              Labib<span className="brand-dot">.</span>
            </span>
          </button>

          <ul className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              <span className="theme-toggle-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
              <span className="theme-toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <button className="navbar-cta" onClick={() => onNavigate('resume')}>
              Resume ↗
            </button>
            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
