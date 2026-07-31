import { FaArrowRight, FaClock } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import HomeBookingSection from '../home/HomeBookingSection'
import SiteFooter from '../layout/SiteFooter'
import SiteHeader from '../layout/SiteHeader'
import { homePageData } from '../../data/home.data'

function BlogCard({ post, isLarge = false }) {
  return (
    <Link
      className={`group grid overflow-hidden rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-secondary-light)] transition-transform duration-300 hover:-translate-y-1 ${
        isLarge ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''
      }`}
      to={`/blogs/${post.slug}`}
    >
      <div className={isLarge ? 'min-h-[360px]' : 'h-72'}>
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={post.image}
          alt={post.imageAlt}
        />
      </div>
      <div className="grid content-between p-6 sm:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-eyebrow">{post.category}</p>
            <span className="h-px w-8 bg-[var(--color-border)]" aria-hidden="true" />
            <p className="meta-text flex items-center gap-2 text-[var(--color-muted)]">
              <FaClock aria-hidden="true" />
              {post.readTime}
            </p>
          </div>
          <h2 className={`heading-display mt-5 font-semibold leading-[1.02] ${isLarge ? 'text-[clamp(42px,5vw,68px)]' : 'text-4xl'}`}>
            {post.title}
          </h2>
          <p className="body-copy mt-5 text-base leading-7">{post.excerpt}</p>
        </div>
        <span className="meta-text mt-8 inline-flex items-center gap-3 text-[var(--color-primary-dark)]">
          Read Story
          <FaArrowRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

function BlogListing({ data }) {
  const [featuredPost, ...posts] = data.posts

  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="sticky top-0 z-50">
          <SiteHeader isSticky />
        </div>

        <section className="px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-end">
              <div>
                <p className="section-eyebrow mb-5">{data.eyebrow}</p>
                <h1 className="heading-display max-w-4xl text-[clamp(48px,6.2vw,86px)] font-semibold leading-[0.98]">
                  {data.title}
                </h1>
              </div>
              <p className="body-copy max-w-xl text-lg leading-8 lg:pb-3">{data.description}</p>
            </div>

            <div className="mt-14">
              <p className="section-eyebrow mb-5">{data.featuredLabel}</p>
              <BlogCard post={featuredPost} isLarge />
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <BlogCard post={post} key={post.slug} />
              ))}
            </div>
          </div>
        </section>
        <HomeBookingSection booking={homePageData.bookingRequest} />
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default BlogListing
