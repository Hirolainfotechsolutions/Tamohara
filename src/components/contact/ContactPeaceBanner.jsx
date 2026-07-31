import { Link } from 'react-router-dom'
import centerBannerImage from '../../assets/images/contactbanner1.webp'
import leafBackgroundImage from '../../assets/images/contactbanner.webp'
import SiteHeader from '../layout/SiteHeader'

function ContactPeaceBanner({ showHeader = false }) {
  return (
    <section className="relative grid min-h-[calc(100svh-92px)] overflow-hidden bg-[var(--color-primary-dark)] px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-88px)] lg:py-12">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={leafBackgroundImage}
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[rgba(20,35,29,0.28)]" />

      {showHeader ? (
        <div className="absolute inset-x-0 top-0 z-20 px-2 pt-2 sm:px-3 sm:pt-3">
          <SiteHeader />
        </div>
      ) : null}

      <div className="relative mx-auto grid w-full max-w-7xl place-items-center">
        <div className="relative w-full max-w-[min(78vw,820px)] lg:translate-x-[8%]">
          <img
            className="h-[330px] w-full object-cover sm:h-[410px] lg:h-[470px]"
            src={centerBannerImage}
            alt="Tamohra Resort pool and peaceful Sakleshpur greenery"
          />

          <div className="absolute left-0 top-1/2 w-[min(620px,88vw)] -translate-y-1/2 lg:-translate-x-[32%]">
            <h1 className="heading-display text-[clamp(48px,6vw,84px)] font-normal leading-[0.98] text-[var(--color-white)]">
              <span className="block">So close,</span>
              <span className="block">so peaceful</span>
            </h1>

            <Link
              className="meta-text mt-10 inline-flex min-h-16 min-w-[228px] items-center justify-center border border-white/78 px-8 text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-black)]"
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
