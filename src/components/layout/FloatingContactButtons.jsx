import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa6'
import { siteData } from '../../data/site.data'

function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        className="grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-[var(--color-white)] shadow-[var(--shadow-round)] transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14"
        href={siteData.whatsapp.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${siteData.brandName} Resorts on WhatsApp`}
      >
        <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
      </a>

      <a
        className="grid h-13 w-13 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] shadow-[var(--shadow-round)] transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14"
        href={siteData.phone.href}
        aria-label={`Call ${siteData.brandName} Resorts`}
      >
        <FaPhoneVolume className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  )
}

export default FloatingContactButtons
