import FaqSection from '../components/home/FaqSection'
import StickySiteHeader from '../components/layout/StickySiteHeader'
import { faqPageData } from '../data/faq.data'

function FaqPage() {
  return (
    <>
      <StickySiteHeader />
      <FaqSection faqs={faqPageData} />
    </>
  )
}

export default FaqPage
