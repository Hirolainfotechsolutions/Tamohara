import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { siteData } from '../../data/site.data'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

function AboutVisitSection() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setStatus('')
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('Name', values.name)
    formData.append('Email', values.email)
    formData.append('Message', values.message)
    formData.append('_subject', 'Tamohra Resort about page message')
    formData.append('_template', 'table')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteData.email.label}`, {
        body: formData,
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setValues(initialValues)
      setStatus('Thank you. we will contact you in a while')
    } catch {
      setStatus('Sorry, we could not send your message. Please contact us directly.')
    }
  }

  return (
    <section className="app-section px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid w-[92vw] max-w-none gap-16 lg:grid-cols-[0.9fr_1fr] lg:gap-24">
        <div>
          <div className="space-y-1 text-base leading-7 text-[var(--color-primary-dark)] sm:text-lg">
            <p>
              Email: <a className="font-semibold" href={siteData.email.href}>{siteData.email.label}</a>
            </p>
            <p>
              Phone/WhatsApp: <a className="font-semibold" href={siteData.phone.href}>{siteData.phone.label}</a>
            </p>
            <p>
              Instagram: <span className="font-semibold">@tamohraresort</span>
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-display text-3xl font-semibold leading-none">Come visit us</h2>
            <p className="body-copy mt-3 max-w-xl text-lg leading-7">
              Looking to book directly or ask a question? We are happy to help, and always just one message away.
            </p>
          </div>

          <form className="mt-10 grid max-w-2xl gap-5" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-base font-semibold text-[var(--color-primary-dark)]">Name</span>
              <input
                className="h-12 rounded-sm border border-transparent bg-white px-4 text-base outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-base font-semibold text-[var(--color-primary-dark)]">Email Address</span>
              <input
                className="h-12 rounded-sm border border-transparent bg-white px-4 text-base outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                name="email"
                onChange={handleChange}
                required
                type="email"
                value={values.email}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-base font-semibold text-[var(--color-primary-dark)]">Message</span>
              <textarea
                className="min-h-20 rounded-sm border border-transparent bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                name="message"
                onChange={handleChange}
                required
                value={values.message}
              />
            </label>

            <button
              className="inline-flex w-fit items-center gap-4 rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-bold text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
              type="submit"
            >
              Send Message
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[var(--color-primary)]">
                <FaArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>

            {status ? <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{status}</p> : null}
          </form>
        </div>

        <div>
          <h2 className="heading-display text-3xl font-semibold leading-none">Where You&apos;ll Find Us</h2>
          <p className="body-copy mt-3 text-lg leading-7">
            Nestled in the mist-clad countryside of Sakleshpur, Karnataka.
          </p>
          <p className="mt-1 text-base font-semibold leading-7 text-[var(--color-primary-dark)]">
            {siteData.address}
          </p>

          <div className="mt-9 overflow-hidden bg-[var(--color-primary-dark)]">
            <iframe
              className="h-[360px] w-full border-0 sm:h-[440px]"
              title="Tamohra Resort location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteData.address)}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutVisitSection
