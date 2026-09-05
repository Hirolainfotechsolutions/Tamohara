import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { blogsPageData } from '../../data/blogs.data'
import { roomDetailsData } from '../../data/rooms.data'
import { pageSeoData, seoDefaults } from '../../data/seo.data'

function setMetaTag(selector, attributes) {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    tag.setAttribute(name, value)
  })
}

function setLinkTag(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  tag.setAttribute('href', href)
}

function getRouteSeo(pathname) {
  if (pathname.startsWith('/rooms/')) {
    const slug = pathname.split('/').filter(Boolean)[1]
    const room = roomDetailsData.rooms.find((item) => item.slug === slug)

    if (room) {
      return {
        title: `${room.title} ${room.subtitle} | Tamohara Resort`,
        description: `${room.overview} Tariff: ${room.price}. Book your Sakleshpur stay with meals, pool access, linens, toiletries, and resort activities.`,
      }
    }
  }

  if (pathname.startsWith('/blogs/')) {
    const slug = pathname.split('/').filter(Boolean)[1]
    const post = blogsPageData.posts.find((item) => item.slug === slug)

    if (post) {
      return {
        title: `${post.title} | Tamohara Resort Blog`,
        description: post.excerpt,
      }
    }
  }

  return pageSeoData[pathname] ?? seoDefaults
}

function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const { title, description } = getRouteSeo(location.pathname)
    const canonicalUrl = `${seoDefaults.baseUrl}${location.pathname === '/' ? '/' : location.pathname}`

    document.title = title
    setMetaTag('meta[name="description"]', { name: 'description', content: description })
    setMetaTag('meta[name="robots"]', { name: 'robots', content: 'index, follow' })
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: title })
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: description })
    setMetaTag('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    setMetaTag('meta[property="og:site_name"]', { property: 'og:site_name', content: seoDefaults.siteName })
    setMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    setLinkTag('canonical', canonicalUrl)
  }, [location.pathname])

  return null
}

export default SeoManager
