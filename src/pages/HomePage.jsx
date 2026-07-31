import AboutResortSection from '../components/home/AboutResortSection'
import AmenitiesSection from '../components/home/AmenitiesSection'
import FaqSection from '../components/home/FaqSection'
import HeroBanner from '../components/home/HeroBanner'
import HomeBookingSection from '../components/home/HomeBookingSection'
import SiteFooter from '../components/layout/SiteFooter'
import {
  ElegantRoomsGallerySection,
  ExperiencesSection,
  FeaturedStaySection,
  OffersSection,
  RoomsPreviewSection,
  ValuesSection,
  WellnessSection,
} from '../components/home/HomeFeatureSections'
import StickySiteHeader from '../components/layout/StickySiteHeader'
import { homePageData } from '../data/home.data'

const homeFaqData = {
  ...homePageData.faqs,
  initialVisibleCount: 10,
  items: homePageData.faqs.items.slice(0, 10),
}

function HomePage() {
  return (
    <main className="app-section min-h-svh">
      <StickySiteHeader />
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="p-2 sm:p-3">
          <HeroBanner hero={homePageData.hero} />
        </div>
        <AboutResortSection about={homePageData.aboutResort} />
        <RoomsPreviewSection rooms={homePageData.roomsPreview} />
        <ElegantRoomsGallerySection gallery={homePageData.elegantRooms} />
        <AmenitiesSection amenities={homePageData.amenities} />
        <WellnessSection wellness={homePageData.wellness} />
        <FeaturedStaySection stay={homePageData.featuredStay} />
        <ValuesSection values={homePageData.values} />
        <OffersSection offers={homePageData.offers} />
        <ExperiencesSection experiences={homePageData.experiences} />
        <FaqSection faqs={homeFaqData} />
        <HomeBookingSection booking={homePageData.bookingRequest} />
      </div>
      <SiteFooter reveal />
      {/* <FinalCtaSection cta={homePageData.finalCta} /> */}
    </main>
  )
}

export default HomePage
