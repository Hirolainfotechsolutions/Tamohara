import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FaCalendarDays, FaChevronDown, FaXmark } from 'react-icons/fa6'
import { homePageData } from '../../data/home.data'
import { siteData } from '../../data/site.data'

const BookingModalContext = createContext(null)

const initialValues = {
  room: '',
  arrival: '',
  departure: '',
  visitors: '',
  fullName: '',
  email: '',
  phone: '',
  message: '',
}

function BookingModalForm({ closeModal }) {
  const [values, setValues] = useState(initialValues)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const arrivalInputRef = useRef(null)
  const departureInputRef = useRef(null)
  const today = new Date().toISOString().split('T')[0]
  const booking = homePageData.bookingRequest

  const openDatePicker = (inputRef) => {
    inputRef.current?.showPicker?.()
    inputRef.current?.focus()
  }

  const handleChange = (event) => {
    setIsSubmitted(false)
    setSubmitError('')
    setValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('Room Type', values.room)
    formData.append('Arrival Date', values.arrival)
    formData.append('Departure Date', values.departure)
    formData.append('Visitors', values.visitors)
    formData.append('Full Name', values.fullName)
    formData.append('Email', values.email)
    formData.append('Phone', values.phone)
    formData.append('Message', values.message)
    formData.append('_subject', 'Tamohara Resort popup booking request')
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
      setValues(initialValues)
    } catch {
      setSubmitError('Sorry, we could not send your request. Please try again or contact us directly.')
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="relative block">
          <select
            className="h-12 w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 pr-10 text-sm font-semibold text-[var(--color-primary-dark)] outline-none focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
            name="room"
            onChange={handleChange}
            required
            value={values.room}
          >
            <option value="" disabled>{booking.fields.room}</option>
            {booking.roomOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-primary-dark)]" aria-hidden="true" />
        </label>

        <input
          className="h-12 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 text-sm font-semibold text-[var(--color-primary-dark)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
          name="visitors"
          onChange={handleChange}
          placeholder={booking.fields.visitors}
          required
          value={values.visitors}
        />

        <label className="relative block">
          <input
            className="booking-date-input h-12 w-full rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 pr-11 text-sm font-semibold text-[var(--color-primary-dark)] outline-none focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
            min={today}
            name="arrival"
            onChange={handleChange}
            onFocus={() => openDatePicker(arrivalInputRef)}
            required
            ref={arrivalInputRef}
            type="date"
            value={values.arrival}
          />
          <button
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-white"
            type="button"
            onClick={() => openDatePicker(arrivalInputRef)}
            aria-label="Open arrival date calendar"
          >
            <FaCalendarDays aria-hidden="true" />
          </button>
        </label>

        <label className="relative block">
          <input
            className="booking-date-input h-12 w-full rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 pr-11 text-sm font-semibold text-[var(--color-primary-dark)] outline-none focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
            min={values.arrival || today}
            name="departure"
            onChange={handleChange}
            onFocus={() => openDatePicker(departureInputRef)}
            required
            ref={departureInputRef}
            type="date"
            value={values.departure}
          />
          <button
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-white"
            type="button"
            onClick={() => openDatePicker(departureInputRef)}
            aria-label="Open departure date calendar"
          >
            <FaCalendarDays aria-hidden="true" />
          </button>
        </label>
      </div>

      <input
        className="h-12 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 text-sm font-semibold text-[var(--color-primary-dark)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
        name="fullName"
        onChange={handleChange}
        placeholder={booking.fields.fullName}
        required
        value={values.fullName}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="h-12 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 text-sm font-semibold text-[var(--color-primary-dark)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
          name="email"
          onChange={handleChange}
          placeholder={booking.fields.email}
          required
          type="email"
          value={values.email}
        />
        <input
          className="h-12 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 text-sm font-semibold text-[var(--color-primary-dark)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] sm:h-14 sm:text-base"
          name="phone"
          onChange={handleChange}
          placeholder={booking.fields.phone}
          required
          type="tel"
          value={values.phone}
        />
      </div>

      <textarea
        className="min-h-24 resize-none rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-primary-dark)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] sm:text-base"
        name="message"
        onChange={handleChange}
        placeholder="Special requests or notes"
        value={values.message}
      />

      <button className="primary-button w-full rounded-full" type="submit">
        {booking.fields.action}
      </button>

      {isSubmitted ? (
        <div className="rounded-[var(--radius-app)] bg-[var(--color-primary-tint)] px-4 py-3 text-sm font-semibold text-[var(--color-primary-dark)]">
          {booking.thankYouMessage}
          <button className="ml-2 underline" type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      ) : null}
      {submitError ? (
        <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{submitError}</p>
      ) : null}
    </form>
  )
}

function BookingModal({ isOpen, closeModal }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal, isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[var(--color-primary-dark-overlay)] px-4 py-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Booking enquiry form">
      <button className="absolute inset-0 h-full w-full cursor-default" type="button" onClick={closeModal} aria-label="Close booking form" />

      <div className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-[var(--radius-app)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
        <button
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-white"
          type="button"
          onClick={closeModal}
          aria-label="Close booking form"
        >
          <FaXmark aria-hidden="true" />
        </button>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[var(--color-primary-dark)] p-6 text-white sm:p-8 lg:p-10">
            <p className="section-eyebrow text-[var(--color-primary)]">Book Tamohara Resort</p>
            <h2 className="heading-display mt-5 text-[clamp(34px,11vw,64px)] font-semibold leading-[0.98] text-white">
              Plan your Sakleshpur stay
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
              Share your dates, room preference, and contact details. Our team will get back to you shortly with availability.
            </p>
            <div className="mt-8 space-y-3 text-sm font-semibold text-white/90">
              <a className="block transition-colors hover:text-[var(--color-primary)]" href={siteData.phone.href}>{siteData.phone.label}</a>
            </div>
          </div>

          <div className="p-5 pt-16 sm:p-8 sm:pt-18 lg:p-10 lg:pt-16">
            <BookingModalForm closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('Tamohara-booking-popup-shown')
    if (hasShownPopup) return undefined

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('Tamohara-booking-popup-shown', 'true')
      openModal()
    }, 10000)

    return () => window.clearTimeout(timer)
  }, [openModal])

  useEffect(() => {
    const handleBookLinkClick = (event) => {
      const target = event.target.closest?.('a[href$="#book"], a[href="/#book"]')
      if (!target) return

      event.preventDefault()
      openModal()
    }

    document.addEventListener('click', handleBookLinkClick, true)
    return () => document.removeEventListener('click', handleBookLinkClick, true)
  }, [openModal])

  const value = useMemo(() => ({ closeModal, isOpen, openModal }), [closeModal, isOpen, openModal])

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} closeModal={closeModal} />
    </BookingModalContext.Provider>
  )
}
