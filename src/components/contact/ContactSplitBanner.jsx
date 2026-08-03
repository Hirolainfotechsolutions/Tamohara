import poolImage from '../../assets/images/1.webp'
import estateImage from '../../assets/images/7.webp'
import SiteHeader from '../layout/SiteHeader'

const defaultBanner = {
  eyebrow: 'Contact Tamohra Resort',
  titleLines: ['We are', 'Tamohra.'],
  description:
    'Plan your Sakleshpur stay with rooms, buffet meals, estate activities, and warm mountain hospitality.',
  foregroundImage: poolImage,
  foregroundAlt: 'Guests relaxing beside the Tamohra Resort pool',
  backgroundImage: estateImage,
  backgroundAlt: 'Tamohra Resort green coffee estate view',
}

function ContactSplitBanner({ banner = defaultBanner, showHeader = false }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)]">
      {showHeader ? (
        <div className="relative z-30 [&_header]:!text-[var(--color-white)] lg:[&_header]:!text-[var(--color-primary-dark)]">
          <SiteHeader tone="dark" />
        </div>
      ) : null}

      <div className="absolute right-0 top-0 h-[40%] w-full sm:h-full lg:w-[44%]">
        <img
          className="h-full w-full object-cover"
          src={banner.backgroundImage}
          alt={banner.backgroundAlt}
        />
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]/10" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-92px)] max-w-7xl items-start gap-8 px-5 pb-8 pt-[calc(40svh+235px)] sm:px-8 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-12">
        <div className="relative z-10 mt-0 max-w-none sm:max-w-xl">
          <p className="section-eyebrow mb-5 sm:mb-8">{banner.eyebrow}</p>
          <h1 className="heading-display text-[clamp(38px,10vw,116px)] font-normal leading-[1] text-[var(--color-primary-dark)]">
            {banner.titleLines.map((line) => (
              <span className="block" key={line}>{line}</span>
            ))}
          </h1>
          <p className="body-copy mt-6 max-w-lg text-base leading-7 sm:mt-8 sm:text-lg sm:leading-8">
            {banner.description}
          </p>
        </div>

        <figure className="absolute left-1/2 top-[calc(40svh-112px)] z-10 w-[88%] max-w-[350px] -translate-x-1/2 justify-self-center sm:relative sm:left-auto sm:top-auto sm:mx-auto sm:w-full sm:max-w-[420px] sm:translate-x-0 lg:-translate-x-[18%]">
          <img
            className="h-[300px] w-full rounded-[var(--radius-app)] object-cover shadow-[0_28px_70px_var(--color-shadow-medium)] sm:aspect-[4/5] sm:h-auto lg:rounded-none"
            src={banner.foregroundImage}
            alt={banner.foregroundAlt}
          />
        </figure>
      </div>
    </section>
  )
}

export default ContactSplitBanner
