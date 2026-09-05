import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/tamohara_logo.webp'
import { siteData } from '../../data/site.data'

function BrandMark({ className = '', imageClassName = '' }) {
  return (
    <Link
      className={`inline-flex items-center justify-center leading-none ${className}`}
      to="/"
      aria-label={`${siteData.brandName} Resort home`}
    >
      <img
        className={`h-16 w-16 object-contain sm:h-20 sm:w-20 ${imageClassName}`}
        src={logoImage}
        alt={`${siteData.brandName} Resorts`}
      />
    </Link>
  )
}

export default BrandMark
