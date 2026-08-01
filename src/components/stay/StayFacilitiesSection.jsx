import {
  FaBuildingColumns,
  FaChampagneGlasses,
  FaFireFlameCurved,
  FaMountainSun,
  FaPersonSwimming,
  FaRegClone,
  FaRoute,
  FaUtensils,
} from 'react-icons/fa6'

const facilityIcons = {
  banquet: FaBuildingColumns,
  events: FaFireFlameCurved,
  linens: FaRegClone,
  pool: FaPersonSwimming,
  restaurant: FaUtensils,
  rope: FaRoute,
  trek: FaMountainSun,
}

function StayFacilitiesSection({ facilities }) {
  return (
    <section className="app-section px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="heading-display text-[clamp(48px,6vw,86px)] font-normal leading-[0.96] text-[var(--color-primary-dark)]">
          {facilities.titleLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mx-auto mt-16 grid max-w-5xl gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.items.map((item, index) => {
            const Icon = facilityIcons[item.icon] ?? FaChampagneGlasses

            return (
              <article
                className={`${index > 3 ? 'lg:translate-x-1/2' : ''} grid justify-items-center text-center`}
                key={item.label}
              >
                <Icon className="h-14 w-14 text-[var(--color-muted)]" aria-hidden="true" />
                <h3 className="meta-text mt-5 text-[var(--color-muted)]">{item.label}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StayFacilitiesSection
