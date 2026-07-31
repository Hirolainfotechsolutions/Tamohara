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
  bookingRequest: {
    title: 'Book',
    description: 'Ready for your next retreat? Fill out the form below and we will help you confirm your stay.',
    thankYouMessage: 'Thank you. we will contact you in a while',
    roomOptions: ['Room 1 - 2 Sharing', 'Room 2 - 4 Sharing', 'Room 3 - 6 Sharing', 'Room 4 - 8 Sharing', 'Room 5 - 12 Sharing'],
    fields: {
      room: 'Villas',
      arrival: 'Arrival',
      departure: 'Departure',
      visitors: 'Visitors',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      action: 'Send Request',
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
    initialVisibleCount: 12,
    loadMoreCount: 10,
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
      {
        question: 'What is included in the Rs 3000 + 18% price?',
        answer:
          'The price includes the stay and all 3 meals: breakfast, lunch, and dinner.',
      },
      {
        question: 'Is GST included in the listed price?',
        answer:
          'The listed price is Rs 3000 + 18% per person, so GST is added separately.',
      },
      {
        question: 'Which room is best for two guests?',
        answer:
          'Room 1 is planned for 2 sharing and is suitable for couples or close friends.',
      },
      {
        question: 'Which room is best for a small family?',
        answer:
          'Room 2 for 4 sharing or Room 3 for 6 sharing works well for small families and weekend groups.',
      },
      {
        question: 'Do you have rooms for large groups?',
        answer:
          'Yes. Room 4 supports 8 sharing and Room 5 supports 12 sharing for larger groups.',
      },
      {
        question: 'Can I book for a group celebration?',
        answer:
          'Yes. Tamohra Resort is suitable for reunions, birthdays, group weekends, and relaxed celebrations.',
      },
      {
        question: 'Is there a swimming pool?',
        answer:
          'Yes. The resort has a serene swimming pool with views of the surrounding greenery and hills.',
      },
      {
        question: 'Are toiletries provided?',
        answer:
          'Yes. Basic toiletries are included as part of the resort amenities.',
      },
      {
        question: 'Are linens provided?',
        answer:
          'Yes. Linens are provided for guests during the stay.',
      },
      {
        question: 'Do you serve breakfast?',
        answer:
          'Yes. Breakfast is included along with lunch and dinner.',
      },
      {
        question: 'Is fine dining available?',
        answer:
          'The resort includes dining facilities and all meals are part of the stay package.',
      },
      {
        question: 'Do you have a banquet hall?',
        answer:
          'Yes. Banquet hall facilities are available for gatherings and group occasions.',
      },
      {
        question: 'Is Tamohra Resort suitable for families with children?',
        answer:
          'Yes. The resort is suitable for families, with room-sharing options and relaxed spaces for a comfortable stay.',
      },
      {
        question: 'Is the resort suitable for couples?',
        answer:
          'Yes. Couples can choose the 2-sharing room and enjoy a quiet Sakleshpur getaway.',
      },
      {
        question: 'Is the resort good for friends groups?',
        answer:
          'Yes. The 4, 6, 8, and 12 sharing options are designed for friends and larger groups.',
      },
      {
        question: 'What can guests do around Sakleshpur?',
        answer:
          'Guests can explore coffee plantations, waterfalls, forest trails, grass-topped peaks, and Western Ghats viewpoints.',
      },
      {
        question: 'Are the nearby hikes difficult?',
        answer:
          'Some hikes are easy forest walks, while others are tougher uphill routes. Guests should choose trails based on comfort and fitness.',
      },
      {
        question: 'Can the team guide us about nearby trails?',
        answer:
          'Yes. You can ask the team for suggestions based on your group, weather, and preferred activity level.',
      },
      {
        question: 'Are there waterfalls nearby?',
        answer:
          'Sakleshpur has several waterfalls and stream-side trails in and around the Western Ghats region.',
      },
      {
        question: 'Is Sakleshpur good for coffee lovers?',
        answer:
          'Yes. Sakleshpur is known for Arabica and Robusta coffee plantations and coffee-country landscapes.',
      },
      {
        question: 'Can I spend the stay without doing activities?',
        answer:
          'Yes. Many guests come to read, rest, enjoy meals, sit by the pool, and slow down in the mountain air.',
      },
      {
        question: 'What makes Tamohra Resort different?',
        answer:
          'The resort combines bungalow-inspired architecture, misty mountain views, coffee-estate calm, and warm Sakleshpur hospitality.',
      },
      {
        question: 'Is the resort surrounded by nature?',
        answer:
          'Yes. The property is surrounded by Western Ghats greenery, coffee estates, and mountain landscapes.',
      },
      {
        question: 'Do rooms include meals for every guest?',
        answer:
          'Yes. The stay package includes all 3 meals per person.',
      },
      {
        question: 'Can I request a specific room type?',
        answer:
          'Yes. Share your preferred sharing option while enquiring, and the team will confirm based on availability.',
      },
      {
        question: 'How far in advance should I enquire?',
        answer:
          'It is best to enquire early for weekends, holidays, and larger group bookings.',
      },
      {
        question: 'Do I need to call after submitting the form?',
        answer:
          'After submitting the form, the team will contact you. You can also call directly for urgent enquiries.',
      },
      {
        question: 'Can I enquire through the Contact page?',
        answer:
          'Yes. Use the Contact page form to share your destination interest, guest count, budget, and notes.',
      },
      {
        question: 'Can I book from the home page?',
        answer:
          'Yes. The home page includes a booking request form for room type, dates, visitors, name, email, and phone.',
      },
      {
        question: 'What information is needed to check availability?',
        answer:
          'Please share arrival date, departure date, guest count, preferred room, name, phone, and email.',
      },
      {
        question: 'Is phone number required for enquiries?',
        answer:
          'Yes. A phone number helps the team contact you quickly and confirm details.',
      },
      {
        question: 'Can I submit special requests?',
        answer:
          'Yes. The Contact page includes a notes field for special requests and additional details.',
      },
      {
        question: 'Are pets allowed?',
        answer:
          'Please contact the resort team directly for the latest pet policy before booking.',
      },
      {
        question: 'Is parking available?',
        answer:
          'Please confirm parking details with the team while enquiring, especially for larger groups.',
      },
      {
        question: 'Is WiFi available?',
        answer:
          'Please check with the team for current connectivity details, as mountain locations can vary by network.',
      },
      {
        question: 'Is the resort good for remote work?',
        answer:
          'The resort is best for leisure and slow stays. If you need work connectivity, confirm network and WiFi details before booking.',
      },
      {
        question: 'What should I pack for Sakleshpur?',
        answer:
          'Pack comfortable clothes, walking shoes, light warm layers, rain protection during monsoon, and any personal medicines.',
      },
      {
        question: 'Are leeches common on trails?',
        answer:
          'Some forest trails in the Western Ghats may have leeches during wet months, so practical footwear and caution are recommended.',
      },
      {
        question: 'Is monsoon a good time to visit?',
        answer:
          'Monsoon brings lush greenery and misty views, but trails can be slippery. Plan activities carefully during heavy rains.',
      },
      {
        question: 'Is winter a good time to visit?',
        answer:
          'Yes. Winter is pleasant for slow stays, poolside time, estate walks, and Western Ghats views.',
      },
      {
        question: 'Can senior guests stay comfortably?',
        answer:
          'Yes, but please share mobility needs in advance so the team can guide you on room and activity suitability.',
      },
      {
        question: 'Can we plan a reunion at Tamohra Resort?',
        answer:
          'Yes. The larger sharing rooms and banquet facilities make the resort suitable for reunions and group stays.',
      },
      {
        question: 'Can we host a small event?',
        answer:
          'Yes. Banquet facilities are available for suitable small events and gatherings.',
      },
      {
        question: 'Can I visit only for meals?',
        answer:
          'Please contact the team directly to check current meal-only or day-visit availability.',
      },
      {
        question: 'Are outside guests allowed?',
        answer:
          'Please confirm visitor rules with the team before arrival, especially for group bookings or events.',
      },
      {
        question: 'Do you help with local recommendations?',
        answer:
          'Yes. The team can suggest nearby trails, waterfalls, coffee-estate experiences, and quiet places to explore.',
      },
      {
        question: 'Can I cancel or reschedule my booking?',
        answer:
          'Cancellation and rescheduling depend on the booking terms shared at confirmation. Please check with the team directly.',
      },
      {
        question: 'How will I receive booking confirmation?',
        answer:
          'The team will contact you using the phone or email details shared in your enquiry.',
      },
      {
        question: 'Is Tamohra Resort suitable for a weekend from Bengaluru?',
        answer:
          'Yes. Sakleshpur is a popular weekend getaway for guests looking for coffee country, mountains, and a slower stay.',
      },
      {
        question: 'What is the best way to contact the resort?',
        answer:
          'Use the Book Now form, Contact page form, phone number, or email listed on the website.',
      },
    ],
  },
}
