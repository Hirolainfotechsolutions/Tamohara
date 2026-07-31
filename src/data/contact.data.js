import { siteData } from './site.data'

export const contactPageData = {
  eyebrow: 'Contact Tamohra Resort',
  title: 'Get in touch',
  subtitle: 'Got questions or need travel advice?',
  description:
    'Our friendly team is here to help you plan your dream trip and make it unforgettable.',
  detailsTitle: 'Contact details:',
  detailGroups: [
    {
      title: 'Office address:',
      lines: ['Tamohra Resort', 'Sakleshpur, Karnataka', 'Western Ghats, India'],
    },
    {
      title: 'Registered Address',
      lines: ['Sakleshpur Coffee Country', 'Hassan District', 'Karnataka, India'],
    },
    {
      title: 'Contact',
      lines: [`Available Monday to Saturday`, `Tel: ${siteData.phone.label}`, `Email: ${siteData.email.label}`],
    },
  ],
  form: {
    thankYouMessage: 'Thank you. we will contact you in a while',
    submitLabel: 'Submit Enquiry',
    destinations: ['Room 1 - 2 Sharing', 'Room 2 - 4 Sharing', 'Room 3 - 6 Sharing', 'Room 4 - 8 Sharing', 'Room 5 - 12 Sharing', 'Banquet enquiry', 'General enquiry'],
    budgets: ['Rs 3000 + 18% per person', 'Family stay package', 'Group stay package', 'Banquet package'],
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Everything you need to know before touring with us.',
    items: [
      {
        question: 'What types of stay packages do you offer?',
        answer: 'We offer sharing-room stays from 2 to 12 guests, with pricing from Rs 3000 + 18% per person including all 3 meals.',
      },
      {
        question: 'Can I customize my trip package?',
        answer: 'Yes. Share your group size, dates, and preferences, and our team will guide you with the best room and stay option.',
      },
      {
        question: 'What is included in the stay package?',
        answer: 'Breakfast, lunch, dinner, linens, toiletries, swimming pool access, and essential resort amenities are included.',
      },
      {
        question: 'How do you ensure quality?',
        answer: 'The team coordinates directly with guests, confirms details clearly, and keeps the stay experience simple and comfortable.',
      },
      {
        question: 'Do you offer group and family options?',
        answer: 'Yes. Rooms are available for couples, families, friends, and larger groups up to 12 sharing.',
      },
      {
        question: 'Why should I choose Tamohra Resort?',
        answer: 'Tamohra Resort combines Western Ghats views, coffee-country calm, all-meals convenience, and warm Sakleshpur hospitality.',
      },
    ],
  },
}
