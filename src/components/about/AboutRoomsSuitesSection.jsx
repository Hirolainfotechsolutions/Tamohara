import { useEffect, useMemo, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AboutRoomsSuitesSection({ roomsSuites }) {
  const rooms = roomsSuites.items
  const slideCount = rooms.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasTransition, setHasTransition] = useState(true)

  const carouselRooms = useMemo(() => [...rooms, ...rooms.slice(0, 3)], [rooms])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHasTransition(true)
      setActiveIndex((currentIndex) => currentIndex + 1)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  const normalizedIndex = activeIndex % slideCount

  const goToPrevious = () => {
    if (activeIndex === 0) {
      setHasTransition(false)
      setActiveIndex(slideCount)

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setHasTransition(true)
          setActiveIndex(slideCount - 1)
        })
      })
      return
    }

    setHasTransition(true)
    setActiveIndex((currentIndex) => currentIndex - 1)
  }

  const goToNext = () => {
    setHasTransition(true)
    setActiveIndex((currentIndex) => currentIndex + 1)
  }

  const handleTransitionEnd = () => {
    if (activeIndex >= slideCount) {
      setHasTransition(false)
      setActiveIndex(0)

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setHasTransition(true))
      })
    }
  }

  const goToSlide = (index) => {
    setHasTransition(true)
    setActiveIndex(index)
  }

  return (
    <section className="app-section px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow mb-4">{roomsSuites.eyebrow}</p>
            <h2 className="heading-display text-[clamp(42px,5vw,72px)] font-semibold leading-none">
              {roomsSuites.title}
            </h2>
            <p className="body-copy mt-4 max-w-xl text-base leading-7">{roomsSuites.description}</p>
          </div>

          <div className="flex gap-3">
            <button
              className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-black)] transition-colors hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-white)]"
              type="button"
              onClick={goToPrevious}
              aria-label="Previous rooms"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>
            <button
              className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-primary-dark)] text-[var(--color-white)] transition-colors hover:bg-[var(--color-black)]"
              type="button"
              onClick={goToNext}
              aria-label="Next rooms"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="rooms-carousel mt-10 overflow-hidden">
          <div
            className={`rooms-carousel-track ${hasTransition ? 'transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}`}
            style={{
              transform: `translateX(calc(-${activeIndex} * (((100% - ((var(--rooms-visible) - 1) * var(--rooms-gap))) / var(--rooms-visible)) + var(--rooms-gap))))`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {carouselRooms.map((room, index) => (
              <article
                className="group min-w-0"
                key={`${room.title}-${index}`}
              >
                <div className="overflow-hidden rounded-[var(--radius-app)]">
                  <img
                    className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={room.image}
                    alt={room.imageAlt}
                  />
                </div>
                <div className="mt-5">
                  <h3 className="heading-display text-2xl font-semibold">{room.title}</h3>
                  <p className="meta-text mt-2 text-[var(--color-primary-dark)]">{room.subtitle}</p>
                  <p className="body-copy mt-3 min-h-[72px] text-sm leading-6">{room.description}</p>
                  <Link
                    className="meta-text mt-5 inline-flex border-b border-[var(--color-black)] pb-1 text-[var(--color-black)] transition-colors hover:text-[var(--color-primary)]"
                    to={room.href}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {rooms.map((room, index) => (
            <button
              className={`h-2.5 rounded-full transition-all ${
                normalizedIndex === index ? 'w-8 bg-[var(--color-primary-dark)]' : 'w-2.5 bg-[var(--color-border)]'
              }`}
              key={room.title}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Show room slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutRoomsSuitesSection
