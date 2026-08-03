import {
  FaBath,
  FaBed,
  FaUsers,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import FaqSection from '../components/home/FaqSection'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import StayFacilitiesSection from '../components/stay/StayFacilitiesSection'
import { homePageData } from '../data/home.data'
import { stayPageData } from '../data/stay.data'

const detailIcons = {
  bathroom: FaBath,
  bed: FaBed,
  size: FaUsers,
}

const stayFaqData = {
  ...homePageData.faqs,
  initialVisibleCount: 10,
  items: homePageData.faqs.items.slice(0, 10),
}

function RoomInfoBox({ room }) {
  const details = [
    { key: 'size', value: room.size },
    { key: 'bed', value: room.bed },
    { key: 'bathroom', value: room.bathroom },
  ]

  return (
    <div className="grid min-w-[116px] border border-[var(--color-primary-dark)] bg-[var(--color-surface)] text-[var(--color-primary-dark)]">
      {details.map((detail) => {
        const Icon = detailIcons[detail.key]

        return (
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3 py-2 last:border-b-0" key={detail.key}>
            <Icon className="h-3.5 w-3.5 text-[var(--color-primary-dark)]" aria-hidden="true" />
            <span className="text-[11px] font-semibold leading-none">{detail.value}</span>
          </div>
        )
      })}
    </div>
  )
}

function StayPage() {
  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="sticky top-0 z-50">
          <SiteHeader isSticky />
        </div>

        <section className="px-5 py-12 sm:px-8 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl sm:mb-12">
              <p className="section-eyebrow mb-4">{stayPageData.eyebrow}</p>
              <h1 className="heading-display text-[clamp(42px,12vw,88px)] font-semibold leading-[1]">
                {stayPageData.title}
              </h1>
              <p className="body-copy mt-5 max-w-xl text-base leading-8">
                {stayPageData.description}
              </p>
            </div>

            <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
              {stayPageData.rooms.map((room) => (
                <article className="group" key={room.slug}>
                  <Link className="block overflow-hidden" to={`/rooms/${room.slug}`}>
                    <img
                      className="h-[260px] w-full rounded-[var(--radius-app)] object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[340px] sm:rounded-none"
                      src={room.image}
                      alt={room.imageAlt}
                    />
                  </Link>

                  <div className="relative -mt-5 ml-auto grid w-[calc(100%-28px)] gap-5 bg-[var(--color-surface)] pt-5 sm:w-[calc(100%-68px)] sm:grid-cols-[1fr_auto]">
                    <div>
                      <h2 className="heading-display text-3xl font-semibold leading-none">
                        {room.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        From <span className="text-[var(--color-primary-dark)]">{room.price}</span>
                      </p>
                      <Link
                        className="meta-text mt-5 inline-flex border-b border-[var(--color-primary-dark)] pb-1 text-[var(--color-primary-dark)] transition-colors hover:text-[var(--color-primary)]"
                        to={`/rooms/${room.slug}`}
                      >
                        {stayPageData.detailsLabel}
                      </Link>
                    </div>

                    <RoomInfoBox room={room} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <StayFacilitiesSection facilities={stayPageData.facilities} />
        <FaqSection faqs={stayFaqData} />
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default StayPage
