import { FaBell, FaPhoneVolume } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { siteData } from '../../data/site.data'
import BrandMark from '../ui/BrandMark'
import Button from '../ui/Button'

function SiteHeader({ isSticky = false }) {
  const headerClasses = isSticky
    ? 'grid items-center gap-6 border-b border-[var(--color-border)] bg-[var(--color-secondary-light)] px-6 py-4 text-[var(--color-black)] shadow-[var(--shadow-header)] lg:grid-cols-[1fr_auto_1fr]'
    : 'relative z-20 grid items-center gap-6 px-6 pt-6 text-[var(--color-white)] lg:grid-cols-[1fr_auto_1fr]'

  return (
    <header
      className={headerClasses}
      aria-label="Primary navigation"
    >
      <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
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

      <BrandMark className="row-start-1 lg:row-auto" />

      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 lg:justify-end">
        <a
          className="nav-text hidden items-center gap-2.5 whitespace-nowrap sm:inline-flex"
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
    </header>
  )
}

export default SiteHeader
