import { useState } from 'react'
import { FaBars, FaBell, FaPhoneVolume, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { siteData } from '../../data/site.data'
import BrandMark from '../ui/BrandMark'
import Button from '../ui/Button'

function SiteHeader({ isSticky = false, phoneClassName = '', tone = 'light' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerClasses = isSticky
    ? 'border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-[var(--color-primary-dark)] shadow-[var(--shadow-header)] sm:px-6'
    : `relative z-20 px-5 pt-5 sm:px-6 sm:pt-6 ${
        tone === 'dark' ? 'text-[var(--color-primary-dark)]' : 'text-[var(--color-white)]'
      }`

  return (
    <header
      className={headerClasses}
      aria-label="Primary navigation"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:flex lg:justify-start">
          {siteData.navigation.map((item) => (
            <Link
              className="nav-text whitespace-nowrap transition-opacity hover:opacity-75"
              to={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <BrandMark className="justify-self-start lg:justify-self-center" size={isSticky ? 'compact' : 'default'} />

        <div className="hidden flex-wrap items-center justify-center gap-x-7 gap-y-4 lg:flex lg:justify-end">
          <a
            className={`nav-text hidden items-center gap-2.5 whitespace-nowrap sm:inline-flex ${phoneClassName}`}
            href={siteData.phone.href}
            aria-label={`Call ${siteData.brandName} Resort`}
          >
            <FaPhoneVolume aria-hidden="true" />
            {siteData.phone.label}
          </a>

          <Button className="min-h-12 px-5 text-[11px] sm:min-h-14 sm:px-7 sm:text-[13px]" icon={FaBell} to={siteData.booking.href}>
            {siteData.booking.label}
          </Button>
        </div>

        <button
          className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-dark)] shadow-[var(--shadow-round)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaXmark className="h-5 w-5" aria-hidden="true" /> : <FaBars className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="mt-5 grid gap-1 rounded-[var(--radius-app)] border border-white/10 bg-[var(--color-primary-dark)] p-3 text-[var(--color-white)] shadow-[var(--shadow-soft)]"
          >
            {siteData.navigation.map((item) => (
              <Link
                className="nav-text rounded-md px-4 py-3 text-[var(--color-white)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                to={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              className="nav-text mt-2 flex items-center gap-2.5 rounded-md px-4 py-3 text-[var(--color-white)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              href={siteData.phone.href}
            >
              <FaPhoneVolume aria-hidden="true" />
              {siteData.phone.label}
            </a>

            <Button className="mt-3 w-full justify-center" icon={FaBell} to={siteData.booking.href} onClick={() => setIsMenuOpen(false)}>
              {siteData.booking.label}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
