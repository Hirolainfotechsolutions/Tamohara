import { useState } from 'react'
import { FaCalendarDays, FaChevronDown } from 'react-icons/fa6'
import { siteData } from '../../data/site.data'

const initialFormValues = {
  room: '',
  arrival: '',
  departure: '',
  visitors: '',
  fullName: '',
  email: '',
  phone: '',
}

function BookingInput({ className = '', icon, ...props }) {
  return (
    <div className={`relative ${className}`}>
      <input
        className="h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-base text-[var(--color-black)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary-dark)]"
        {...props}
      />
      {icon ? <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-black)]">{icon}</span> : null}
    </div>
  )
}

function HomeBookingSection({ booking }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

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
    formData.append('Room Type', formValues.room)
    formData.append('Arrival', formValues.arrival)
    formData.append('Departure', formValues.departure)
    formData.append('Visitors', formValues.visitors)
    formData.append('Full Name', formValues.fullName)
    formData.append('Email', formValues.email)
    formData.append('Phone', formValues.phone)
    formData.append('_subject', 'Tamohra Resort booking request')
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
      setSubmitError('Sorry, we could not send your request. Please try again or contact us directly.')
    }
  }

  return (
    <section id="book" className="soft-section px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="heading-display text-[clamp(64px,9vw,120px)] font-normal uppercase leading-none">
          {booking.title}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-7 text-[var(--color-black)]">
          {booking.description}
        </p>

        <form className="mx-auto mt-16 grid max-w-3xl gap-8 text-left" onSubmit={handleSubmit}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative">
              <select
                className="h-14 w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-base text-[var(--color-black)] outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                name="room"
                onChange={handleChange}
                required
                value={formValues.room}
              >
                <option value="" disabled>{booking.fields.room}</option>
                {booking.roomOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FaChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-black)]" aria-hidden="true" />
            </div>

            <BookingInput
              icon={<FaCalendarDays aria-hidden="true" />}
              name="arrival"
              onChange={handleChange}
              placeholder={booking.fields.arrival}
              required
              type="date"
              value={formValues.arrival}
            />

            <BookingInput
              name="visitors"
              onChange={handleChange}
              placeholder={booking.fields.visitors}
              required
              type="number"
              min="1"
              value={formValues.visitors}
            />

            <BookingInput
              icon={<FaCalendarDays aria-hidden="true" />}
              name="departure"
              onChange={handleChange}
              placeholder={booking.fields.departure}
              required
              type="date"
              value={formValues.departure}
            />
          </div>

          <BookingInput
            name="fullName"
            onChange={handleChange}
            placeholder={booking.fields.fullName}
            required
            type="text"
            value={formValues.fullName}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <BookingInput
              name="email"
              onChange={handleChange}
              placeholder={booking.fields.email}
              required
              type="email"
              value={formValues.email}
            />
            <BookingInput
              name="phone"
              onChange={handleChange}
              placeholder={booking.fields.phone}
              required
              type="tel"
              value={formValues.phone}
            />
          </div>

          <button
            className="h-14 rounded-full bg-[var(--color-black)] px-8 text-center text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-primary-dark)]"
            type="submit"
          >
            {booking.fields.action}
          </button>

          {isSubmitted ? (
            <p className="text-center text-sm font-semibold text-[var(--color-primary-dark)]">
              {booking.thankYouMessage}
            </p>
          ) : null}
          {submitError ? (
            <p className="text-center text-sm font-semibold text-[var(--color-primary-dark)]">
              {submitError}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default HomeBookingSection
