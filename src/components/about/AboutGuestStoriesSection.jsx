import { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import BrandMark from '../ui/BrandMark'

function AboutGuestStoriesSection({ guestStories }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStory = guestStories.testimonials[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? guestStories.testimonials.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % guestStories.testimonials.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % guestStories.testimonials.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [guestStories.testimonials.length])

  return (
    <section className="app-section px-4 pb-3 pt-8 sm:px-6 sm:pb-5 lg:pb-6 lg:pt-10">
      <div className="mx-auto max-w-6xl text-center">
        <p className="body-copy text-sm font-semibold">{guestStories.eyebrow}</p>
        <h2 className="heading-display mt-4 text-[clamp(44px,5vw,72px)] font-normal leading-none">
          Guest <span className="italic text-[var(--color-primary)]">stories</span>
        </h2>

        <div className="relative mx-auto mt-8 min-h-[230px] max-w-3xl sm:min-h-[250px]">
          <button
            className="absolute left-0 top-[92px] hidden h-12 w-12 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] sm:grid"
            type="button"
            aria-label="Previous guest story"
            onClick={goToPrevious}
          >
            <FaArrowLeft aria-hidden="true" />
          </button>

          <div className="mx-auto grid min-h-[230px] max-w-xl content-start transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:min-h-[250px]">
            <div className="flex items-center justify-center gap-3">
              <BrandMark className="scale-[0.58] text-[var(--color-primary-dark)]" subtitleClassName="text-[10px]" />
              <span className="h-px w-7 bg-[var(--color-border)]" aria-hidden="true" />
              <div className="flex gap-1 text-[var(--color-primary)]" aria-label={`${activeStory.rating} star review`}>
                {Array.from({ length: activeStory.rating }).map((_, index) => (
                  <FaStar className="h-5 w-5" key={index} aria-hidden="true" />
                ))}
              </div>
            </div>

            <blockquote className="mx-auto mt-7 max-w-[560px] text-xl font-semibold leading-8 text-[var(--color-primary-dark)]">
              "{activeStory.quote}"
            </blockquote>

            <p className="meta-text mt-8 text-[var(--color-muted)]">{activeStory.guestName}</p>
            <p className="meta-text mt-1 text-[var(--color-muted)]">{activeStory.guestMeta}</p>

            <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
              <button
                className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
                type="button"
                aria-label="Previous guest story"
                onClick={goToPrevious}
              >
                <FaArrowLeft aria-hidden="true" />
              </button>
              <button
                className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
                type="button"
                aria-label="Next guest story"
                onClick={goToNext}
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <button
            className="absolute right-0 top-[92px] hidden h-12 w-12 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] sm:grid"
            type="button"
            aria-label="Next guest story"
            onClick={goToNext}
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-5 pb-3 pt-6 sm:grid-cols-2 sm:pb-5 lg:mt-8 lg:grid-cols-4 lg:pb-6 lg:pt-8">
          {guestStories.images.map((image, index) => (
            <div
              className="will-change-transform"
              style={{
                animation: `${index % 2 === 0 ? 'floatDownReturn' : 'floatUpReturn'} 4.5s ease-in-out infinite`,
                animationDelay: `${(index % 4) * 0.18}s`,
              }}
              key={image.alt}
            >
              <img
                className="h-[235px] w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutGuestStoriesSection
