import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { business, socialLinks } from '../../data/data.js'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-base md:text-lg transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-secondary'}`

  return (
    <header className="sticky top-0 z-50 border-b border-accent/20 bg-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <NavLink to="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <Logo className="h-9 w-9 md:h-10 md:w-10" />
        </NavLink>

   

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Gardenside Kitchen on Instagram"
              className="text-secondary transition-colors hover:text-accent"
            >
              <FiInstagram size={20} />
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-secondary md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col items-center gap-6 border-t border-accent/20 bg-primary px-6 py-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
