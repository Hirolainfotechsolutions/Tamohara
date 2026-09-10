import coastalJewelLogo from '../assets/group-projects/gold-logo-1024x1024.webp'
import jewelRockImage from '../assets/group-projects/jewelrockimage.webp'
import kaduhithluImage from '../assets/group-projects/kaduhithlu-banner-2.webp'
import mauryaImage from '../assets/group-projects/mauriya1.webp'
import sanLogo from '../assets/group-projects/san-logo-png.webp'
import streamedgeImage from '../assets/group-projects/streamedge1.webp'
import vegkourtImage from '../assets/group-projects/vegkourtimage.webp'

export const groupsData = {
  title: 'SAN Group Of Hotels',
  tagline: 'Redefining Hospitality Since 1990',
  logo: sanLogo,
  exploreAllHref: 'https://sangroupofhotels.in/',
  hotels: [
    {
      name: 'Hotel Maurya Palace And Residency',
      location: 'Mysore, Karnataka',
      image: mauryaImage,
      href: 'https://hotelmauryapalaceandresidency.sangroupofhotels.in/',
    },
    {
      name: 'Kaduhithlu Resort',
      location: 'Kaduhithlu, Karnataka',
      image: kaduhithluImage,
      href: 'https://kaduhithluresort.com/',
    },
    {
      name: 'Streamedge Sakleshpur',
      location: 'Sakleshpur, Karnataka',
      image: streamedgeImage,
      href: 'https://streamedgesakleshpur.com/',
    },
    {
      name: 'Vegkourt',
      location: 'Mysore, Karnataka',
      image: vegkourtImage,
      href: 'https://vegkourt.in/',
    },
    {
      name: 'Jewel Rock',
      location: 'Mysore, Karnataka',
      image: jewelRockImage,
      href: '#',
    },
    {
      name: 'Coastal Jewel',
      location: 'Coming soon',
      image: coastalJewelLogo,
      imageFit: 'logo',
      isComingSoon: true,
    },
  ],
}
