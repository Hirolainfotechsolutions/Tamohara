import { useState } from 'react'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa6'
import Button from '../ui/Button'

function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(faqs.initialVisibleCount)
  const visibleFaqs = faqs.items.slice(0, visibleCount)

  return (
    <section className="app-section px-5 py-16 text-[var(--color-black)] sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="section-eyebrow mb-5">{faqs.eyebrow}</p>
          <h2 className="heading-display text-[clamp(42px,5.8vw,76px)] font-semibold leading-[0.98]">
            {faqs.title}
          </h2>
          <p className="body-copy mt-7 max-w-[430px] text-lg leading-7">
            {faqs.description}
          </p>
          <Button className="mt-8 rounded-full" to={faqs.button.href}>
            {faqs.button.label}
            <FaArrowRight aria-hidden="true" />
          </Button>
        </div>

        <div>
          <div className="space-y-3">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <article
                  className={`overflow-hidden rounded-[var(--radius-app)] border border-[var(--color-border)] transition-colors duration-300 ${
                    isOpen
                      ? 'bg-[var(--color-primary-dark)] text-[var(--color-white)]'
                      : 'soft-card text-[var(--color-black)]'
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-7 py-7 text-left sm:px-8 sm:py-8"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold sm:text-xl">
                      {index + 1}. {faq.question}
                    </span>
                    <FaChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`max-w-[680px] px-7 pb-8 text-base leading-7 sm:px-8 ${
                          isOpen ? 'text-white/88' : 'body-copy'
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {visibleCount < faqs.items.length ? (
            <div className="mt-10 text-center">
              <Button
                className="rounded-full"
                onClick={() => setVisibleCount((count) => Math.min(count + faqs.loadMoreCount, faqs.items.length))}
              >
                Load More
                <FaArrowRight aria-hidden="true" />
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
