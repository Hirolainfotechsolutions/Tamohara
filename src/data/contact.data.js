import { siteData } from './site.data'
import aboutBannerImage from '../assets/images/aboutbanner.webp'

export const contactPageData = {
  hero: {
    eyebrow: 'Plan Your Sakleshpur Stay',
    title: 'Let Us Help You Plan Tamohra',
    description:
      'Tell us your dates, group size, and room preference. Our team will help you confirm the right stay with meals, activities, and resort details.',
    backgroundImage: aboutBannerImage,
    primaryAction: {
      label: 'Send An Enquiry',
      href: '/contact#contact-form',
    },
    secondaryAction: {
      label: 'Call Us',
      href: siteData.phone.href,
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
  eyebrow: 'Contact Tamohra Resort',
  title: 'Get in touch',
  subtitle: 'Got questions or need travel advice?',
  description:
    'Our team can help you choose the right sharing room, villa stay, activities, nearby places, and meal plan for your Sakleshpur trip.',
  detailsTitle: 'Contact details:',
  detailGroups: [
    {
      title: 'Office address:',
      lines: ['Tamohra Resort', 'Debbegadde Village, Kyamanahally Post', 'Hanbal Hobali, Sakleshpur Taluk', 'Mavinahalli, Karnataka 573165'],
    },
    {
      title: 'Registered Address',
      lines: ['Western Ghats Coffee Country', 'Sakleshpur, Hassan District', 'Karnataka, India'],
    },
    {
      title: 'Contact',
      lines: [`Available Monday to Saturday`, `Tel: ${siteData.phone.label}`, `Email: ${siteData.email.label}`],
    },
  ],
  form: {
    thankYouMessage: 'Thank you. we will contact you in a while',
    submitLabel: 'Submit Enquiry',
    destinations: ['Room for 2 Sharing', 'Villa Room - 2 Occupancy AC', 'Room for 4 Sharing', 'Room for 6 Sharing', 'Room for 8 Sharing', 'Room for 12 Sharing', 'Activities enquiry', 'Banquet enquiry', 'General enquiry'],
    budgets: ['Rs 6000 + taxes', 'Rs 7000 + taxes villa', 'Rs 12000 + taxes', 'Rs 16500 + taxes', 'Rs 20000 + taxes', 'Rs 30000 + taxes', 'Group stay package'],
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Everything you need to know before staying with us.',
    items: [
      {
        question: 'What types of stay packages do you offer?',
        answer: 'We offer 2, 4, 6, 8, and 12 sharing rooms, plus 2-occupancy AC villa rooms. Taxes are additional as applicable.',
      },
      {
        question: 'Can I customize my trip package?',
        answer: 'Yes. Share your group size, dates, and preferences, and our team will guide you with the best room and stay option.',
      },
      {
        question: 'What is included in the stay package?',
        answer: 'The stay includes breakfast, lunch, dinner, linens, toiletries, swimming pool access, and essential resort amenities.',
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
        answer: 'Tamohra Resort combines Western Ghats views, coffee-country calm, buffet meals, activities, and warm Sakleshpur hospitality.',
      },
    ],
  },
}
