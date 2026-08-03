import { Link } from 'react-router-dom'
import centerBannerImage from '../../assets/images/1.webp'
import leafBackgroundImage from '../../assets/images/contactbanner.webp'
import SiteHeader from '../layout/SiteHeader'

function ContactPeaceBanner({ showHeader = false }) {
  return (
    <section className="relative grid min-h-[100svh] overflow-hidden bg-[var(--color-primary-dark)] px-0 py-0 sm:px-6 sm:py-6 lg:py-12">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={leafBackgroundImage}
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[rgba(18,33,27,0.28)]" />

      {showHeader ? (
        <div className="absolute inset-x-0 top-0 z-20 px-2 pt-2 sm:px-3 sm:pt-3">
          <SiteHeader />
        </div>
      ) : null}

      <div className="relative mx-auto grid w-full max-w-7xl place-items-center px-6 pt-24 sm:pt-28 lg:px-0 lg:pt-0">
        <div className="relative w-full max-w-[min(100%,520px)] sm:max-w-[min(100%,820px)] lg:max-w-[min(78vw,820px)] lg:translate-x-[8%]">
          <img
            className="h-[min(58svh,420px)] w-full rounded-[var(--radius-app)] object-cover sm:h-[min(62svh,470px)] lg:h-[470px] lg:rounded-none"
            src={centerBannerImage}
            alt="Tamohra Resort pool and peaceful Sakleshpur greenery"
          />

          <div className="absolute left-4 right-4 top-1/2 w-auto -translate-y-1/2 sm:left-8 sm:right-auto sm:w-[min(560px,76vw)] lg:-translate-x-[32%]">
            <h1 className="heading-display text-[clamp(31px,9.5vw,48px)] font-normal leading-[0.98] text-[var(--color-white)] sm:text-[clamp(48px,6vw,84px)]">
              <span className="block">So close,</span>
              <span className="block">so peaceful</span>
            </h1>

            <Link
              className="meta-text mt-5 inline-flex min-h-11 min-w-[156px] items-center justify-center border border-white/78 px-5 text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary-dark)] sm:mt-10 sm:min-h-16 sm:min-w-[228px] sm:px-8"
              to="/#book"
            >
              BOOK A ROOM
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPeaceBanner
