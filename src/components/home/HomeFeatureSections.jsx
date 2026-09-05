import { useEffect, useRef, useState } from 'react'
import {
  FaArrowRight,
  FaBed,
  FaBoxOpen,
  FaBuildingColumns,
  FaLeaf,
  FaPersonSwimming,
  FaRegHandshake,
  FaSeedling,
  FaSpa,
  FaTree,
  FaUtensils,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

function RoomsPreviewSection({ rooms }) {
  const roomsListRef = useRef(null)
  const [activeRoomIndex, setActiveRoomIndex] = useState(0)

  useEffect(() => {
    const list = roomsListRef.current
    if (!list) return undefined

    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    let animationFrame

    const updateActiveRoom = () => {
      if (!mediaQuery.matches) return

      const roomLinks = [...list.querySelectorAll('[data-room-index]')]
      const viewportCenter = window.innerHeight * 0.5
      const closestRoom = roomLinks
        .map((roomLink) => {
          const rect = roomLink.getBoundingClientRect()
          const roomCenter = rect.top + rect.height * 0.5
          return {
            distance: Math.abs(roomCenter - viewportCenter),
            index: Number(roomLink.dataset.roomIndex),
          }
        })
        .sort((a, b) => a.distance - b.distance)[0]

      if (closestRoom) {
        setActiveRoomIndex((currentIndex) =>
          currentIndex === closestRoom.index ? currentIndex : closestRoom.index,
        )
      }
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateActiveRoom)
    }

    const toggleScrollListener = () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)

      if (mediaQuery.matches) {
        requestUpdate()
        window.addEventListener('scroll', requestUpdate, { passive: true })
        window.addEventListener('resize', requestUpdate)
      }
    }

    toggleScrollListener()
    mediaQuery.addEventListener('change', toggleScrollListener)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      mediaQuery.removeEventListener('change', toggleScrollListener)
    }
  }, [])

  return (
    <section className="app-section px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="section-eyebrow mb-4">{rooms.eyebrow}</p>
          <h2 className="heading-display text-[clamp(40px,5vw,64px)] leading-[1.02]">{rooms.title}</h2>
          <p className="body-copy mt-5 max-w-2xl text-base leading-8">{rooms.description}</p>
        </div>

        <div ref={roomsListRef} className="overflow-hidden rounded-[var(--radius-app)] border border-[var(--color-border)]">
          {rooms.items.map((room, index) => {
            const isActive = activeRoomIndex === index
            const roomImage = room.image ?? rooms.items[0].image
            const roomImageAlt = room.imageAlt ?? `${room.title} at Tamohara Resort`

            return (
              <Link
                className={`grid border-b border-[var(--color-border)] transition-[grid-template-columns,min-height,background-color,color] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] last:border-b-0 lg:grid-cols-[0fr_1fr] ${
                  isActive
                    ? 'min-h-[180px] bg-[var(--color-primary-dark)] text-[var(--color-white)] lg:grid-cols-[280px_1fr]'
                    : 'min-h-[112px] bg-[var(--color-surface)] text-[var(--color-primary-dark)]'
                }`}
                key={room.title}
                data-room-index={index}
                onFocus={() => setActiveRoomIndex(index)}
                onMouseEnter={() => setActiveRoomIndex(index)}
                tabIndex={0}
                to={room.href}
              >
                <div
                  className={`overflow-hidden transition-[height,opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] lg:h-auto ${
                    isActive ? 'h-44 opacity-100' : 'h-0 opacity-0 lg:opacity-100'
                  }`}
                >
                  <img
                    className={`h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'scale-100' : 'scale-105'
                    }`}
                    src={roomImage}
                    alt={roomImageAlt}
                  />
                </div>
                <div className="grid content-center overflow-hidden px-6 py-7 transition-[padding] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <h3 className="heading-display text-3xl font-semibold text-inherit transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {room.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-6 transition-[color,opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'translate-y-0 text-white/82 opacity-100' : 'translate-y-1 body-copy opacity-80'
                    }`}
                  >
                    {room.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WellnessSection({ wellness }) {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canAnimateImages, setCanAnimateImages] = useState(false)

  useEffect(() => {
    const updateMotionMode = () => setCanAnimateImages(window.innerWidth >= 1024)
    const updateProgress = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    updateMotionMode()
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    window.addEventListener('resize', updateMotionMode)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      window.removeEventListener('resize', updateMotionMode)
    }
  }, [])

  const motion = Math.min(Math.max((scrollProgress - 0.18) / 0.48, 0), 1)
  const leftTransform = `translateX(${(1 - motion) * 72}px) rotate(${-6 * motion}deg)`
  const rightTransform = `translateX(${(1 - motion) * -72}px) rotate(${6 * motion}deg)`
  const centerTransform = `translateY(${motion * 42}px) scale(${0.96 + motion * 0.04})`

  return (
    <section ref={sectionRef} className="soft-section grid overflow-hidden px-4 py-12 sm:px-6 lg:min-h-svh lg:py-12">
      <div className="mx-auto grid w-full max-w-6xl content-center text-center">
        <p className="section-eyebrow mb-4">{wellness.eyebrow}</p>
        <h2 className="heading-display mx-auto max-w-5xl text-[clamp(38px,11vw,82px)] font-semibold leading-[1]">{wellness.title}</h2>
        <p className="body-copy mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">{wellness.description}</p>

        <div className="mt-10 grid items-center gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12">
          {wellness.images.map((image, index) => (
            <img
              className="h-[250px] w-full rounded-[var(--radius-app)] object-cover transition-transform duration-200 ease-out sm:h-[320px] lg:h-[360px]"
              style={{
                transform: canAnimateImages ? index === 0 ? leftTransform : index === 2 ? rightTransform : centerTransform : 'none',
                zIndex: index === 1 ? 2 : 1,
              }}
              src={image.src}
              alt={image.alt}
              key={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FacilitiesScrollSection({ facilities }) {
  const facilityIcons = {
    banquet: FaBuildingColumns,
    dining: FaUtensils,
    essentials: FaBoxOpen,
    pool: FaPersonSwimming,
    rooms: FaBed,
    trails: FaTree,
  }

  return (
    <section className="bg-[var(--color-primary-dark)] px-4 py-12 text-[var(--color-white)] sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-10">
        <div className="lg:max-w-[640px]">
          <div className="mb-12 lg:mb-10">
            <p className="banner-eyebrow mb-5">{facilities.eyebrow}</p>
            <h2 className="heading-display max-w-xl text-[clamp(40px,4.8vw,66px)] font-semibold leading-[1.04] text-[var(--color-white)]">
              {facilities.title}
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            {facilities.items.map((item) => {
              const Icon = facilityIcons[item.icon] ?? FaLeaf

              return (
                <article
                  className="sticky top-20 min-h-[250px] rounded-[var(--radius-app)] border border-white/10 bg-[var(--color-surface)] p-6 text-[var(--color-primary-dark)] shadow-[var(--shadow-soft)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-24 sm:min-h-[280px] sm:p-8 lg:min-h-[350px] lg:p-10"
                  key={item.title}
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-primary-dark)] text-2xl text-[var(--color-white)]">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="heading-display mt-6 text-2xl font-semibold leading-tight sm:mt-8 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-5 max-w-xl text-base leading-7 sm:mt-7 sm:text-lg sm:leading-8">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <img
            className="h-[320px] w-full rounded-[var(--radius-app)] object-cover shadow-[var(--shadow-soft)] sm:h-[460px] lg:h-[calc(100svh-160px)] lg:min-h-[560px]"
            src={facilities.image}
            alt={facilities.imageAlt}
          />
        </div>
      </div>
    </section>
  )
}

function NearbyPlacesSection({ nearbyPlaces }) {
  return (
    <section className="app-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.05fr] lg:gap-12">
        <div>
          <p className="section-eyebrow mb-5">{nearbyPlaces.eyebrow}</p>
          <h2 className="heading-display max-w-3xl text-[clamp(42px,5vw,72px)] font-semibold leading-[1.02]">
            {nearbyPlaces.title}
          </h2>
          <p className="body-copy mt-6 max-w-xl text-lg leading-8">
            {nearbyPlaces.description}
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {nearbyPlaces.items.map((place) => (
              <article
                className="flex items-center justify-between gap-5 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4"
                key={place.name}
              >
                <h3 className="font-semibold text-[var(--color-primary-dark)]">{place.name}</h3>
                <p className="meta-text whitespace-nowrap text-[var(--color-primary-dark)]">{place.distance}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[var(--radius-app)] shadow-[var(--shadow-soft)]">
          <img
            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
            src={nearbyPlaces.image}
            alt={nearbyPlaces.imageAlt}
          />
        </div>
      </div>
    </section>
  )
}

function ElegantRoomsGallerySection({ gallery }) {
  const renderTitle = () => {
    if (!gallery.highlight || !gallery.title.includes(gallery.highlight)) {
      return gallery.title
    }

    const [before, after] = gallery.title.split(gallery.highlight)

    return (
      <>
        {before}
        <span className="italic text-[var(--color-primary)]">{gallery.highlight}</span>
        {after}
      </>
    )
  }

  const imageSizes = [
    'h-[240px] w-[220px] sm:h-[280px] sm:w-[260px]',
    'h-[310px] w-[230px] sm:h-[360px] sm:w-[300px]',
    'h-[230px] w-[220px] sm:h-[270px] sm:w-[280px]',
    'h-[190px] w-[220px] sm:h-[230px] sm:w-[270px]',
    'h-[250px] w-[220px] sm:h-[300px] sm:w-[280px]',
    'h-[210px] w-[220px] sm:h-[250px] sm:w-[270px]',
    'h-[260px] w-[220px] sm:h-[310px] sm:w-[280px]',
  ]

  return (
    <section className="soft-section overflow-hidden px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="heading-display text-[clamp(42px,6vw,76px)] font-semibold leading-none">
          {renderTitle()}
        </h2>
        <p className="body-copy mx-auto mt-5 max-w-xl leading-7">{gallery.description}</p>
        <Button className="mx-auto mt-7" to={gallery.button.href}>
          {gallery.button.label}
          <FaArrowRight aria-hidden="true" />
        </Button>
      </div>

      <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden py-8 sm:mt-12 lg:mt-12 lg:py-10">
        <div
          className="flex w-max items-center gap-4 will-change-transform sm:gap-6"
          style={{ animation: 'roomsMarquee 34s linear infinite' }}
        >
          {[...gallery.images, ...gallery.images].map((image, index) => (
            <div
              className={`shrink-0 ${imageSizes[index % imageSizes.length]}`}
              key={`${image.alt}-${index}`}
            >
              <img
                className="h-full w-full rounded-[var(--radius-app)] object-cover shadow-[var(--shadow-soft)]"
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

function FeaturedStaySection({ stay }) {
  return (
    <section className="app-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[1.35fr_0.75fr]">
        <img className="h-[320px] w-full rounded-[var(--radius-app)] object-cover sm:h-[420px] lg:min-h-[460px]" src={stay.image} alt={stay.imageAlt} />
        <div className="grid content-end rounded-[var(--radius-app)] bg-[var(--color-primary-dark)] p-8 text-[var(--color-white)] lg:p-14">
          <p className="banner-eyebrow mb-5">{stay.eyebrow}</p>
          <h2 className="heading-display text-[clamp(36px,10vw,48px)] font-semibold leading-none text-[var(--color-white)]">{stay.title}</h2>
          <p className="mt-5 max-w-sm text-lg leading-8 text-white/75">{stay.description}</p>
          <Button className="mt-8 w-fit border border-[var(--color-primary)] hover:border-[var(--color-primary)]" to={stay.button.href}>{stay.button.label}</Button>
        </div>
      </div>
    </section>
  )
}

function ValuesSection({ values }) {
  const icons = [FaRegHandshake, FaSpa, FaLeaf]

  return (
    <section className="soft-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[var(--radius-app)]">
        <img className="h-[500px] w-full object-cover sm:h-[560px]" src={values.image} alt={values.imageAlt} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hero-overlay-start),var(--color-hero-overlay-end))]" />
        <div className="absolute left-5 right-5 top-8 max-w-2xl text-[var(--color-white)] sm:left-6 sm:right-auto lg:left-10 lg:top-12">
          <p className="banner-eyebrow mb-5">{values.eyebrow}</p>
          <h2 className="banner-title max-w-2xl text-[clamp(42px,5vw,70px)]">{values.title}</h2>
          <p className="banner-copy mt-5 max-w-xl">{values.description}</p>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-20 grid max-w-4xl gap-4 px-4 sm:-mt-28 sm:grid-cols-3 sm:gap-5 sm:px-6">
        {values.items.map((item, index) => {
          const Icon = icons[index] ?? FaSeedling
          return (
            <article className="soft-card grid min-h-[150px] rounded-[var(--radius-app)] border border-[var(--color-border)] p-5 shadow-[var(--shadow-soft)] sm:min-h-[190px] sm:p-6" key={item}>
              <h3 className="heading-display text-2xl font-semibold">{item}</h3>
              <Icon className="mt-auto h-8 w-8 text-[var(--color-primary-dark)]" aria-hidden="true" />
            </article>
          )
        })}
      </div>
    </section>
  )
}

function OffersSection({ offers }) {
  return (
    <section className="relative overflow-hidden px-4 py-12 text-center text-[var(--color-white)] sm:px-6 lg:py-12">
      <img className="absolute inset-0 h-full w-full object-cover" src={offers.image} alt={offers.imageAlt} />
      <div className="absolute inset-0 bg-[var(--color-overlay-strong)]" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="banner-eyebrow mb-5">{offers.eyebrow}</p>
        <h2 className="heading-display text-[clamp(42px,6vw,76px)] font-semibold leading-[1.02] text-[var(--color-white)]">{offers.title}</h2>
        <p className="banner-copy mx-auto mt-6 max-w-2xl">{offers.description}</p>
        <Button className="mt-8" to={offers.button.href}>{offers.button.label}</Button>
      </div>
    </section>
  )
}

function ExperiencesSection({ experiences }) {
  return (
    <section className="app-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow mb-5">{experiences.eyebrow}</p>
        <h2 className="heading-display max-w-5xl text-[clamp(38px,11vw,82px)] font-semibold leading-[1.02]">{experiences.title}</h2>
        <p className="body-copy mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">{experiences.description}</p>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.75fr]">
          <Link className="group relative min-h-[360px] overflow-hidden rounded-[var(--radius-app)] sm:min-h-[460px] lg:min-h-[520px]" to={experiences.primary.href}>
            <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={experiences.primary.image} alt={experiences.primary.imageAlt} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,var(--color-overlay-strong))]" />
            <div className="absolute bottom-6 left-5 right-5 max-w-xl text-[var(--color-white)] sm:bottom-8 sm:left-8 sm:right-auto">
              <h3 className="banner-title text-[clamp(40px,5vw,64px)]">{experiences.primary.title}</h3>
              <span className="primary-button mt-6">Book Now</span>
            </div>
          </Link>

          <div className="grid gap-4">
            {experiences.items.map((item) => (
              <Link className="group relative min-h-[180px] overflow-hidden rounded-[var(--radius-app)] sm:min-h-[220px] lg:min-h-[160px]" to={item.href} key={item.title}>
                <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt={item.imageAlt} />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,var(--color-overlay-strong))]" />
                <h3 className="heading-display absolute bottom-5 right-5 flex items-center gap-3 text-3xl text-[var(--color-white)] sm:bottom-6 sm:right-6 sm:text-4xl">
                  {item.title}
                  <FaArrowRight className="h-5 w-5" aria-hidden="true" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCtaSection({ cta }) {
  return (
    <section className="soft-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow mb-5">{cta.eyebrow}</p>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <h2 className="heading-display text-[clamp(74px,13vw,180px)] font-semibold leading-[0.82]">Escape</h2>
          <Button className="mb-4 w-fit" to={cta.button.href}>
            {cta.button.label}
            <FaArrowRight aria-hidden="true" />
          </Button>
          <h2 className="heading-display text-[clamp(74px,13vw,180px)] font-semibold leading-[0.82] lg:text-right">Reality</h2>
        </div>
        <p className="body-copy mt-6 max-w-2xl text-lg leading-8">{cta.description}</p>
        <img className="mt-10 h-[420px] w-full rounded-[var(--radius-app)] object-cover" src={cta.image} alt={cta.imageAlt} />
      </div>
    </section>
  )
}

export {
  ElegantRoomsGallerySection,
  ExperiencesSection,
  FacilitiesScrollSection,
  FeaturedStaySection,
  FinalCtaSection,
  NearbyPlacesSection,
  OffersSection,
  RoomsPreviewSection,
  ValuesSection,
  WellnessSection,
}
