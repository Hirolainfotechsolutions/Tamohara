import { FaLocationDot, FaRoute } from 'react-icons/fa6'

function AboutNearbyPlacesSection({ nearbyPlaces }) {
  return (
    <section className="soft-section px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end lg:gap-14">
        <div>
          <p className="section-eyebrow mb-4">{nearbyPlaces.eyebrow}</p>
          <h2 className="heading-display text-[clamp(34px,10vw,74px)] font-semibold leading-[1.02]">
            {nearbyPlaces.title}
          </h2>
          <p className="body-copy mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
            {nearbyPlaces.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {nearbyPlaces.items.map((place, index) => (
            <article
              className={`rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-round)] transition-transform duration-300 hover:-translate-y-1 sm:p-5 ${
                index === nearbyPlaces.items.length - 1 ? 'col-span-2 lg:col-span-1' : ''
              }`}
              key={place.name}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-primary-dark)] text-[var(--color-primary)]">
                  <FaLocationDot aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-tint)] px-3 py-1 text-xs font-bold text-[var(--color-primary-dark)]">
                  <FaRoute aria-hidden="true" />
                  {place.distance}
                </span>
              </div>
              <h3 className="heading-display mt-8 text-xl font-semibold leading-tight sm:text-2xl">
                {place.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutNearbyPlacesSection
