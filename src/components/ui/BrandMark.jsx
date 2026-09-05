import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/tamohara-logo.webp'
import { siteData } from '../../data/site.data'

function BrandMark({ className = '', imageClassName = '', size = 'default' }) {
  const sizeClassName = size === 'compact' ? 'h-16 w-16 sm:h-20 sm:w-20' : 'h-20 w-20 sm:h-24 sm:w-24'

  return (
    <Link
      className={`inline-flex items-center justify-center leading-none ${className}`}
      to="/"
      aria-label={`${siteData.brandName} Resort home`}
    >
      <img
        className={`${sizeClassName} object-contain ${imageClassName}`}
        src={logoImage}
        alt={`${siteData.brandName} Resorts`}
      />
    </Link>
  )
}

export default BrandMark
