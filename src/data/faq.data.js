import { homePageData } from './home.data'

export const faqPageData = {
  ...homePageData.faqs,
  title: 'FAQs',
  description:
    'Quick answers about Tamohra Resort, Sakleshpur stays, room sharing, pricing, meals, amenities, and availability.',
  initialVisibleCount: homePageData.faqs.items.length,
}
