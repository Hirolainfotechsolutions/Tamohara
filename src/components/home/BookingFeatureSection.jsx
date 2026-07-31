import { useRef, useState } from 'react'
import { FaArrowUp, FaCalendarDays, FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { siteData } from '../../data/site.data'

const initialValues = {
  arrival: '',
  departure: '',
  people: '',
}

function BookingFeatureSection({ booking }) {
  const [formValues, setFormValues] = useState(initialValues)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const arrivalInputRef = useRef(null)
  const departureInputRef = useRef(null)
  const today = new Date().toISOString().split('T')[0]

  const openDatePicker = (inputRef) => {
    inputRef.current?.showPicker?.()
    inputRef.current?.focus()
  }

  const handleChange = (event) => {
    setIsSubmitted(false)
    setSubmitError('')
    setFormValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('Arrival Date', formValues.arrival)
    formData.append('Departure Date', formValues.departure)
    formData.append('Number of People', formValues.people)
    formData.append('_subject', 'Tamohra Resort room booking request')
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
      setFormValues(initialValues)
    } catch {
      setSubmitError('Sorry, we could not send your request. Please try again or contact us directly.')
    }
  }

  return (
    <section className="app-section px-2 py-2 sm:px-3">
      <div className="relative min-h-[calc(100svh-16px)] overflow-hidden rounded-[var(--radius-app)] bg-[var(--color-primary-dark)] sm:min-h-[calc(100svh-24px)]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={booking.image}
          alt={booking.imageAlt}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,35,29,0.92)_0%,rgba(20,35,29,0.68)_44%,rgba(20,35,29,0.22)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-16px)] max-w-7xl items-center gap-10 px-6 py-16 sm:min-h-[calc(100svh-24px)] sm:px-8 lg:grid-cols-[0.95fr_0.78fr] lg:px-10">
          <div className="max-w-2xl text-[var(--color-white)]">
            <h2 className="heading-display text-[clamp(38px,4.4vw,68px)] font-semibold leading-[1.05] text-[var(--color-white)]">
              {booking.titleLines?.length
                ? booking.titleLines.map((line) => (
                    <span className="block whitespace-nowrap" key={line}>
                      {line}
                    </span>
                  ))
                : booking.title}
            </h2>
            <p className="banner-copy mt-7 max-w-lg font-semibold">
              {booking.description}
            </p>

            <Link
              className="group mt-10 inline-flex min-h-14 items-center gap-0 overflow-hidden rounded-[var(--radius-app)] border border-white/70 text-sm font-bold text-[var(--color-white)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
              to={booking.action.href}
            >
              <span className="px-5">{booking.action.label}</span>
              <span className="grid h-14 w-14 place-items-center bg-[var(--color-white)] text-[var(--color-black)] transition-colors duration-300 group-hover:bg-[var(--color-primary-dark)] group-hover:text-[var(--color-white)]">
                <FaArrowUp className="rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <form
            className="rounded-[var(--radius-app)] bg-[var(--color-secondary-light)] p-8 shadow-[var(--shadow-soft)] sm:p-10"
            onSubmit={handleSubmit}
          >
            <p className="meta-text mb-5 text-[var(--color-black)]">({booking.form.eyebrow})</p>
            <h3 className="heading-display mb-10 text-[clamp(40px,4vw,58px)] font-semibold leading-none">
              {booking.form.title}
            </h3>

            <div className="grid gap-5">
              <label
                className="relative block cursor-pointer"
                onClick={() => openDatePicker(arrivalInputRef)}
              >
                <input
                  className="booking-date-input h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-black)] bg-transparent px-5 pr-12 text-base text-[var(--color-black)] outline-none"
                  min={today}
                  name="arrival"
                  onChange={handleChange}
                  onFocus={() => openDatePicker(arrivalInputRef)}
                  required
                  ref={arrivalInputRef}
                  type="date"
                  value={formValues.arrival}
                />
                <button
                  className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-[var(--color-black)] transition-colors hover:bg-[var(--color-secondary-soft)]"
                  type="button"
                  onClick={() => openDatePicker(arrivalInputRef)}
                  aria-label="Open arrival date calendar"
                >
                  <FaCalendarDays aria-hidden="true" />
                </button>
              </label>

              <label
                className="relative block cursor-pointer"
                onClick={() => openDatePicker(departureInputRef)}
              >
                <input
                  className="booking-date-input h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-black)] bg-transparent px-5 pr-12 text-base text-[var(--color-black)] outline-none"
                  min={formValues.arrival || today}
                  name="departure"
                  onChange={handleChange}
                  onFocus={() => openDatePicker(departureInputRef)}
                  required
                  ref={departureInputRef}
                  type="date"
                  value={formValues.departure}
                />
                <button
                  className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-[var(--color-black)] transition-colors hover:bg-[var(--color-secondary-soft)]"
                  type="button"
                  onClick={() => openDatePicker(departureInputRef)}
                  aria-label="Open departure date calendar"
                >
                  <FaCalendarDays aria-hidden="true" />
                </button>
              </label>

              <label className="relative block">
                <select
                  className="h-14 w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-black)] bg-transparent px-5 pr-12 text-base text-[var(--color-black)] outline-none"
                  name="people"
                  onChange={handleChange}
                  required
                  value={formValues.people}
                >
                  <option value="" disabled>{booking.form.people}</option>
                  {booking.form.peopleOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2" aria-hidden="true" />
              </label>

              <button
                className="h-14 rounded-[var(--radius-app)] bg-[var(--color-primary)] text-base font-semibold text-[var(--color-black)] transition-colors hover:bg-[var(--color-primary-hover)]"
                type="submit"
              >
                {booking.form.submitLabel}
              </button>
            </div>

            {isSubmitted ? (
              <p className="mt-5 text-sm font-semibold text-[var(--color-primary-dark)]">{booking.form.thankYouMessage}</p>
            ) : null}
            {submitError ? (
              <p className="mt-5 text-sm font-semibold text-[var(--color-primary-dark)]">{submitError}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingFeatureSection
