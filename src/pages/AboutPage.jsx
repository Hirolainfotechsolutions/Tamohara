import AboutCollageSection from "../components/about/AboutCollageSection";
import AboutGuestStoriesSection from "../components/about/AboutGuestStoriesSection";
import AboutHeroBanner from "../components/about/AboutHeroBanner";
import AboutServicesSection from "../components/about/AboutServicesSection";
import AboutStorySection from "../components/about/AboutStorySection";
import { ElegantRoomsGallerySection, RoomsPreviewSection } from "../components/home/HomeFeatureSections";
import SiteFooter from "../components/layout/SiteFooter";
import StickySiteHeader from "../components/layout/StickySiteHeader";
import { aboutPageData } from "../data/about.data";
import { homePageData } from "../data/home.data";

function AboutPage() {
  return (
    <main className="app-section min-h-svh">
      <StickySiteHeader />
      <div className="relative z-10 bg-[var(--color-surface)] p-2 sm:p-3">
        <AboutHeroBanner hero={aboutPageData.hero} />
        <AboutStorySection story={aboutPageData.story} />
        <AboutServicesSection services={aboutPageData.services} />
        <RoomsPreviewSection rooms={homePageData.roomsPreview} />
        <AboutGuestStoriesSection guestStories={aboutPageData.guestStories} />
        <AboutCollageSection collage={aboutPageData.collage} />
        <ElegantRoomsGallerySection gallery={aboutPageData.elegantRooms} />
      </div>
      <SiteFooter reveal />
    </main>
  );
}

export default AboutPage;
