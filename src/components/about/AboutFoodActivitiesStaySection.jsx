import {
  FaBed,
  FaCheck,
  FaClock,
  FaFireFlameCurved,
  FaMugSaucer,
  FaPersonHiking,
  FaUtensils,
} from 'react-icons/fa6'
import { useState } from 'react'

const cardIcons = [FaUtensils, FaMugSaucer, FaPersonHiking, FaBed, FaClock]

function AboutFoodActivitiesStaySection({ section }) {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (cardTitle) => {
    setExpandedCards((currentCards) => ({
      ...currentCards,
      [cardTitle]: !currentCards[cardTitle],
    }))
  }

  return (
    <section id="food-activities-stay-details" className="soft-section px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-eyebrow mb-4">{section.eyebrow}</p>
          <h2 className="heading-display mx-auto max-w-4xl text-[clamp(34px,10vw,74px)] font-semibold leading-[1.02]">
              {section.title}
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
            {section.description}
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {section.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? FaFireFlameCurved
            const isWide = index < 3
            const isExpanded = expandedCards[card.title]
            const mobileItems = isExpanded ? card.items : card.items.slice(0, 5)
            const hasMoreItems = card.items.length > 5

            return (
              <article
                className={`flex h-full flex-col rounded-[var(--radius-app)] border border-white/10 bg-[var(--color-primary-dark)] p-5 text-white shadow-[var(--shadow-round)] sm:p-6 ${
                  isWide ? 'xl:col-span-2' : 'xl:col-span-3'
                }`}
                key={card.title}
              >
                <div className="grid min-h-[168px] grid-rows-[auto_1fr] gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="heading-display max-w-[12ch] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {card.title}
                    </h3>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)]">
                      <Icon aria-hidden="true" />
                    </div>
                  </div>
                  <p className="max-w-md self-end text-sm leading-6 text-white/72">{card.note}</p>
                </div>

                <ul className="mt-6 grid gap-2.5 text-sm font-semibold leading-6 text-white/90 sm:hidden">
                  {mobileItems.map((item) => (
                    <li className="flex min-h-11 items-center gap-3 rounded-[var(--radius-app)] border border-white/10 bg-white/[0.06] px-3 py-2.5" key={item}>
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[10px] text-[var(--color-primary-dark)]">
                        <FaCheck aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 hidden gap-2.5 text-sm font-semibold leading-6 text-white/90 sm:grid sm:grid-cols-2">
                  {card.items.map((item) => (
                    <li className="flex min-h-11 items-center gap-3 rounded-[var(--radius-app)] border border-white/10 bg-white/[0.06] px-3 py-2.5" key={item}>
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[10px] text-[var(--color-primary-dark)]">
                        <FaCheck aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {hasMoreItems ? (
                  <button
                    className="mt-4 inline-flex w-fit items-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-primary-dark)] transition-colors hover:bg-white sm:hidden"
                    type="button"
                    onClick={() => toggleCard(card.title)}
                  >
                    {isExpanded ? 'Show Less' : 'Load More'}
                  </button>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutFoodActivitiesStaySection
