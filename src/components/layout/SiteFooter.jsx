import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/tamohara-logo.webp'
import { siteData } from '../../data/site.data'

const socialLinks = [
  { ariaLabel: 'Facebook', href: siteData.socialLinks.facebook, Icon: FaFacebookF },
  { ariaLabel: 'Instagram', href: siteData.socialLinks.instagram, Icon: FaInstagram },
  { ariaLabel: 'LinkedIn', href: siteData.socialLinks.linkedin, Icon: FaLinkedinIn },
  { ariaLabel: 'Twitter', href: siteData.socialLinks.twitter, Icon: FaXTwitter },
].filter((item) => item.href)

function FooterLinks({ items, title }) {
  return (
    <div className="mx-auto w-full max-w-[360px] text-center sm:mx-0 sm:max-w-none sm:text-left">
      <h2 className="meta-text mb-5 text-[var(--color-primary)]">{title}</h2>
      <ul className="flex flex-col items-center gap-3 sm:block sm:space-y-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              className="inline-flex text-xs font-extrabold uppercase leading-none tracking-[0.12em] text-white underline decoration-white/0 underline-offset-4 transition-colors hover:text-[var(--color-primary)] hover:decoration-[var(--color-primary)] sm:block sm:text-base sm:font-medium sm:normal-case sm:tracking-normal sm:hover:text-white sm:hover:opacity-70 lg:text-lg"
              to={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="relative z-0 overflow-hidden bg-[var(--color-primary-dark)] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.2fr_auto] lg:gap-14">
          <div className="mx-auto grid max-w-[360px] justify-items-center text-center sm:mx-0 sm:justify-items-start sm:text-left">
            <img
              className="h-24 w-24 object-contain"
              src={logoImage}
              alt={`${siteData.brandName} Resort`}
            />
            <p className="heading-display mt-5 text-4xl font-semibold uppercase leading-none text-white">
              {siteData.brandName}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Resort
            </p>
            <Link className="primary-button mt-6 rounded-full px-6" to="/contact">
              Contact Us
            </Link>
          </div>

          <FooterLinks items={siteData.footer.navigation} title="Pages" />

          <div className="mx-auto w-full max-w-[360px] text-center sm:mx-0 sm:max-w-md sm:text-left">
            <h2 className="meta-text mb-5 text-[var(--color-primary)]">Contact Us</h2>
            <div className="space-y-4 text-base font-medium sm:text-lg">
              <a
                className="block max-w-md leading-7 text-white/82 transition-colors hover:text-[var(--color-primary)]"
                href={siteData.addressHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Tamohara Resort location in Google Maps"
              >
                {siteData.address}
              </a>
              <a className="block transition-opacity hover:opacity-70" href={siteData.phone.href}>
                {siteData.phone.label}
              </a>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[360px] justify-center gap-6 text-2xl sm:col-start-2 sm:mx-0 sm:max-w-none sm:justify-start lg:col-start-auto lg:justify-end">
            {socialLinks.map(({ ariaLabel, href, Icon }) => (
              <a aria-label={ariaLabel} className="transition-opacity hover:opacity-70" href={href} target="_blank" rel="noreferrer" key={ariaLabel}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-6 text-center text-[11px] font-semibold leading-6 text-white/82 sm:text-sm">
          <p>
            Copyright &copy; 2026{' '}
            <Link className="text-white no-underline transition-colors hover:text-[var(--color-primary)]" to="/">
              Tamohara
            </Link>
            {' '}All Rights Reserved. Designed by{' '}
            <a
              className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-[var(--color-primary)]"
              href="https://hirolainfotech.com/"
              target="_blank"
              rel="noreferrer"
            >
              Hirola InfoTech Solutions Pvt Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
