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
    <section className="relative min-h-[calc(100svh-92px)] overflow-hidden bg-[var(--color-surface)]">
      {showHeader ? (
        <div className="relative z-30">
          <SiteHeader tone="dark" />
        </div>
      ) : null}

      <div className="absolute right-0 top-0 h-full w-full lg:w-[44%]">
        <img
          className="h-full w-full object-cover"
          src={banner.backgroundImage}
          alt={banner.backgroundAlt}
        />
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]/10" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-92px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="section-eyebrow mb-8">{banner.eyebrow}</p>
          <h1 className="heading-display text-[clamp(58px,7vw,116px)] font-normal leading-[0.98] text-[var(--color-black)]">
            {banner.titleLines.map((line) => (
              <span className="block" key={line}>{line}</span>
            ))}
          </h1>
          <p className="body-copy mt-8 max-w-lg text-lg leading-8">
            {banner.description}
          </p>
        </div>

        <figure className="relative z-10 mx-auto w-full max-w-[420px] justify-self-center lg:-translate-x-[18%]">
          <img
            className="aspect-[4/5] w-full object-cover shadow-[0_28px_70px_rgba(18,33,27,0.24)]"
            src={banner.foregroundImage}
            alt={banner.foregroundAlt}
          />
        </figure>
      </div>
    </section>
  )
}

export default ContactSplitBanner
