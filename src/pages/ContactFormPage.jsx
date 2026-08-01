import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import AboutHeroBanner from '../components/about/AboutHeroBanner'
import SiteFooter from '../components/layout/SiteFooter'
import StickySiteHeader from '../components/layout/StickySiteHeader'
import { siteData } from '../data/site.data'

const initialFormValues = {
  fullName: '',
  email: '',
  phone: '',
  destination: '',
  travelers: '',
  budget: '',
  notes: '',
}

function ContactInput({ label, ...props }) {
  return (
    <label className="grid gap-3">
      <span className="meta-text text-[var(--color-muted)]">{label}</span>
      <input
        className="h-[58px] rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 text-base text-[var(--color-black)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary-dark)]"
        {...props}
      />
    </label>
  )
}

function ContactSelect({ children, label, ...props }) {
  return (
    <label className="grid gap-3">
      <span className="meta-text text-[var(--color-muted)]">{label}</span>
      <div className="relative">
        <select
          className="h-[58px] w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 text-base text-[var(--color-black)] outline-none transition-colors focus:border-[var(--color-primary-dark)]"
          {...props}
        >
          {children}
        </select>
        <FaChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-black)]" aria-hidden="true" />
      </div>
    </label>
  )
}

function ContactFaq({ faq }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-4 pb-20 pt-10 sm:px-6 lg:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-4">{faq.eyebrow}</p>
          <h2 className="heading-display text-[clamp(34px,4.8vw,58px)] font-semibold leading-[1.05]">
            {faq.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article className="border-t border-[var(--color-border)] py-5" key={item.question}>
                <button
                  className="flex w-full items-center justify-between gap-5 text-left"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[var(--color-black)]">{item.question}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-primary-dark)] text-xs text-white">
                    <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="body-copy pt-4 text-sm leading-6">{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactFormPage({ data }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setIsSubmitted(false)
    setSubmitError('')
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('Full Name', formValues.fullName)
    formData.append('Email', formValues.email)
    formData.append('Phone', formValues.phone)
    formData.append('Destination of Interest', formValues.destination)
    formData.append('Number of Travelers', formValues.travelers)
    formData.append('Budget Range', formValues.budget)
    formData.append('Notes', formValues.notes)
    formData.append('_subject', 'Tamohra Resort contact enquiry')
    formData.append('_template', 'table')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteData.email.label}`, {
        body: formData,
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setIsSubmitted(true)
      setFormValues(initialFormValues)
    } catch {
      setSubmitError('Sorry, we could not send your enquiry. Please try again or contact us directly.')
    }
  }

  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <StickySiteHeader />

        <div className="p-2 sm:p-3">
          <AboutHeroBanner hero={data.hero} />
        </div>

        <section className="px-5 py-16 sm:px-8 lg:py-24" id="contact-form">
          <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.78fr_1fr] lg:gap-24">
            <div className="lg:pt-4">
              <p className="section-eyebrow mb-6">{data.eyebrow}</p>
              <h1 className="heading-display max-w-xl text-[clamp(52px,6vw,86px)] font-semibold leading-[0.96]">
                {data.title}
              </h1>
              <p className="body-copy mt-8 text-xl leading-8">{data.subtitle}</p>
              <p className="body-copy mt-5 max-w-md text-xl leading-8">{data.description}</p>

              <div className="mt-24">
                <h2 className="heading-display text-4xl font-semibold leading-none">{data.detailsTitle}</h2>
                <div className="mt-10 space-y-9">
                  {data.detailGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="heading-display text-2xl font-semibold leading-none">{group.title}</h3>
                      <div className="body-copy mt-4 space-y-1 text-base leading-7">
                        {group.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form className="grid gap-8 lg:pt-36" onSubmit={handleSubmit}>
              <ContactInput label="Full Name*" name="fullName" onChange={handleChange} placeholder="John" required value={formValues.fullName} />
              <ContactInput label="Email Address*" name="email" onChange={handleChange} placeholder="e.g. john.smith@email.com" required type="email" value={formValues.email} />
              <ContactInput label="Phone Number*" name="phone" onChange={handleChange} placeholder="e.g. +91 98765 43210" required type="tel" value={formValues.phone} />

              <ContactSelect label="Destination of Interest*" name="destination" onChange={handleChange} required value={formValues.destination}>
                <option value="" disabled>Select Destination</option>
                {data.form.destinations.map((destination) => (
                  <option key={destination} value={destination}>{destination}</option>
                ))}
              </ContactSelect>

              <ContactInput label="Number of Travelers*" name="travelers" onChange={handleChange} placeholder="e.g. 2 Adults, 1 Child" required value={formValues.travelers} />

              <ContactSelect label="Budget Range*" name="budget" onChange={handleChange} required value={formValues.budget}>
                <option value="" disabled>Select Budget</option>
                {data.form.budgets.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </ContactSelect>

              <label className="grid gap-2">
                <span className="meta-text text-[var(--color-muted)]">Special Requests / Notes</span>
                <textarea
                  className="min-h-[220px] rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 py-4 text-base text-[var(--color-black)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary-dark)]"
                  name="notes"
                  onChange={handleChange}
                  placeholder="Write a message here..."
                  value={formValues.notes}
                />
              </label>

              <button className="primary-button w-fit rounded-full px-8" type="submit">
                {data.form.submitLabel}
              </button>

              {isSubmitted ? <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{data.form.thankYouMessage}</p> : null}
              {submitError ? <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{submitError}</p> : null}
            </form>
          </div>
        </section>

        <ContactFaq faq={data.faq} />
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default ContactFormPage
