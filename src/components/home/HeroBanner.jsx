import SiteHeader from '../layout/SiteHeader'

function HeroBanner({ hero }) {
  return (
    <section
      className="relative min-h-[calc(100svh-24px)] overflow-hidden rounded-[var(--radius-app)] bg-cover bg-center text-[var(--color-white)]"
      style={{
        backgroundImage: `linear-gradient(var(--color-overlay), var(--color-overlay)), url("${hero.backgroundImage}")`,
      }}
      aria-label={hero.ariaLabel}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_35%,var(--color-white-glow),transparent_28%),linear-gradient(180deg,var(--color-shadow-soft)_0%,var(--color-shadow-medium)_42%,var(--color-overlay-strong)_100%)]" />

      <SiteHeader />

      <div className="relative z-10 grid min-h-[calc(100svh-220px)] place-content-center justify-items-center px-6 pb-24 pt-12 text-center lg:min-h-[calc(100svh-132px)]">
        <p className="banner-eyebrow mb-5">{hero.eyebrow}</p>

        <h1 className="banner-title m-0 max-w-[980px] text-center text-[clamp(44px,6vw,82px)]">
          {hero.titleLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h1>

        <p className="banner-copy mt-5 max-w-[560px] text-center">
          {hero.subtitle}
        </p>
      </div>
    </section>
  )
}

export default HeroBanner
