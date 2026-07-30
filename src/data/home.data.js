import heroBannerImage from '../assets/images/Tamohara-resorts-banner.jpg'
import aboutBannerImage from '../assets/images/aboutbanner.webp'
import exteriorImage from '../assets/images/1.webp'
import roomTwoImage from '../assets/images/8.webp'
import roomSixImage from '../assets/images/14.webp'
import roomEightImage from '../assets/images/15.webp'
import roomTwelveImage from '../assets/images/24.webp'
import diningHallImage from '../assets/images/3.webp'
import buffetImage from '../assets/images/4.webp'
import forestBridgeImage from '../assets/images/11.webp'
import estatePathImage from '../assets/images/7.webp'
import nightPoolImage from '../assets/images/23.webp'
import banquetImage from '../assets/images/22.webp'

export const homePageData = {
  hero: {
    ariaLabel: 'Tamohra Resort homepage',
    backgroundImage: heroBannerImage,
    eyebrow: 'Sakleshpur, Western Ghats',
    titleLines: ['Mist-Clad', 'Mountain Luxury'],
    subtitle: 'A refined resort escape surrounded by coffee estates, serene pool views, and emerald Western Ghat landscapes.',
    scrollTarget: '#about-resort',
  },
  aboutResort: {
    eyebrow: 'About Tamohra Resort',
    title: 'Snuggled amidst the mist-clad mountains of Sakleshpur.',
    description:
      'Tamohra Resort brings together luxury, lifestyle, and old-school Sakleshpur hospitality. Defined by bungalow-inspired architecture, serene poolside views, thicketed mountains, and verdant estates, it is a Western Ghats getaway made for both slow weekends and adventurous escapes.',
    button: {
      label: 'Explore More',
      href: '/about',
    },
    image: exteriorImage,
    imageAlt: 'Tamohra Resort luxury exterior',
  },
  amenities: {
    eyebrow: 'Amenities',
    title:
      'From crisp linens and essential toiletries to breakfast, fine dining, banquet spaces, and a serene swimming pool, Tamohra Resort keeps every stay effortless.',
    image: diningHallImage,
    imageAlt: 'Tamohra Resort poolside view',
    items: [
      { label: 'Linens', icon: 'package' },
      { label: 'Toiletries', icon: 'spa' },
      { label: 'Breakfast', icon: 'dining' },
      { label: 'Swimming Pool', icon: 'pool' },
      { label: 'Fine Dining', icon: 'dining' },
      { label: 'Banquet Hall', icon: 'events' },
    ],
  },
  roomsPreview: {
    eyebrow: 'Accommodations',
    title: 'Rooms for couples, families, and groups of every size.',
    description:
      'Choose from sharing options designed for 2 to 12 guests. Pricing starts at Rs 3000 + 18% per person and includes all 3 meals.',
    items: [
      {
        number: '01',
        title: 'Room 1 - 2 Sharing',
        description: 'A comfortable 2-sharing room for couples or close friends visiting Sakleshpur.',
        image: roomTwoImage,
        imageAlt: 'Tamohra Resort general room view',
      },
      {
        number: '02',
        title: 'Room 2 - 4 Sharing',
        description: 'A 4-sharing stay suited for small families and easy weekend getaways.',
        image: roomTwoImage,
        imageAlt: 'Tamohra Resort 4 sharing room',
      },
      {
        number: '03',
        title: 'Room 3 - 6 Sharing',
        description: 'A 6-sharing option for groups who want comfort, meals, and mountain air together.',
        image: roomSixImage,
        imageAlt: 'Tamohra Resort 6 sharing room',
      },
      {
        number: '04',
        title: 'Room 4 - 8 Sharing',
        description: 'An 8-sharing room made for larger families, friends, and relaxed group stays.',
        image: roomEightImage,
        imageAlt: 'Tamohra Resort 8 sharing room',
      },
      {
        number: '05',
        title: 'Room 5 - 12 Sharing',
        description: 'A spacious 12-sharing stay for celebrations, reunions, and full-group retreats.',
        image: roomTwelveImage,
        imageAlt: 'Tamohra Resort 12 sharing room',
      },
    ],
  },
  wellness: {
    eyebrow: 'Western Ghats',
    title: 'Trek, pause, read, and return to the clouds.',
    description:
      'Sakleshpur is wrapped in emerald and jade, with coffee plantations, waterfalls, forest trails, orchids, frogs, birds, and grass-topped peaks waiting beyond the resort.',
    images: [
      { src: forestBridgeImage, alt: 'Tamohra forest rope bridge trail' },
      { src: estatePathImage, alt: 'Tamohra Western Ghats estate pathway' },
      { src: aboutBannerImage, alt: 'Tamohra pool and mountain wellness view' },
    ],
  },
  elegantRooms: {
    title: 'Explore our elegant rooms',
    highlight: 'elegant rooms',
    description:
      'Comfortable sharing rooms, poolside calm, and warm interiors designed for relaxed Sakleshpur stays.',
    button: {
      label: 'Explore Rooms',
      href: '/book',
    },
    images: [
      { src: roomTwoImage, alt: 'Tamohra 2 sharing room' },
      { src: roomSixImage, alt: 'Tamohra 6 sharing room' },
      { src: exteriorImage, alt: 'Tamohra resort pool exterior' },
      { src: aboutBannerImage, alt: 'Tamohra mountain pool view' },
      { src: roomEightImage, alt: 'Tamohra 8 sharing room' },
      { src: nightPoolImage, alt: 'Tamohra night pool seating' },
      { src: roomTwelveImage, alt: 'Tamohra 12 sharing room' },
    ],
  },
  featuredStay: {
    eyebrow: 'Stay Includes',
    title: 'All 3 Meals Included',
    description:
      'Enjoy a simple, transparent stay plan at Rs 3000 + 18% per person, inclusive of breakfast, lunch, and dinner.',
    image: buffetImage,
    imageAlt: 'Tamohra premium suite exterior',
    button: {
      label: 'More Info',
      href: '/book',
    },
  },
  values: {
    eyebrow: 'Sakleshpur Hospitality',
    title: 'Old-school warmth in the heart of coffee country.',
    description:
      'Whether you spend your vacation trekking the Western Ghats or reading from a bean bag, Tamohra Resort keeps the experience warm, grounded, and deeply local.',
    image: forestBridgeImage,
    imageAlt: 'Tamohra resort landscape',
    items: ['Coffee Trails', 'Mountain Hikes', 'Quiet Weekends'],
  },
  offers: {
    eyebrow: 'Pricing',
    title: 'Stay from Rs 3000 + 18% per person',
    description:
      'Your stay includes all 3 meals, access to essential amenities, and a refreshing Sakleshpur resort experience.',
    image: nightPoolImage,
    imageAlt: 'Tamohra resort evening offer',
    button: {
      label: 'Book Now',
      href: '/book',
    },
  },
  experiences: {
    eyebrow: 'Experiences',
    title: 'Choose your kind of Western Ghats weekend',
    description:
      'Spend your time around the pool, explore coffee estates, hike through forests, chase waterfalls, or settle into a slow weekend of reading and rest.',
    primary: {
      title: 'Book Your Stay',
      image: exteriorImage,
      imageAlt: 'Tamohra guest experience',
      href: '/book',
    },
    items: [
      {
        title: 'Banquets',
        image: banquetImage,
        imageAlt: 'Tamohra wedding celebration',
        href: '/contact',
      },
      {
        title: 'Treks',
        image: forestBridgeImage,
        imageAlt: 'Tamohra excursion experience',
        href: '/about',
      },
      {
        title: 'Amenities',
        image: aboutBannerImage,
        imageAlt: 'Tamohra resort amenities',
        href: '#amenities',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Your Sakleshpur Escape',
    title: 'Escape Reality',
    description: 'Come for the mist-clad mountains, stay for the meals, coffee, pool, and old-school hospitality.',
    image: nightPoolImage,
    imageAlt: 'Tamohra resort escape',
    button: {
      label: 'Book a Room',
      href: '/book',
    },
  },
  faqs: {
    eyebrow: 'FAQs',
    title: 'Frequently asked questions',
    description:
      'Everything you need to know before planning your Sakleshpur stay at Tamohra Resort.',
    button: {
      label: 'Book Your Stay',
      href: '/book',
    },
    initialVisibleCount: 8,
    loadMoreCount: 6,
    items: [
      {
        question: 'Where is Tamohra Resort located?',
        answer:
          'Tamohra Resort is located in Sakleshpur, Karnataka, amidst the mist-clad mountains, coffee estates, and green slopes of the Western Ghats.',
      },
      {
        question: 'What is the price per person?',
        answer:
          'The stay starts at Rs 3000 + 18% per person. This includes all 3 meals during your stay.',
      },
      {
        question: 'Are meals included in the stay?',
        answer:
          'Yes. Breakfast, lunch, and dinner are included as part of the stay package.',
      },
      {
        question: 'What room sharing options are available?',
        answer:
          'Tamohra Resort offers Room 1 for 2 sharing, Room 2 for 4 sharing, Room 3 for 6 sharing, Room 4 for 8 sharing, and Room 5 for 12 sharing.',
      },
      {
        question: 'What amenities are available at the resort?',
        answer:
          'Amenities include linens, toiletries, breakfast, swimming pool, fine dining, and banquet hall facilities.',
      },
      {
        question: 'Is Tamohra suitable for families and groups?',
        answer:
          'Yes. The sharing room options are planned for couples, families, friends, and larger groups up to 12 sharing.',
      },
      {
        question: 'Are there trekking options nearby?',
        answer:
          'Yes. Sakleshpur has Western Ghat trails, forest routes, waterfalls, coffee plantations, orchids, birds, and grass-topped peaks for guests who enjoy active weekends.',
      },
      {
        question: 'Is the resort good for a quiet weekend?',
        answer:
          'Absolutely. Guests can spend time reading, resting, enjoying the pool, exploring coffee country, or simply slowing down in the mountain air.',
      },
      {
        question: 'Does the resort have a banquet hall?',
        answer:
          'Yes. Tamohra Resort has banquet hall facilities suitable for gatherings and group occasions.',
      },
      {
        question: 'How do I check availability?',
        answer:
          'Use the booking form on the About page or the Book Now page. Share your dates, guest count, and mobile number, and the team will contact you shortly.',
      },
    ],
  },
}
