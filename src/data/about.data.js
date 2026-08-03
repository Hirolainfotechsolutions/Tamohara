import aboutBannerImage from '../assets/images/aboutbanner.webp'
import exteriorImage from '../assets/images/1.webp'
import diningHallImage from '../assets/images/3.webp'
import buffetImage from '../assets/images/4.webp'
import estatePathImage from '../assets/images/7.webp'
import roomTwoImage from '../assets/images/8.webp'
import forestBridgeImage from '../assets/images/11.webp'
import roomSixImage from '../assets/images/14.webp'
import roomEightImage from '../assets/images/15.webp'
import nightDeckImage from '../assets/images/23.webp'
import roomTwelveImage from '../assets/images/24.webp'

export const aboutPageData = {
  eyebrow: 'About Tamohra',
  title: 'A Sakleshpur resort wrapped in mist, coffee estates, and old-school hospitality.',
  description:
    'Tamohra Resort is snuggled amidst the mist-clad mountains of the Western Ghats, with bungalow-inspired architecture, serene pool views, verdant estates, and relaxed spaces for families, friends, and group retreats.',
  highlights: ['Western Ghats setting', 'Coffee estate experiences', 'Buffet meals', 'Group-friendly stays'],
  hero: {
    eyebrow: 'Timeless comfort. Grounded hospitality.',
    title: 'A Stay That Stays With You',
    description:
      'Experience Tamohra Resort in every detail. Discover a calm Sakleshpur retreat where nature, comfort, hearty meals, and thoughtful service come together beautifully.',
    backgroundImage: aboutBannerImage,
    primaryAction: {
      label: 'Explore Our Resort',
      href: '/about',
    },
    secondaryAction: {
      label: 'Plan Your Stay',
      href: '/#book',
    },
    booking: {
      checkIn: '2026-05-20',
      checkOut: '2026-05-22',
      guests: '2 Sharing',
      guestOptions: ['2 Sharing', 'Villa 2 Occupancy AC', '4 Sharing', '6 Sharing', '8 Sharing', '12 Sharing'],
      actionLabel: 'Check Availability',
      thankYouMessage: 'Thank you. we will contact you in a while',
    },
  },
  splitBanner: {
    eyebrow: 'About Tamohra Resort',
    titleLines: ['We are', 'Tamohra.'],
    description:
      'A mist-clad Sakleshpur retreat shaped by coffee estates, bungalow-inspired stays, hearty buffet meals, and slow mountain hospitality.',
    foregroundImage: forestBridgeImage,
    foregroundAlt: 'Rope activity inside the Tamohra Resort estate',
    backgroundImage: aboutBannerImage,
    backgroundAlt: 'Tamohra Resort pool with Western Ghats views',
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Discover the Western Ghats  of Tamohra  ',
    image: exteriorImage,
    imageAlt: 'Tamohra Resort exterior with pool in Sakleshpur',
    paragraphs: [
      'Tamohra Resort is set in Sakleshpur, a landscape permanently swathed in emerald and jade. The resort is shaped by misty mountain air, coffee estate calm, poolside leisure, and bungalow-inspired spaces that feel warm without losing their sense of quiet luxury.',
      'The Western Ghats around us are filled with hiking trails, gurgling streams, intimate waterfalls, orchids, birds, colourful frogs, and grass-topped peaks. Some trails are gentle, while others reward effort with wind, clouds, and unforgettable views.',
      'For slower weekends, guests can read, nap, enjoy buffet meals, sit by the pool, or gather around campfire and music. For active groups, Tamohra offers estate trekking, Burma bridge, rope activities, outdoor shuttle, cricket, rain dance, trampoline, and more.',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Elevate your stay with our resort comforts',
    items: [
      {
        icon: 'dining',
        title: 'Buffet Lunch and Dinner',
        description:
          'Enjoy pickle, pappad, salad, soup, roti or kulcha, veg sabzi, rice varieties, sambar, rasam, curds, dessert, and seasonal non-vegetarian options.',
      },
      {
        icon: 'coffee',
        title: 'Breakfast and Hi-Tea',
        description:
          'Start with South Indian breakfast, fruits, boiled eggs, bread, butter, jam, tea, coffee, and milk, with hi-tea snacks like pakoda or bajji.',
      },
      {
        icon: 'pool',
        title: 'Swimming and Kids Pool',
        description:
          'Relax by the pool after a trail walk or group activity. Swimming pool use requires proper swimming costume.',
      },
      {
        icon: 'trek',
        title: 'Estate Activities',
        description:
          'Try trekking within the coffee estate, rope activities, Burma bridge, outdoor games, rain dance, trampoline, and campfire music.',
      },
      {
        icon: 'linen',
        title: 'Stay Essentials',
        description:
          'Fresh linens, toiletries, practical rooms, and warm service keep group stays simple and comfortable.',
      },
      {
        icon: 'banquet',
        title: 'Banquet Hall',
        description:
          'A comfortable indoor setting for reunions, group occasions, celebrations, and relaxed gatherings.',
      },
    ],
  },
  journey: {
    eyebrow: 'Our Journey, Your Story',
    title: 'Rooted in Sakleshpur, driven by warm hospitality',
    images: [
      { src: aboutBannerImage, alt: 'Tamohra Resort pool with Western Ghats views' },
      { src: forestBridgeImage, alt: 'Tamohra Resort rope activity in the estate' },
    ],
    paragraphs: [
      'Tamohra Resort began with the simple idea of making Sakleshpur stays feel generous, calm, and close to nature. Misty hills, coffee estate paths, poolside afternoons, and bungalow-inspired spaces shape every part of the experience.',
      'From family weekends to group retreats, each stay is planned around comfort, hearty buffet meals, estate activities, and thoughtful service that lets guests slow down without losing the joy of discovery.',
    ],
  },
  collage: {
    eyebrow: 'Around Tamohra',
    title: 'Timeless Sakleshpur, crafted for you',
    description:
      'Nearby places include Manzerabad Fort and Hanbal Falls at 10 km, Bettada Byraveshwara and Railway Tunnel at 25 km, Devaramane at 35 km, and Bisle Ghat, Belur, and Halebeed at 40 km.',
    images: [
      { src: aboutBannerImage, alt: 'Tamohra Resort pool and mountain view' },
      { src: diningHallImage, alt: 'Tamohra dining and banquet hall' },
      { src: estatePathImage, alt: 'Coffee estate path near Tamohra Resort' },
      { src: exteriorImage, alt: 'Tamohra Resort exterior in Sakleshpur' },
      { src: nightDeckImage, alt: 'Tamohra Resort evening deck' },
    ],
  },
  elegantRooms: {
    title: 'Explore our elegant rooms',
    highlight: 'elegant rooms',
    description:
      'Choose sharing rooms and villa stays shaped for couples, families, friends, and larger Sakleshpur groups.',
    button: {
      label: 'Explore Rooms',
      href: '/#book',
    },
    images: [
      { src: roomTwoImage, alt: 'Tamohra 2 sharing room' },
      { src: roomSixImage, alt: 'Tamohra 6 sharing room' },
      { src: exteriorImage, alt: 'Tamohra resort exterior' },
      { src: aboutBannerImage, alt: 'Tamohra pool and mountain view' },
      { src: roomEightImage, alt: 'Tamohra 8 sharing room' },
      { src: nightDeckImage, alt: 'Tamohra night deck' },
      { src: roomTwelveImage, alt: 'Tamohra 12 sharing room' },
    ],
  },
  roomsSuites: {
    eyebrow: 'Accommodations',
    title: 'Rooms & Suites',
    description:
      'Room-wise tariffs are available for every group size, with extra beds and villa room options on request.',
    items: [
      {
        title: 'Room for 2 Sharing',
        subtitle: 'Rs 6000 + taxes',
        description: 'Three rooms available. Extra bed at Rs 2000 + taxes.',
        image: roomTwoImage,
        imageAlt: 'Tamohra 2 sharing room',
        href: '/rooms/room-1',
      },
      {
        title: 'Villa Room',
        subtitle: '2 Occupancy AC',
        description: 'Four AC villa rooms with 2 occupancy each. Extra bed at Rs 2500 + taxes.',
        image: exteriorImage,
        imageAlt: 'Tamohra villa block',
        href: '/#book',
      },
      {
        title: 'Room for 4 Sharing',
        subtitle: 'Rs 12000 + taxes',
        description: 'One room available. Extra bed at Rs 2000 + taxes.',
        image: roomTwoImage,
        imageAlt: 'Tamohra 4 sharing room',
        href: '/rooms/room-2',
      },
      {
        title: 'Room for 6 Sharing',
        subtitle: 'Rs 16500 + taxes',
        description: 'Two rooms available for families and groups.',
        image: roomSixImage,
        imageAlt: 'Tamohra 6 sharing room',
        href: '/rooms/room-3',
      },
      {
        title: 'Room for 8 Sharing',
        subtitle: 'Rs 20000 + taxes',
        description: 'Two rooms available. Extra bed at Rs 2000 + taxes.',
        image: roomEightImage,
        imageAlt: 'Tamohra 8 sharing room',
        href: '/rooms/room-4',
      },
      {
        title: 'Room for 12 Sharing',
        subtitle: 'Rs 30000 + taxes',
        description: 'One room available for reunions and large group retreats.',
        image: roomTwelveImage,
        imageAlt: 'Tamohra 12 sharing room',
        href: '/rooms/room-5',
      },
    ],
  },
  guestStories: {
    eyebrow: 'Happy guests from coffee country weekends',
    testimonials: [
      {
        rating: 5,
        quote:
          'The pool, meals, and estate air made our group weekend feel easy from check-in to campfire.',
        guestName: 'A Weekend Guest',
        guestMeta: 'Stayed in an 8 sharing room',
      },
      {
        rating: 5,
        quote:
          'Breakfast, hi-tea, and the buffet meals kept the whole trip simple for our family.',
        guestName: 'Family Traveller',
        guestMeta: 'Stayed at Tamohra Resort',
      },
      {
        rating: 5,
        quote:
          'The estate trek, Burma bridge, and evening music gave everyone something to enjoy.',
        guestName: 'Group Guest',
        guestMeta: 'Visited Sakleshpur',
      },
    ],
    images: [
      { src: exteriorImage, alt: 'Tamohra Resort pool exterior' },
      { src: estatePathImage, alt: 'Tamohra coffee estate road' },
      { src: aboutBannerImage, alt: 'Tamohra pool mountain reflection' },
      { src: forestBridgeImage, alt: 'Tamohra rope bridge activity' },
      { src: nightDeckImage, alt: 'Tamohra campfire style deck' },
      { src: diningHallImage, alt: 'Tamohra dining hall' },
      { src: buffetImage, alt: 'Tamohra dining experience' },
      { src: roomSixImage, alt: 'Tamohra group room' },
    ],
  },
}
