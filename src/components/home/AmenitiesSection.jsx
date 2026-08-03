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
    <section id="amenities" className="app-section px-4 pb-8 pt-16 sm:px-6 sm:pb-12 lg:px-6 lg:py-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="section-eyebrow mb-5">
          {amenities.eyebrow}
        </p>

        <h2 className="heading-display max-w-[1340px] text-[clamp(36px,10vw,68px)] leading-[1.02] !text-[var(--color-primary-dark)]">
          {amenities.title}
        </h2>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(560px,0.75fr)] lg:gap-0">
          <div className="relative z-0">
            <img
              className="h-[300px] w-full rounded-[var(--radius-app)] object-cover sm:h-[420px] lg:h-[552px] lg:rounded-none"
              src={amenities.image}
              alt={amenities.imageAlt}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 lg:-ml-32 lg:gap-5">
            {amenities.items.map((item) => {
              const Icon = amenityIcons[item.icon]

              return (
                <article
                  className="soft-card grid min-h-[130px] rounded-[var(--radius-app)] border border-[var(--color-border)] p-4 text-[var(--color-muted)] sm:min-h-[170px] sm:p-6 lg:min-h-[186px] lg:rounded-none lg:p-7"
                  key={item.label}
                >
                  <Icon className="h-9 w-9 text-[var(--color-primary)] sm:h-12 sm:w-12" aria-hidden="true" />
                  <h3 className="card-title mt-auto text-sm leading-tight sm:text-[1.0625rem]">{item.label}</h3>
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
