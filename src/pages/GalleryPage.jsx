import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaXmark } from 'react-icons/fa6'
import HomeBookingSection from '../components/home/HomeBookingSection'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import { galleryPageData } from '../data/gallery.data'
import { homePageData } from '../data/home.data'

const layoutClasses = [
  'sm:col-span-2 lg:col-span-7',
  'sm:col-span-2 lg:col-span-5',
  'sm:col-span-2 lg:col-span-5',
  'sm:col-span-2 lg:col-span-7',
]

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeImage, setActiveImage] = useState(null)
  const categories = ['All', ...galleryPageData.categories]
  const visibleImages =
    activeCategory === 'All'
      ? galleryPageData.images
      : galleryPageData.images.filter((image) => image.category === activeCategory)
  const imageGroups = visibleImages.reduce((groups, image, index) => {
    const groupIndex = Math.floor(index / 4)
    if (!groups[groupIndex]) {
      groups[groupIndex] = []
    }
    groups[groupIndex].push(image)
    return groups
  }, [])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  const activeImageIndex = activeImage
    ? visibleImages.findIndex((image) => image.title === activeImage.title)
    : -1

  const showPreviousImage = () => {
    if (activeImageIndex < 0) return
    const previousIndex = activeImageIndex === 0 ? visibleImages.length - 1 : activeImageIndex - 1
    setActiveImage(visibleImages[previousIndex])
  }

  const showNextImage = () => {
    if (activeImageIndex < 0) return
    const nextIndex = (activeImageIndex + 1) % visibleImages.length
    setActiveImage(visibleImages[nextIndex])
  }

  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="sticky top-0 z-50">
          <SiteHeader isSticky />
        </div>

        <section className="px-4 py-12 sm:px-6 lg:py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="section-eyebrow mb-5">{galleryPageData.eyebrow}</p>
            <h1 className="heading-display mx-auto max-w-5xl text-[clamp(44px,6vw,82px)] font-semibold leading-[0.98]">
              {galleryPageData.title}
            </h1>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg">
              {galleryPageData.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? 'border-[var(--color-primary-dark)] bg-[var(--color-primary-dark)] text-[var(--color-white)]'
                      : 'border-[var(--color-border)] bg-[var(--color-secondary-light)] text-[var(--color-black)] hover:border-[var(--color-primary-dark)]'
                  }`}
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:pb-24">
          <div className="mx-auto grid w-full max-w-[90vw] gap-6 lg:gap-8">
            {imageGroups.map((group, groupIndex) => (
              <div
                className="grid gap-5 sm:grid-cols-4 lg:grid-cols-12 lg:gap-6"
                key={`gallery-group-${groupIndex}`}
              >
                {group.map((image, index) => (
                  <button
                    className={`group relative h-[340px] overflow-hidden rounded-[var(--radius-app)] bg-[var(--color-primary-dark)] text-left sm:h-[400px] lg:h-[460px] ${
                      layoutClasses[index] ?? 'sm:col-span-2 lg:col-span-6'
                    }`}
                    key={image.title}
                    type="button"
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={image.src}
                      alt={image.alt}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(20,35,29,0.84)_100%)] opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-[var(--color-white)]">
                      <p className="meta-text mb-2 text-white/70">{image.category}</p>
                      <h2 className="heading-display text-3xl font-semibold leading-none text-[var(--color-white)]">
                        {image.title}
                      </h2>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </section>

        {activeImage ? (
          <div
            className="fixed inset-0 z-[80] grid place-items-center bg-[rgba(20,35,29,0.9)] p-4"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
          >
            <button
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-[var(--color-secondary-light)] text-xl text-[var(--color-black)] transition-colors hover:bg-[var(--color-primary)]"
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image viewer"
            >
              <FaXmark aria-hidden="true" />
            </button>
            <button
              className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-secondary-light)] text-lg text-[var(--color-black)] transition-colors hover:bg-[var(--color-primary)] sm:grid"
              type="button"
              onClick={showPreviousImage}
              aria-label="View previous image"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>
            <div className="w-full max-w-6xl overflow-hidden rounded-[var(--radius-app)] shadow-[var(--shadow-soft)]">
              <img
                className="max-h-[82svh] w-full object-contain"
                src={activeImage.src}
                alt={activeImage.alt}
              />
            </div>
            <button
              className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-secondary-light)] text-lg text-[var(--color-black)] transition-colors hover:bg-[var(--color-primary)] sm:grid"
              type="button"
              onClick={showNextImage}
              aria-label="View next image"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
            <div className="absolute bottom-5 flex gap-3 sm:hidden">
              <button
                className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-secondary-light)] text-lg text-[var(--color-black)]"
                type="button"
                onClick={showPreviousImage}
                aria-label="View previous image"
              >
                <FaArrowLeft aria-hidden="true" />
              </button>
              <button
                className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-secondary-light)] text-lg text-[var(--color-black)]"
                type="button"
                onClick={showNextImage}
                aria-label="View next image"
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}

        <HomeBookingSection booking={homePageData.bookingRequest} />
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default GalleryPage
