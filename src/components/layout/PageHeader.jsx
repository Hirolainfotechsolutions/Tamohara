import Button from '../ui/Button'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import StickySiteHeader from './StickySiteHeader'

function PageHeader({ page }) {
  return (
    <main className="app-section min-h-svh">
      <StickySiteHeader />
      <div className="relative z-10 bg-[var(--color-surface)] p-2 sm:p-3">
        <section className="relative min-h-[calc(100svh-24px)] overflow-hidden rounded-[var(--radius-app)] bg-[var(--color-primary-dark)] text-[var(--color-white)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,var(--color-overlay-strong),var(--color-primary-dark-overlay)_48%,var(--color-primary-soft-overlay))]" />
          <SiteHeader />

          <div className="relative z-10 mx-auto grid min-h-[calc(100svh-164px)] max-w-5xl place-content-center px-6 py-12 text-center">
            <p className="banner-eyebrow mb-5">
              {page.eyebrow}
            </p>
            <h1 className="banner-title mx-auto mb-6 max-w-4xl">
              {page.title}
            </h1>
            <p className="banner-copy mx-auto mb-10 max-w-2xl">
              {page.description}
            </p>

            <div className="mx-auto grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.highlights.map((item) => (
                <div className="meta-text rounded-lg border border-white/18 bg-white/10 px-4 py-5 backdrop-blur" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <Button className="mx-auto mt-10" to="/">
              Back Home
            </Button>
          </div>
        </section>
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default PageHeader
