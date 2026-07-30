import { Link } from 'react-router-dom'
import { siteData } from '../../data/site.data'

function BrandMark({ className = '', subtitleClassName = '' }) {
  return (
    <Link
      className={`grid justify-items-center text-center leading-none ${className}`}
      to="/"
      aria-label={`${siteData.brandName} Resort home`}
    >
      <span className="brand-title">
        {siteData.brandName}
      </span>
      <span className={`brand-subtitle mt-1 opacity-85 ${subtitleClassName}`}>
        Resort
      </span>
    </Link>
  )
}

export default BrandMark
