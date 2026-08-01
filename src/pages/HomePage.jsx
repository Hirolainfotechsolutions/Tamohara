import AboutResortSection from "../components/home/AboutResortSection";
import AmenitiesSection from "../components/home/AmenitiesSection";
import AboutRoomsSuitesSection from "../components/about/AboutRoomsSuitesSection";
import ContactPeaceBanner from "../components/contact/ContactPeaceBanner";
import FaqSection from "../components/home/FaqSection";
import BookingFeatureSection from "../components/home/BookingFeatureSection";
import HomeBookingSection from "../components/home/HomeBookingSection";
import SiteFooter from "../components/layout/SiteFooter";
import {
  ElegantRoomsGallerySection,
  ExperiencesSection,
  FacilitiesScrollSection,
  FeaturedStaySection,
  ValuesSection,
  WellnessSection,
} from "../components/home/HomeFeatureSections";
import StickySiteHeader from "../components/layout/StickySiteHeader";
import { aboutPageData } from "../data/about.data";
import { homePageData } from "../data/home.data";

const homeFaqData = {
  ...homePageData.faqs,
  initialVisibleCount: 10,
  items: homePageData.faqs.items.slice(0, 10),
};

function HomePage() {
  return (
    <main className="app-section min-h-svh">
      <StickySiteHeader />
      <div className="relative z-10 bg-[var(--color-surface)]">
        {/* Previous home hero is hidden for now. Restore HeroBanner here if needed. */}
        <ContactPeaceBanner showHeader />
        <AboutResortSection about={homePageData.aboutResort} />
        <WellnessSection wellness={homePageData.wellness} />

        <AboutRoomsSuitesSection roomsSuites={aboutPageData.roomsSuites} />

        <FacilitiesScrollSection facilities={homePageData.facilitiesScroll} />
        

        <ExperiencesSection experiences={homePageData.experiences} />
         <AmenitiesSection amenities={homePageData.amenities} />
        <FeaturedStaySection stay={homePageData.featuredStay} />
        <ValuesSection values={homePageData.values} />
        <ElegantRoomsGallerySection gallery={homePageData.elegantRooms} />
        <BookingFeatureSection booking={homePageData.bookingFeature} />
        <FaqSection faqs={homeFaqData} />
        <HomeBookingSection booking={homePageData.bookingRequest} />
      </div>
      <SiteFooter reveal />
      {/* <FinalCtaSection cta={homePageData.finalCta} /> */}
    </main>
  );
}

export default HomePage;
