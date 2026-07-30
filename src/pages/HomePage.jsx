import AboutResortSection from '../components/home/AboutResortSection'
import AmenitiesSection from '../components/home/AmenitiesSection'
import FaqSection from '../components/home/FaqSection'
import HeroBanner from '../components/home/HeroBanner'
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

function HomePage() {
  return (
    <main className="app-section min-h-svh">
      <StickySiteHeader />
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
      <FaqSection faqs={homePageData.faqs} />
      {/* <FinalCtaSection cta={homePageData.finalCta} /> */}
    </main>
  )
}

export default HomePage
