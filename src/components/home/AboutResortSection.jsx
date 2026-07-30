import { FaUmbrellaBeach } from 'react-icons/fa6'
import Button from '../ui/Button'

function AboutResortSection({ about }) {
  return (
    <section id="about-resort" className="soft-section px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.92fr_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="overflow-hidden rounded-[var(--radius-app)] shadow-[var(--shadow-soft)]">
            <img className="h-[420px] w-full object-cover" src={about.image} alt={about.imageAlt} />
          </div>
        </div>

        <div>
          <p className="section-eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-secondary)]" aria-hidden="true" />
            {about.eyebrow}
            <span className="h-px w-8 bg-[var(--color-secondary)]" aria-hidden="true" />
          </p>

          <h2 className="heading-display max-w-[650px] text-[clamp(42px,5vw,64px)] font-semibold leading-[1.08]">
            {about.title}
          </h2>

          <p className="body-copy mt-7 max-w-[660px] text-base leading-8 sm:text-lg">
            {about.description}
          </p>

          <div className="mt-8 flex items-center gap-5">
            <Button to={about.button.href}>
              {about.button.label}
            </Button>

            <div className="h-px flex-1 bg-[var(--color-border)]" aria-hidden="true" />

            <FaUmbrellaBeach className="h-12 w-12 shrink-0 text-[var(--color-secondary)]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutResortSection
