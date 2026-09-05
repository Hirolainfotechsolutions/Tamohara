import roomOneImage from '../assets/images/two-sharing-room.webp'
import roomTwoImage from '../assets/images/sharing-room.webp'
import roomThreeImage from '../assets/images/six-sharing-room.webp'
import roomFourImage from '../assets/images/eight-sharing-room.webp'
import roomFiveImage from '../assets/images/twelve-sharing-room.webp'
import villaRoomImage from '../assets/images/resort-pool-exterior.webp'

export const roomDetailsData = {
  eyebrow: 'Rooms & Suites Details',
  bookLabel: 'Book a Room',
  overviewTitle: 'Room Overview',
  policiesTitle: 'Room Rules & Regulations',
  conclusionTitle: 'Conclusion',
  amenities: [
    'Comfortable Bed',
    'Fresh Linens',
    'Swimming Pool',
    'Buffet Meals',
    'Hi-Tea Snacks',
    'Estate Activities',
  ],
  rules: [
    'Each room has a specified maximum number of occupants that must be respected.',
    'Smoking is prohibited in non-smoking rooms and indoor guest areas.',
    'Guests are responsible for any damage to resort property during their stay.',
    'Only registered guests are allowed to use room facilities.',
    'Return room keys at check-out and settle any pending charges before departure.',
    'Guests must follow resort policies while using shared amenities.',
    'Swimming pool access is allowed only with proper swimming costume.',
    'Check-in is from 12 noon onwards and check-out is at 11 am.',
    'Music is allowed from 7:30 PM to 10 PM strictly.',
    'Dinner is served until 10:30 PM.',
  ],
  rooms: [
    {
      slug: 'room-1',
      title: 'Room 1',
      subtitle: '2 Sharing',
      price: 'Rs 6000 + taxes',
      size: '2 Guests',
      bed: '1 Room',
      bathroom: '1 Bathroom',
      image: roomOneImage,
      imageAlt: 'Tamohara Room 1 for 2 sharing',
      overview:
        'A comfortable 2-sharing room designed for couples or close friends visiting Sakleshpur. Tamohara has three rooms in this category, with extra bed available at Rs 2000 + taxes.',
      details:
        'Room 1 keeps the experience quiet and simple, with fresh linens, toiletries, buffet meals, pool access, and a relaxed setting for a peaceful Western Ghats weekend.',
      conclusion:
        'Choose Room 1 for an intimate stay with old-school hospitality, warm meals, and slow mountain mornings.',
    },
    {
      slug: 'room-2',
      title: 'Room 2',
      subtitle: '4 Sharing',
      price: 'Rs 12000 + taxes',
      size: '4 Guests',
      bed: '2 Beds',
      bathroom: '1 Bathroom',
      image: roomTwoImage,
      imageAlt: 'Tamohara Room 2 for 4 sharing',
      overview:
        'A relaxed 4-sharing room suited for small families and weekend groups. Tamohara has one room in this category, with extra bed available at Rs 2000 + taxes.',
      details:
        'Room 2 is a practical choice for guests who want a balanced stay with enough room to settle in and enjoy Sakleshpur without over-planning.',
      conclusion:
        'Choose Room 2 for a small group stay with meals, pool access, and a comfortable resort rhythm.',
    },
    {
      slug: 'villa-room',
      title: 'Villa Room',
      subtitle: '2 Occupancy AC',
      price: 'Rs 7000 + taxes',
      size: '2 Guests',
      bed: '1 AC Villa Room',
      bathroom: '1 Bathroom',
      image: villaRoomImage,
      imageAlt: 'Tamohara villa room block in Sakleshpur',
      overview:
        'A 2-occupancy AC villa room for guests who want a quieter stay with added comfort. Tamohara has four villa block rooms in this category, with extra bed available at Rs 2500 + taxes.',
      details:
        'The villa room includes the Tamohara stay rhythm of buffet meals, breakfast, hi-tea, pool access, fresh linens, toiletries, and easy access to estate activities.',
      conclusion:
        'Choose the Villa Room for an AC stay with resort comfort, meals, and a calm Sakleshpur setting.',
    },
    {
      slug: 'room-3',
      title: 'Room 3',
      subtitle: '6 Sharing',
      price: 'Rs 16500 + taxes',
      size: '6 Guests',
      bed: '3 Beds',
      bathroom: '1 Bathroom',
      image: roomThreeImage,
      imageAlt: 'Tamohara Room 3 for 6 sharing',
      overview:
        'A group-friendly 6-sharing room for families or friends who want comfort, buffet meals, and mountain air together. Tamohara has two rooms in this category.',
      details:
        'Room 3 works well for guests who enjoy shared downtime, poolside conversations, and easy access to dining and resort facilities.',
      conclusion:
        'Choose Room 3 for a warm, connected group stay in the Western Ghats.',
    },
    {
      slug: 'room-4',
      title: 'Room 4',
      subtitle: '8 Sharing',
      price: 'Rs 20000 + taxes',
      size: '8 Guests',
      bed: '4 Beds',
      bathroom: '2 Bathrooms',
      image: roomFourImage,
      imageAlt: 'Tamohara Room 4 for 8 sharing',
      overview:
        'An 8-sharing room made for larger families, friends, and relaxed group stays. Tamohara has two rooms in this category, with extra bed available at Rs 2000 + taxes.',
      details:
        'Room 4 offers more space for groups who want to stay close, share meals, and enjoy the resort without splitting into separate plans.',
      conclusion:
        'Choose Room 4 for a comfortable larger-group experience with resort amenities close at hand.',
    },
    {
      slug: 'room-5',
      title: 'Room 5',
      subtitle: '12 Sharing',
      price: 'Rs 30000 + taxes',
      size: '12 Guests',
      bed: '6 Beds',
      bathroom: '2 Bathrooms',
      image: roomFiveImage,
      imageAlt: 'Tamohara Room 5 for 12 sharing',
      overview:
        'A spacious 12-sharing option for reunions, celebrations, and full-group retreats in Sakleshpur. Tamohara has one room in this category, with extra bed available at Rs 2000 + taxes.',
      details:
        'Room 5 is planned for larger gatherings that need a shared base, included meals, resort amenities, and a simple group-friendly stay.',
      conclusion:
        'Choose Room 5 for reunions and large group escapes framed by coffee country calm.',
    },
  ],
}
