import { useEffect } from 'react'
import { FaArrowRight, FaArrowUpRightFromSquare, FaLocationDot, FaXmark } from 'react-icons/fa6'
import { groupsData } from '../../data/groups.data'

function GroupsPanel({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[var(--color-overlay-strong)] px-4 py-5 backdrop-blur-sm sm:px-6">
      <button className="fixed inset-0 h-full w-full cursor-default" type="button" aria-label="Close groups panel" onClick={onClose} />

      <section className="relative mx-auto grid max-w-[1440px] overflow-hidden border border-[var(--color-primary)] bg-[var(--color-primary-dark)] text-[var(--color-primary)] shadow-[var(--shadow-soft)] lg:grid-cols-[320px_1fr]">
        <aside className="flex flex-col items-center justify-center gap-8 border-b border-[var(--color-primary)] bg-[var(--color-primary-dark)] px-8 py-10 text-center lg:border-b-0 lg:border-r">
          <div>
            <p className="text-[clamp(34px,5vw,54px)] font-black uppercase leading-[0.9] tracking-[0.02em] text-[var(--color-white)]">
              {groupsData.title}
            </p>
            <p className="mt-8 text-sm font-black uppercase leading-snug text-[var(--color-primary)]">{groupsData.tagline}</p>
          </div>

          <img className="h-36 w-36 object-contain sm:h-44 sm:w-44" src={groupsData.logo} alt="SAN Group of Hotels" />

          <a
            className="inline-flex min-h-11 items-center justify-center gap-3 border border-[var(--color-primary)] px-7 text-xs font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            href={groupsData.exploreAllHref}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            Explore All
            <FaArrowRight aria-hidden="true" />
          </a>
        </aside>

        <div className="relative px-5 py-12 sm:px-8 lg:px-5">
          <button
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-surface)]"
            type="button"
            aria-label="Close groups panel"
            onClick={onClose}
          >
            <FaXmark className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {groupsData.hotels.map((hotel) => (
              <article
                className="flex min-h-[330px] flex-col rounded-[var(--radius-app)] border border-[var(--color-primary)] bg-[var(--color-primary-dark)] p-4 shadow-[var(--shadow-soft)] sm:min-h-[350px]"
                key={hotel.name}
              >
                {hotel.imageFit === 'logo' ? (
                  <div className="relative aspect-[16/8.6] shrink-0 overflow-hidden rounded-[4px] border border-[var(--color-primary)] bg-[var(--color-primary-dark)]">
                    <img
                      className="absolute left-1/2 top-1/2 block max-h-[82%] max-w-[82%] -translate-x-1/2 -translate-y-1/2 object-contain"
                      src={hotel.image}
                      alt={hotel.name}
                    />
                  </div>
                ) : (
                  <div className="grid aspect-[16/8.6] shrink-0 place-items-center overflow-hidden rounded-[4px] border border-[var(--color-primary)] bg-[var(--color-primary-dark)]">
                    <img className="h-full w-full object-cover" src={hotel.image} alt={hotel.name} />
                  </div>
                )}

                <h2 className="mt-5 min-h-[3.75rem] text-2xl font-black uppercase leading-none tracking-[0.01em] text-[var(--color-primary)]">
                  {hotel.name}
                </h2>

                <div className="mt-auto">
                  <p className="mb-3 flex min-h-5 items-center gap-2 text-sm font-extrabold leading-tight text-[var(--color-primary)]">
                    <FaLocationDot className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {hotel.location}
                  </p>

                  {hotel.isComingSoon ? (
                    <button
                      className="flex min-h-10 w-full items-center justify-center border border-[var(--color-primary)] px-4 text-xs font-black uppercase tracking-[0.12em] text-[var(--color-primary)] opacity-70"
                      type="button"
                      disabled
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      className="flex min-h-10 w-full items-center justify-center gap-3 border border-[var(--color-primary)] px-4 text-xs font-black uppercase tracking-[0.12em] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                      href={hotel.href}
                      target={hotel.href?.startsWith('http') ? '_blank' : undefined}
                      rel={hotel.href?.startsWith('http') ? 'noreferrer' : undefined}
                      onClick={onClose}
                    >
                      Explore More
                      <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupsPanel
