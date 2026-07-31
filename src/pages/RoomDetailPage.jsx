import {
  FaBed,
  FaChampagneGlasses,
  FaHouse,
  FaPersonSwimming,
  FaRegSnowflake,
  FaUtensils,
} from 'react-icons/fa6'
import { Link, Navigate, useParams } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import { roomDetailsData } from '../data/rooms.data'

const amenityIcons = [FaBed, FaRegSnowflake, FaPersonSwimming, FaUtensils, FaChampagneGlasses, FaHouse]

function RoomDetailPage() {
  const { slug } = useParams()
  const room = roomDetailsData.rooms.find((item) => item.slug === slug)
  const similarRooms = roomDetailsData.rooms.filter((item) => item.slug !== slug).slice(0, 2)

  if (!room) {
    return <Navigate to="/about" replace />
  }

  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="sticky top-0 z-50">
          <SiteHeader isSticky />
        </div>

        <article className="px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="section-eyebrow mb-5">({roomDetailsData.eyebrow})</p>
              <h1 className="heading-display text-[clamp(42px,6vw,76px)] font-semibold leading-none">
                {room.title}
              </h1>
              <p className="meta-text mt-4 text-[var(--color-primary-dark)]">{room.subtitle}</p>
            </div>

            <img
              className="mt-10 h-[340px] w-full rounded-[var(--radius-app)] object-cover sm:h-[520px]"
              src={room.image}
              alt={room.imageAlt}
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
              <div>
                <h2 className="heading-display text-2xl font-semibold">{roomDetailsData.overviewTitle}</h2>
                <p className="body-copy mt-4 text-base leading-7">{room.overview}</p>

                <h2 className="heading-display mt-10 text-2xl font-semibold">Room Facilities</h2>
                <p className="body-copy mt-4 text-base leading-7">{room.details}</p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {roomDetailsData.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[index] ?? FaHouse

                    return (
                      <div className="rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-secondary-light)] p-5" key={amenity}>
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-primary-dark)] text-sm text-[var(--color-white)]">
                          <Icon aria-hidden="true" />
                        </div>
                        <p className="mt-4 text-sm font-semibold text-[var(--color-black)]">{amenity}</p>
                      </div>
                    )
                  })}
                </div>

                <h2 className="heading-display mt-10 text-2xl font-semibold">{roomDetailsData.policiesTitle}</h2>
                <ul className="body-copy mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
                  {roomDetailsData.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>

                <h2 className="heading-display mt-10 text-2xl font-semibold">{roomDetailsData.conclusionTitle}</h2>
                <p className="body-copy mt-4 text-base leading-7">{room.conclusion}</p>
              </div>

              <aside className="rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-secondary-light)] p-6 lg:sticky lg:top-28">
                <h2 className="heading-display text-2xl font-semibold">More Information</h2>
                <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-[var(--color-muted)]">
                  <p>{room.size}</p>
                  <p>{room.bed}</p>
                  <p>{room.subtitle}</p>
                  <p>{room.bathroom}</p>
                </div>

                <h3 className="heading-display mt-8 text-xl font-semibold">More Information</h3>
                <p className="body-copy mt-3 text-sm leading-6">{room.price}</p>

                <Link className="primary-button mt-7 w-full rounded-full" to="/#book">
                  {roomDetailsData.bookLabel}
                </Link>
              </aside>
            </div>

            <section className="mt-20">
              <p className="section-eyebrow mb-4">(Similar Rooms & Suites)</p>
              <h2 className="heading-display text-[clamp(34px,5vw,54px)] font-semibold leading-none">
                Explore Similar Rooms and Suites
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {similarRooms.map((similarRoom) => (
                  <Link className="group block" to={`/rooms/${similarRoom.slug}`} key={similarRoom.slug}>
                    <div className="relative overflow-hidden rounded-[var(--radius-app)]">
                      <img
                        className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={similarRoom.image}
                        alt={similarRoom.imageAlt}
                      />
                      <span className="absolute bottom-3 right-3 rounded-full bg-[var(--color-secondary-light)] px-3 py-1 text-xs font-semibold text-[var(--color-black)]">
                        {similarRoom.price}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <h3 className="heading-display text-xl font-semibold">{similarRoom.title}</h3>
                      <div className="meta-text flex flex-wrap gap-3 text-[var(--color-muted)]">
                        <span>{similarRoom.size}</span>
                        <span>{similarRoom.bed}</span>
                        <span>{similarRoom.bathroom}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default RoomDetailPage
