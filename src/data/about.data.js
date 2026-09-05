import aboutBannerImage from '../assets/images/pool-mountain-banner.webp'
import exteriorImage from '../assets/images/resort-pool-exterior.webp'
import diningHallImage from '../assets/images/dining-hall.webp'
import buffetImage from '../assets/images/buffet-dining.webp'
import estatePathImage from '../assets/images/coffee-estate-pathway.webp'
import roomTwoImage from '../assets/images/two-sharing-room.webp'
import forestBridgeImage from '../assets/images/burma-bridge-activity.webp'
import roomSixImage from '../assets/images/six-sharing-room.webp'
import roomEightImage from '../assets/images/eight-sharing-room.webp'
import nightDeckImage from '../assets/images/evening-deck.webp'
import roomTwelveImage from '../assets/images/twelve-sharing-room.webp'

export const aboutPageData = {
  eyebrow: 'About Tamohara',
  title: 'A Sakleshpur resort wrapped in mist, coffee estates, and old-school hospitality.',
  description:
    'Tamohara Resort is snuggled amidst the mist-clad mountains of the Western Ghats, with bungalow-inspired architecture, serene pool views, verdant estates, and relaxed spaces for families, friends, and group retreats.',
  highlights: ['Western Ghats setting', 'Coffee estate experiences', 'Buffet meals', 'Group-friendly stays'],
  hero: {
    eyebrow: 'Timeless comfort. Grounded hospitality.',
    title: 'A Stay That Stays With You',
    description:
      'Experience Tamohara Resort in every detail. Discover a calm Sakleshpur retreat where nature, comfort, hearty meals, and thoughtful service come together beautifully.',
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
      thankYouMessage: 'Thank you. We will contact you shortly.',
    },
  },
  splitBanner: {
    eyebrow: 'About Tamohara Resort',
    titleLines: ['We are', 'Tamohara.'],
    description:
      'A mist-clad Sakleshpur retreat shaped by coffee estates, bungalow-inspired stays, hearty buffet meals, and slow mountain hospitality.',
    foregroundImage: forestBridgeImage,
    foregroundAlt: 'Rope activity inside the Tamohara Resort estate',
    backgroundImage: aboutBannerImage,
    backgroundAlt: 'Tamohara Resort pool with Western Ghats views',
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Discover the Western Ghats of Tamohara',
    image: exteriorImage,
    imageAlt: 'Tamohara Resort exterior with pool in Sakleshpur',
    paragraphs: [
      'Tamohara Resort is set in Sakleshpur, a landscape permanently swathed in emerald and jade. The resort is shaped by misty mountain air, coffee estate calm, poolside leisure, and bungalow-inspired spaces that feel warm without losing their sense of quiet luxury.',
      'The Western Ghats around us are filled with hiking trails, gurgling streams, intimate waterfalls, orchids, birds, colourful frogs, and grass-topped peaks. Some trails are gentle, while others reward effort with wind, clouds, and unforgettable views.',
      'For slower weekends, guests can read, nap, enjoy buffet meals, sit by the pool, or gather around campfire and music. For active groups, Tamohara offers estate trekking, Burma bridge, rope activities, outdoor shuttle, cricket, rain dance, trampoline, and more.',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Elevate your stay with our resort comforts',
    image: diningHallImage,
    imageAlt: 'Tamohara Resort dining hall and buffet comfort',
    items: [
      {
        icon: 'dining',
        title: 'Buffet Lunch and Dinner',
        description:
          'Enjoy pickle, papad, salad, soup, roti or kulcha, veg sabzi, rice varieties, sambar, rasam, curds, dessert, and seasonal non-vegetarian options.',
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
  foodActivitiesStay: {
    eyebrow: 'Food, activities and stay details',
    title: 'Everything included in a Tamohara getaway',
    description:
      'From buffet meals and hi-tea snacks to estate activities, room options, tariffs, and stay timings, here is the practical plan for your Sakleshpur weekend.',
    cards: [
      {
        title: 'Lunch and Dinner Buffet',
        note: 'Vegetarian buffet staples with seasonal non-vegetarian dishes.',
        items: [
          'Pickle',
          'Papad',
          'Salad',
          'Soup',
          'Phulka / roti / kulcha',
          'Veg sabzi',
          'Veg pulav / fried rice / jeera rice / ghee rice',
          'Raitha / kurma / curry',
          'White rice',
          'Sambar',
          'Rasam',
          'Curds',
          'Dessert',
          'Chicken and fish dry, fry, curry or masala',
          'Fish seasonal',
        ],
      },
      {
        title: 'Breakfast and Hi-Tea',
        note: 'Simple, filling food for pool time, activities, and slow mornings.',
        items: [
          'Two South Indian breakfast dishes',
          'Cut fruits',
          'Boiled eggs',
          'Bread, butter and jam',
          'Tea, coffee and milk',
          'Hi-tea with veg pakoda or bajjis',
          'Starters available on a la carte',
        ],
      },
      {
        title: 'Activities',
        note: 'Estate-side experiences for families, friends, and groups.',
        items: [
          'Swimming pool with swimming costume only',
          'Kids pool',
          'Burma bridge',
          'Rope activities',
          'Outdoor shuttle court',
          'Cricket',
          'Trekking within the coffee estate',
          'Coffee plantation experience during harvest season',
          'Campfire and music',
          'Rain dance',
          'Trampoline',
          'Many more resort activities',
        ],
      },
      {
        title: 'Accommodation and Tariffs',
        note: 'Taxes additional as applicable. Extra beds available on request.',
        items: [
          'Three rooms of 2 sharing - Rs 6000 + taxes',
          'Villa room for 2 occupancy AC - Rs 7000 + taxes',
          'One room of 4 sharing - Rs 12000 + taxes',
          'Two rooms of 6 sharing - Rs 16500 + taxes',
          'Two rooms of 8 sharing - Rs 20000 + taxes',
          'One room of 12 sharing - Rs 30000 + taxes',
          'Extra bed Rs 2000 + taxes',
          'Villa extra bed Rs 2500 + taxes',
        ],
      },
      {
        title: 'Stay Timings',
        note: 'A few simple timings keep every group stay comfortable.',
        items: [
          'Check-in from 12 noon onwards',
          'Check-out at 11 AM',
          'Music from 7:30 PM to 10 PM strictly',
          'Dinner served until 10:30 PM',
        ],
      },
    ],
  },
  journey: {
    eyebrow: 'Our Journey, Your Story',
    title: 'Rooted in Sakleshpur, driven by warm hospitality',
    images: [
      { src: aboutBannerImage, alt: 'Tamohara Resort pool with Western Ghats views' },
      { src: forestBridgeImage, alt: 'Tamohara Resort rope activity in the estate' },
    ],
    paragraphs: [
      'Tamohara Resort began with the simple idea of making Sakleshpur stays feel generous, calm, and close to nature. Misty hills, coffee estate paths, poolside afternoons, and bungalow-inspired spaces shape every part of the experience.',
      'From family weekends to group retreats, each stay is planned around comfort, hearty buffet meals, estate activities, and thoughtful service that lets guests slow down without losing the joy of discovery.',
    ],
  },
  nearbyPlaces: {
    eyebrow: 'Nearby places to visit',
    title: 'Explore Sakleshpur around Tamohara',
    description:
      'Step out from Tamohara Resort to forts, waterfalls, temple hills, tunnels, ghats, and heritage towns within an easy scenic drive.',
    items: [
      { name: 'Manzerabad Fort', distance: '10 km' },
      { name: 'Hanbal Falls', distance: '10 km' },
      { name: 'Bettada Byraveshwara', distance: '25 km' },
      { name: 'Devaramane', distance: '35 km' },
      { name: 'Railway Tunnel', distance: '25 km' },
      { name: 'Bisle Ghat', distance: '40 km' },
      { name: 'Belur and Halebeed', distance: '40 km' },
    ],
  },
  collage: {
    eyebrow: 'Inside Tamohara',
    title: 'Real resort moments, captured for you',
    description:
      'Explore views from the resort, including the swimming pool, dining spaces, estate pathways, bungalow-style stays, and peaceful evening corners.',
    images: [
      { src: aboutBannerImage, alt: 'Tamohara Resort pool and mountain view' },
      { src: diningHallImage, alt: 'Tamohara dining and banquet hall' },
      { src: estatePathImage, alt: 'Coffee estate path near Tamohara Resort' },
      { src: exteriorImage, alt: 'Tamohara Resort exterior in Sakleshpur' },
      { src: nightDeckImage, alt: 'Tamohara Resort evening deck' },
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
      { src: roomTwoImage, alt: 'Tamohara 2 sharing room' },
      { src: roomSixImage, alt: 'Tamohara 6 sharing room' },
      { src: exteriorImage, alt: 'Tamohara resort exterior' },
      { src: aboutBannerImage, alt: 'Tamohara pool and mountain view' },
      { src: roomEightImage, alt: 'Tamohara 8 sharing room' },
      { src: nightDeckImage, alt: 'Tamohara night deck' },
      { src: roomTwelveImage, alt: 'Tamohara 12 sharing room' },
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
        imageAlt: 'Tamohara 2 sharing room',
        href: '/rooms/room-1',
      },
      {
        title: 'Villa Room',
        subtitle: '2 Occupancy AC',
        description: 'Four AC villa rooms with 2 occupancy each. Extra bed at Rs 2500 + taxes.',
        image: exteriorImage,
        imageAlt: 'Tamohara villa block',
        href: '/rooms/villa-room',
      },
      {
        title: 'Room for 4 Sharing',
        subtitle: 'Rs 12000 + taxes',
        description: 'One room available. Extra bed at Rs 2000 + taxes.',
        image: roomTwoImage,
        imageAlt: 'Tamohara 4 sharing room',
        href: '/rooms/room-2',
      },
      {
        title: 'Room for 6 Sharing',
        subtitle: 'Rs 16500 + taxes',
        description: 'Two rooms available for families and groups.',
        image: roomSixImage,
        imageAlt: 'Tamohara 6 sharing room',
        href: '/rooms/room-3',
      },
      {
        title: 'Room for 8 Sharing',
        subtitle: 'Rs 20000 + taxes',
        description: 'Two rooms available. Extra bed at Rs 2000 + taxes.',
        image: roomEightImage,
        imageAlt: 'Tamohara 8 sharing room',
        href: '/rooms/room-4',
      },
      {
        title: 'Room for 12 Sharing',
        subtitle: 'Rs 30000 + taxes',
        description: 'One room available for reunions and large group retreats.',
        image: roomTwelveImage,
        imageAlt: 'Tamohara 12 sharing room',
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
        guestMeta: 'Stayed at Tamohara Resort',
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
      { src: exteriorImage, alt: 'Tamohara Resort pool exterior' },
      { src: estatePathImage, alt: 'Tamohara coffee estate road' },
      { src: aboutBannerImage, alt: 'Tamohara pool mountain reflection' },
      { src: forestBridgeImage, alt: 'Tamohara rope bridge activity' },
      { src: nightDeckImage, alt: 'Tamohara campfire style deck' },
      { src: diningHallImage, alt: 'Tamohara dining hall' },
      { src: buffetImage, alt: 'Tamohara dining experience' },
      { src: roomSixImage, alt: 'Tamohara group room' },
    ],
  },
}
