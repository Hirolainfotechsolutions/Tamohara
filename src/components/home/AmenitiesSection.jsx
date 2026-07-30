import { FaBellConcierge, FaChampagneGlasses, FaPersonSwimming, FaUtensils } from 'react-icons/fa6'
import { MdInventory2 } from 'react-icons/md'

const amenityIcons = {
  pool: FaPersonSwimming,
  spa: FaBellConcierge,
  dining: FaUtensils,
  events: FaChampagneGlasses,
  package: MdInventory2,
}

function AmenitiesSection({ amenities }) {
  return (
    <section id="amenities" className="app-section px-2 py-16 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="section-eyebrow mb-5">
          {amenities.eyebrow}
        </p>

        <h2 className="heading-display max-w-[1340px] text-[clamp(42px,5vw,68px)] leading-[0.98] text-[var(--color-primary-dark)]">
          {amenities.title}
        </h2>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(560px,0.75fr)] lg:gap-0">
          <div className="relative z-0">
            <img
              className="h-[380px] w-full object-cover sm:h-[520px] lg:h-[552px]"
              src={amenities.image}
              alt={amenities.imageAlt}
            />
          </div>

          <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:-ml-32">
            {amenities.items.map((item) => {
              const Icon = amenityIcons[item.icon]

              return (
                <article
                  className="soft-card grid min-h-[186px] border border-[var(--color-border)] p-7 text-[var(--color-muted)]"
                  key={item.label}
                >
                  <Icon className="h-12 w-12 text-[var(--color-secondary)]" aria-hidden="true" />
                  <h3 className="card-title mt-auto">{item.label}</h3>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection
