import aboutBannerImage from '../assets/images/aboutbanner.webp'
import storyImage from '../assets/images/16.webp'
import collagePoolImage from '../assets/images/aboutbanner.webp'
import collageDiningImage from '../assets/images/22.webp'
import collageExteriorImage from '../assets/images/1.webp'
import collageBridgeImage from '../assets/images/11.webp'
import collageNightPoolImage from '../assets/images/23.webp'
import roomTwoSharingImage from '../assets/images/8.webp'
import roomFourSharingImage from '../assets/images/13.webp'
import roomSixSharingImage from '../assets/images/14.webp'
import roomEightSharingImage from '../assets/images/15.webp'
import roomTwelveSharingImage from '../assets/images/24.webp'
import guestImageOne from '../assets/images/1.webp'
import guestImageTwo from '../assets/images/7.webp'
import guestImageThree from '../assets/images/aboutbanner.webp'
import guestImageFour from '../assets/images/11.webp'
import guestImageFive from '../assets/images/5.webp'
import guestImageSix from '../assets/images/19.webp'
import guestImageSeven from '../assets/images/17.webp'
import guestImageEight from '../assets/images/22.webp'

export const aboutPageData = {
  eyebrow: 'About Tamohra Resort',
  title: 'A Sakleshpur resort framed by mist, mountains, coffee estates, and calm.',
  description:
    'Tamohra Resort sits amidst the mist-clad mountains of the Western Ghats, offering bungalow-inspired architecture, serene pool views, verdant estates, and warm local hospitality.',
  highlights: ['Western Ghats', 'Coffee estates', 'Swimming pool', 'All 3 meals included'],
  hero: {
    eyebrow: 'Sakleshpur, Karnataka',
    title: 'A Stay Among Mist-Clad Mountains',
    description:
      'Discover Tamohra Resort, where luxury living meets thicketed mountain views, emerald coffee slopes, forest trails, waterfalls, and old-school Sakleshpur hospitality.',
    backgroundImage: aboutBannerImage,
    primaryAction: {
      label: 'Explore Our Resort',
      href: '/book',
    },
    secondaryAction: {
      label: 'Watch Our Story',
      href: '/about',
    },
    booking: {
      checkIn: '2026-05-20',
      checkOut: '2026-05-22',
      guests: '1 Adult',
      guestOptions: ['1 Adult', '2 Adults', '4 Sharing', '6 Sharing', '8 Sharing', '12 Sharing'],
      actionLabel: 'Check Availability',
      thankYouMessage: 'Thank you. we will contact you in a while',
    },
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Discover the journey behind Tamohra Resort',
    image: storyImage,
    imageAlt: 'Tamohra Resort bungalow inspired architecture',
    paragraphs: [
      'Snuggled amidst the mist-clad mountains of the Western Ghats, Tamohra Resort in Sakleshpur was created as a getaway where refined living meets the calm of coffee country.',
      'The resort is shaped by bungalow-inspired architecture, serene pool views, verdant estates, and warm old-school Sakleshpur hospitality. Guests come here to slow down, trek forest trails, discover waterfalls, and experience the quiet luxury of the hills.',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Elevate your stay with our services',
    items: [
      {
        icon: 'dining',
        title: 'All 3 Meals Included',
        description: 'Breakfast, lunch, and dinner are included with every stay package.',
      },
      {
        icon: 'pool',
        title: 'Swimming Pool',
        description: 'Spend slow hours by the serene pool with mountain and estate views.',
      },
      {
        icon: 'banquet',
        title: 'Banquet Hall',
        description: 'Host group gatherings and occasions with warm resort hospitality.',
      },
      {
        icon: 'linen',
        title: 'Linens and Toiletries',
        description: 'Essential comforts are kept ready so your stay feels easy from arrival.',
      },
      {
        icon: 'coffee',
        title: 'Coffee Country Retreat',
        description: 'Settle into Sakleshpur’s coffee-estate calm and old-school hospitality.',
      },
      {
        icon: 'trek',
        title: 'Excursions and Treks',
        description: 'Explore Western Ghat trails, waterfalls, orchids, birds, and forest routes.',
      },
    ],
  },
  collage: {
    eyebrow: 'Tamohra Moments',
    title: 'Timeless luxury, crafted for you',
    description:
      'From poolside mornings and estate views to warm dining spaces and forest trails, every moment at Tamohra Resort is shaped for comfort, calm, and connection.',
    images: [
      {
        src: collagePoolImage,
        alt: 'Tamohra Resort swimming pool with Western Ghats view',
      },
      {
        src: collageDiningImage,
        alt: 'Tamohra Resort banquet and dining hall',
      },
      {
        src: collageExteriorImage,
        alt: 'Tamohra Resort bungalow exterior and pool',
      },
      {
        src: collageBridgeImage,
        alt: 'Tamohra Resort forest bridge trail',
      },
      {
        src: collageNightPoolImage,
        alt: 'Tamohra Resort night pool',
      },
    ],
  },
  elegantRooms: {
    title: 'Explore our elegant rooms',
    highlight: 'elegant rooms',
    description:
      'From intimate 2-sharing rooms to spacious group stays, each room keeps comfort, meals, and mountain living close.',
    button: {
      label: 'Explore Rooms',
      href: '/book',
    },
    images: [
      { src: roomTwoSharingImage, alt: 'Tamohra Room 1 for 2 sharing' },
      { src: roomFourSharingImage, alt: 'Tamohra Room 2 for 4 sharing' },
      { src: collageExteriorImage, alt: 'Tamohra resort exterior and pool' },
      { src: collagePoolImage, alt: 'Tamohra pool with Western Ghats view' },
      { src: roomSixSharingImage, alt: 'Tamohra Room 3 for 6 sharing' },
      { src: roomEightSharingImage, alt: 'Tamohra Room 4 for 8 sharing' },
      { src: roomTwelveSharingImage, alt: 'Tamohra Room 5 for 12 sharing' },
    ],
  },
  roomsSuites: {
    eyebrow: 'Accommodations',
    title: 'Rooms & Suites',
    description: 'Discover sharing rooms designed for comfort, meals, and mountain living.',
    items: [
      {
        title: 'Room 1',
        subtitle: '2 Sharing',
        description: 'A comfortable room for couples or close friends visiting Sakleshpur.',
        image: roomTwoSharingImage,
        imageAlt: 'Tamohra Room 1 for 2 sharing',
        href: '/book',
      },
      {
        title: 'Room 2',
        subtitle: '4 Sharing',
        description: 'A relaxed option for small families and weekend getaways.',
        image: roomFourSharingImage,
        imageAlt: 'Tamohra Room 2 for 4 sharing',
        href: '/book',
      },
      {
        title: 'Room 3',
        subtitle: '6 Sharing',
        description: 'A group-friendly stay with all meals included.',
        image: roomSixSharingImage,
        imageAlt: 'Tamohra Room 3 for 6 sharing',
        href: '/book',
      },
      {
        title: 'Room 4',
        subtitle: '8 Sharing',
        description: 'Made for larger families, friends, and relaxed group stays.',
        image: roomEightSharingImage,
        imageAlt: 'Tamohra Room 4 for 8 sharing',
        href: '/book',
      },
      {
        title: 'Room 5',
        subtitle: '12 Sharing',
        description: 'A spacious choice for reunions, celebrations, and full-group retreats.',
        image: roomTwelveSharingImage,
        imageAlt: 'Tamohra Room 5 for 12 sharing',
        href: '/book',
      },
    ],
  },
  guestStories: {
    eyebrow: '200+ happy guests so far',
    title: 'Guest stories',
    testimonials: [
      {
        rating: 5,
        quote:
          'Every corner of Tamohra felt intentional - beautiful yet effortless. The misty mornings, warm meals, and quiet poolside hours reminded us how to slow down and breathe again.',
        guestName: 'Ananya Rao',
        guestMeta: 'From Bengaluru - stayed in Room 2',
      },
      {
        rating: 5,
        quote:
          'The food, the pool, and the mountain views made our family weekend feel complete. It was quiet, clean, and wonderfully warm.',
        guestName: 'Rohit Menon',
        guestMeta: 'From Mysuru - stayed in Room 4',
      },
      {
        rating: 5,
        quote:
          'We came for a group stay and loved how easy everything felt. Meals were sorted, rooms were spacious, and the staff made us feel at home.',
        guestName: 'Priya Nair',
        guestMeta: 'From Mangaluru - stayed in Room 5',
      },
      {
        rating: 5,
        quote:
          'The Sakleshpur air, coffee estate calm, and forest trail nearby gave us exactly the reset we needed.',
        guestName: 'Karthik Shetty',
        guestMeta: 'From Hassan - stayed in Room 1',
      },
    ],
    images: [
      { src: guestImageOne, alt: 'Guests enjoying Tamohra Resort exterior and pool' },
      { src: guestImageTwo, alt: 'Tamohra Resort estate pathway in Sakleshpur' },
      { src: guestImageThree, alt: 'Tamohra Resort pool with Western Ghats view' },
      { src: guestImageFour, alt: 'Tamohra Resort forest bridge experience' },
      { src: guestImageFive, alt: 'Tamohra Resort outdoor seating deck' },
      { src: guestImageSix, alt: 'Tamohra Resort pool and bungalow view' },
      { src: guestImageSeven, alt: 'Tamohra Resort bungalow architecture' },
      { src: guestImageEight, alt: 'Tamohra Resort dining and banquet space' },
    ],
  },
}
