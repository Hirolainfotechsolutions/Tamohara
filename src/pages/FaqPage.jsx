import FaqSection from '../components/home/FaqSection'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import { faqPageData } from '../data/faq.data'

function FaqPage() {
  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="sticky top-0 z-50">
          <SiteHeader isSticky />
        </div>
        <FaqSection faqs={faqPageData} />
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default FaqPage
