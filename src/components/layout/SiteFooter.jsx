import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { siteData } from '../../data/site.data'

function FooterLinks({ items, title }) {
  return (
    <div>
      <h2 className="meta-text mb-5 text-white/58">{title}</h2>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link className="text-base font-medium leading-none text-white transition-opacity hover:opacity-70 sm:text-lg" to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SiteFooter({ reveal = false }) {
  const year = new Date().getFullYear()
  const footerPositionClass = reveal ? 'relative z-0 lg:sticky lg:bottom-0' : 'relative z-0'

  return (
    <footer className={`${footerPositionClass} overflow-hidden bg-[var(--color-primary-dark)] px-5 py-12 text-white sm:px-8 lg:min-h-[76svh] lg:px-10`}>
      <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-12 lg:min-h-[calc(76svh-96px)]">
        <div className="grid items-start gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_auto]">
          <FooterLinks items={siteData.footer.navigation} title="Pages" />

          <div>
            <h2 className="meta-text mb-5 text-white/58">Contact Us</h2>
            <div className="space-y-4 text-base font-medium sm:text-lg">
              <p className="max-w-md leading-7 text-white/82">
                {siteData.address}
              </p>
              <a className="block transition-opacity hover:opacity-70" href={siteData.phone.href}>
                {siteData.phone.label}
              </a>
              <a className="block break-words transition-opacity hover:opacity-70" href={siteData.email.href}>
                {siteData.email.label}
              </a>
            </div>
          </div>

          <div className="flex gap-6 text-2xl sm:col-start-2 sm:justify-start lg:col-start-auto lg:justify-end">
            <a aria-label="Facebook" className="transition-opacity hover:opacity-70" href="https://facebook.com">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a aria-label="Instagram" className="transition-opacity hover:opacity-70" href="https://instagram.com">
              <FaInstagram aria-hidden="true" />
            </a>
            <a aria-label="LinkedIn" className="transition-opacity hover:opacity-70" href="https://linkedin.com">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a aria-label="Twitter" className="transition-opacity hover:opacity-70" href="https://twitter.com">
              <FaXTwitter aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden">
          <p className="heading-display pointer-events-none w-full select-none whitespace-nowrap text-center text-[clamp(64px,18vw,250px)] font-semibold uppercase leading-[0.82] text-white">
            {siteData.brandName}
          </p>
          <div className="mt-6 flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p>&copy; {year} All rights reserved.</p>
            <p>{siteData.footer.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
