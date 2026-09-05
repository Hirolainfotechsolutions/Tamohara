import { useState } from 'react'
import { FaCalendarDays, FaCirclePlay, FaPhone, FaUsers } from 'react-icons/fa6'
import Button from '../ui/Button'
import SiteHeader from '../layout/SiteHeader'
import { siteData } from '../../data/site.data'

const getDateInputValue = (date) => date.toISOString().split('T')[0]

const getInitialBookingDates = () => {
  const checkIn = new Date()
  const checkOut = new Date(checkIn)
  checkOut.setDate(checkIn.getDate() + 1)

  return {
    checkIn: getDateInputValue(checkIn),
    checkOut: getDateInputValue(checkOut),
  }
}

function BookingField({ children, icon: Icon, label }) {
  return (
    <div className="flex min-w-0 items-center gap-3 border-b border-[var(--color-border)] px-5 py-4 sm:border-r lg:border-b-0">
      <Icon className="h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
      <div className="min-w-0">
        <p className="meta-text text-[var(--color-muted)]">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}

function AboutHeroBanner({ hero, showBooking = true }) {
  const initialDates = getInitialBookingDates()
  const [formValues, setFormValues] = useState({
    checkIn: initialDates.checkIn,
    checkOut: initialDates.checkOut,
    guests: hero.booking.guests,
    mobile: '',
  })
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
    formData.append('Check In', formValues.checkIn)
    formData.append('Check Out', formValues.checkOut)
    formData.append('Guests', formValues.guests)
    formData.append('Mobile Number', formValues.mobile)
    formData.append('_subject', 'Tamohara Resort availability request')
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
    } catch {
      setSubmitError('Sorry, we could not send your request. Please try again or contact us directly.')
    }
  }

  return (
    <section className={`relative ${showBooking ? 'pb-16' : ''}`}>
      <div className={`relative overflow-hidden rounded-[var(--radius-app)] bg-[var(--color-primary-dark)] text-[var(--color-white)] ${showBooking ? 'min-h-[calc(100svh-92px)]' : 'min-h-[calc(100svh-16px)] sm:min-h-[calc(100svh-24px)]'}`}>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={hero.backgroundImage}
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hero-overlay-start)_0%,var(--color-hero-overlay-mid)_46%,var(--color-hero-overlay-end)_100%)]" />

        <SiteHeader />

        <div className={`relative z-10 mx-auto grid max-w-7xl content-center px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36 ${showBooking ? 'min-h-[calc(100svh-240px)]' : 'min-h-[calc(100svh-160px)]'}`}>
          <div className="max-w-2xl">
            <p className="banner-eyebrow mb-6">
              {hero.eyebrow}
            </p>

            <h1 className="banner-title max-w-xl text-[clamp(42px,5vw,72px)]">
              {hero.title}
            </h1>

            <p className="banner-copy mt-6 max-w-xl">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <Button to={hero.primaryAction.href}>{hero.primaryAction.label}</Button>

              <a
              className="nav-text inline-flex items-center gap-3 text-[var(--color-white)] transition-opacity hover:opacity-75"
                href={hero.secondaryAction.href}
              >
                {hero.secondaryAction.label}
                <FaCirclePlay className="h-8 w-8 text-[var(--color-primary)]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showBooking ? (
        <form
          className="relative z-20 mx-4 -mt-8 rounded-[var(--radius-app)] bg-[var(--color-white)] shadow-[var(--shadow-soft)] sm:mx-auto sm:-mt-10 sm:max-w-5xl"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            <BookingField icon={FaCalendarDays} label="Check In">
              <input
                className="mt-1 w-full bg-transparent text-sm font-bold text-[var(--color-primary-dark)] outline-none"
                name="checkIn"
                onChange={handleChange}
                required
                type="date"
                value={formValues.checkIn}
              />
            </BookingField>

            <BookingField icon={FaCalendarDays} label="Check Out">
              <input
                className="mt-1 w-full bg-transparent text-sm font-bold text-[var(--color-primary-dark)] outline-none"
                name="checkOut"
                onChange={handleChange}
                required
                type="date"
                value={formValues.checkOut}
              />
            </BookingField>

            <BookingField icon={FaUsers} label="Guests">
              <select
                className="mt-1 w-full bg-transparent text-sm font-bold text-[var(--color-primary-dark)] outline-none"
                name="guests"
                onChange={handleChange}
                value={formValues.guests}
              >
                {hero.booking.guestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </BookingField>

            <BookingField icon={FaPhone} label="Mobile">
              <input
                className="mt-1 w-full bg-transparent text-sm font-bold text-[var(--color-primary-dark)] outline-none"
                name="mobile"
                onChange={handleChange}
                placeholder="Mobile number"
                required
                type="tel"
                value={formValues.mobile}
              />
            </BookingField>

            <div className="grid px-5 py-4">
              <Button className="w-full whitespace-nowrap" type="submit">
                {hero.booking.actionLabel}
              </Button>
            </div>
          </div>
          {isSubmitted ? (
            <p className="border-t border-[var(--color-border)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-primary-dark)]">
              {hero.booking.thankYouMessage}
            </p>
          ) : null}
          {submitError ? (
            <p className="border-t border-[var(--color-border)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-primary-dark)]">
              {submitError}
            </p>
          ) : null}
        </form>
      ) : null}
    </section>
  )
}

export default AboutHeroBanner
