import bannerImage from '../assets/images/Tamohara-resorts-banner.jpg'
import trailImage from '../assets/images/11.webp'
import diningImage from '../assets/images/22.webp'
import estateImage from '../assets/images/7.webp'
import roomImage from '../assets/images/14.webp'

export const blogsPageData = {
  eyebrow: 'Tamohra Resort Journal',
  title: 'Stories from the Western Ghats',
  description:
    'Modern travel notes from Sakleshpur: nearby forts and falls, coffee estate activities, buffet meals, relaxed rooms, and slower mountain weekends.',
  featuredLabel: 'Featured Story',
  readMoreLabel: 'Read Story',
  posts: [
    {
      slug: 'slow-weekend-in-sakleshpur',
      category: 'Mountain Living',
      date: 'July 30, 2026',
      readTime: '4 min read',
      title: 'How to spend a slow weekend in Sakleshpur',
      excerpt:
        'A calm itinerary for guests who want poolside mornings, coffee country views, soft meals, and time to simply breathe.',
      image: bannerImage,
      imageAlt: 'Tamohra Resort pool and mountain view',
      body: [
        'Sakleshpur rewards the guest who refuses to rush. At Tamohra Resort, the weekend can begin with quiet poolside light, South Indian breakfast, and the kind of mountain air that makes even ordinary mornings feel ceremonial.',
        'Keep the first day gentle. Walk the property, settle into your room, try the pool, and leave room for hi-tea snacks, coffee, conversation, and long pauses.',
        'On the second morning, step out for an estate trek, Burma bridge, rope activities, shuttle, cricket, or a nearby drive. Return for buffet meals, an afternoon nap, and an evening of campfire and music.',
      ],
    },
    {
      slug: 'western-ghats-trails',
      category: 'Trails',
      date: 'July 24, 2026',
      readTime: '5 min read',
      title: 'A guest guide to Western Ghats trails',
      excerpt:
        'What to expect from Sakleshpur hikes: green routes, gurgling streams, grass-topped peaks, and filter coffee breaks.',
      image: trailImage,
      imageAlt: 'Forest bridge trail near Tamohra Resort',
      body: [
        'The trails around Sakleshpur shift quickly from shaded forest to open hilltops. Some paths are damp and intimate, with streams, small waterfalls, insects, and birds. Others rise toward windier grasslands where the clouds feel close enough to touch.',
        'Guests who enjoy active weekends should start early, carry water, wear practical shoes, and ask the team about routes that match their comfort level. The hills are beautiful, but the best walks are the ones planned with care.',
        'Nearby options include Manzerabad Fort and Hanbal Falls around 10 km away, Bettada Byraveshwara and Railway Tunnel around 25 km away, Devaramane around 35 km away, and Bisle Ghat, Belur, and Halebeed around 40 km away.',
      ],
    },
    {
      slug: 'all-meals-included-stay',
      category: 'Dining',
      date: 'July 18, 2026',
      readTime: '3 min read',
      title: 'Why an all-meals stay feels easier',
      excerpt:
        'Breakfast, lunch, dinner, and hi-tea are part of the Tamohra rhythm, giving groups more time to relax and less time to plan.',
      image: diningImage,
      imageAlt: 'Dining and banquet space at Tamohra Resort',
      body: [
        'Meals shape the pace of a resort stay. Lunch and dinner at Tamohra follow a buffet format with pickle, pappad, salad, soup, roti or kulcha, veg sabzi, rice varieties, sambar, rasam, curds, dessert, and vegetarian and non-vegetarian options.',
        'Breakfast includes two South Indian dishes, cut fruits, boiled eggs, bread, butter, jam, tea, coffee, and milk. Hi-tea is served with veg pakoda or bajji, making the late afternoon feel easy after pool time or activities.',
        'For group stays, this is especially useful. Everyone can gather naturally, eat comfortably, and return to the weekend without turning every meal into a decision.',
      ],
    },
    {
      slug: 'coffee-estate-mornings',
      category: 'Coffee Country',
      date: 'July 12, 2026',
      readTime: '4 min read',
      title: 'Coffee estate mornings in the hills',
      excerpt:
        'Sakleshpur mornings arrive in shades of emerald and jade, with quiet roads, plantation air, and unhurried views.',
      image: estateImage,
      imageAlt: 'Estate path around Tamohra Resort',
      body: [
        'The Western Ghats are most generous in the morning. The light is soft, the slopes are green, and the air carries the calm of coffee country before the day fully wakes.',
        'A short walk around estate roads can be enough. Look for changing textures: wet leaves, red earth, tall trees, and distant hill lines tucked behind mist.',
        'This is the kind of place where doing less can feel like discovering more.',
      ],
    },
    {
      slug: 'choosing-your-sharing-room',
      category: 'Rooms',
      date: 'July 8, 2026',
      readTime: '3 min read',
      title: 'Choosing the right sharing room',
      excerpt:
        'From 2 sharing to 12 sharing, here is how to think about rooms for couples, families, friends, and reunions.',
      image: roomImage,
      imageAlt: 'Sharing room at Tamohra Resort',
      body: [
        'Tamohra Resort offers rooms for different group sizes, from 2 sharing to 12 sharing. The right choice depends less on the label and more on how your group likes to spend time.',
        'There are three rooms for 2 sharing, one room for 4 sharing, two rooms for 6 sharing, two rooms for 8 sharing, and one room for 12 sharing. The villa block has four AC rooms with two-guest occupancy each.',
        'Tariffs are Rs 6000 + taxes for 2 sharing, Rs 7000 + taxes for villa 2 occupancy, Rs 12000 + taxes for 4 sharing, Rs 16500 + taxes for 6 sharing, Rs 20000 + taxes for 8 sharing, and Rs 30000 + taxes for 12 sharing. Extra beds are available on request.',
      ],
    },
  ],
}
