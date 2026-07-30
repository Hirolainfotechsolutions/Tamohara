import AboutCollageSection from '../components/about/AboutCollageSection'
import AboutGuestStoriesSection from '../components/about/AboutGuestStoriesSection'
import AboutHeroBanner from '../components/about/AboutHeroBanner'
import AboutRoomsSuitesSection from '../components/about/AboutRoomsSuitesSection'
import AboutServicesSection from '../components/about/AboutServicesSection'
import AboutStorySection from '../components/about/AboutStorySection'
import { ElegantRoomsGallerySection } from '../components/home/HomeFeatureSections'
import StickySiteHeader from '../components/layout/StickySiteHeader'
import { aboutPageData } from '../data/about.data'

function AboutPage() {
  return (
    <main className="app-section min-h-svh p-2 sm:p-3">
      <StickySiteHeader />
      <AboutHeroBanner hero={aboutPageData.hero} />
      <AboutStorySection story={aboutPageData.story} />
      <AboutServicesSection services={aboutPageData.services} />
      <AboutCollageSection collage={aboutPageData.collage} />
      <ElegantRoomsGallerySection gallery={aboutPageData.elegantRooms} />
      <AboutRoomsSuitesSection roomsSuites={aboutPageData.roomsSuites} />
      <AboutGuestStoriesSection guestStories={aboutPageData.guestStories} />
    </main>
  )
}

export default AboutPage
