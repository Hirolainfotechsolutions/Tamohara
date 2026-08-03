import {
  FaBed,
  FaChampagneGlasses,
  FaMugSaucer,
  FaPersonHiking,
  FaPersonSwimming,
  FaUtensils,
} from 'react-icons/fa6'

const serviceIcons = {
  banquet: FaChampagneGlasses,
  coffee: FaMugSaucer,
  dining: FaUtensils,
  linen: FaBed,
  pool: FaPersonSwimming,
  trek: FaPersonHiking,
}

function AboutServicesSection({ services }) {
  return (
    <section className="soft-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="section-eyebrow mb-5">{services.eyebrow}</p>
        <h2 className="heading-display mx-auto max-w-3xl text-[clamp(42px,5vw,68px)] font-semibold leading-[1.04]">
          {services.title}
        </h2>

        <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => {
            const Icon = serviceIcons[service.icon]

            return (
              <article className="grid justify-items-center text-center" key={service.title}>
                <div className="grid h-16 w-16 place-items-center rounded-full border border-[var(--color-primary)] text-[var(--color-primary)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="heading-display mt-5 max-w-[260px] text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="body-copy mt-4 max-w-[310px] text-base leading-7">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutServicesSection
