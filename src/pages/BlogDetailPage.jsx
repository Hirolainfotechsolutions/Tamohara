import { FaArrowLeft, FaClock } from 'react-icons/fa6'
import { Link, Navigate, useParams } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import HomeBookingSection from '../components/home/HomeBookingSection'
import { blogsPageData } from '../data/blogs.data'
import { homePageData } from '../data/home.data'

function BlogDetailPage() {
  const { slug } = useParams()
  const post = blogsPageData.posts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/blogs" replace />
  }

  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <div className="sticky top-0 z-50">
          <SiteHeader isSticky />
        </div>

        <article>
          <section className="px-4 py-10 sm:px-6 lg:py-12">
            <div className="mx-auto max-w-7xl">
              <Link className="meta-text inline-flex items-center gap-3 text-[var(--color-primary-dark)]" to="/blogs">
                <FaArrowLeft aria-hidden="true" />
                Back to blogs
              </Link>

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_0.82fr] lg:items-end">
                <div>
                  <p className="section-eyebrow mb-5">{post.category}</p>
                  <h1 className="heading-display max-w-4xl text-[clamp(38px,11vw,82px)] font-semibold leading-[1]">
                    {post.title}
                  </h1>
                </div>
                <div>
                  <p className="body-copy text-base leading-7 sm:text-xl sm:leading-8">{post.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <p className="meta-text text-[var(--color-muted)]">{post.date}</p>
                    <p className="meta-text flex items-center gap-2 text-[var(--color-muted)]">
                      <FaClock aria-hidden="true" />
                      {post.readTime}
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="mt-10 h-[300px] w-full rounded-[var(--radius-app)] object-cover sm:mt-12 sm:h-[55svh] sm:min-h-[360px]"
                src={post.image}
                alt={post.imageAlt}
              />
            </div>
          </section>

          <section className="soft-section px-4 py-12 sm:px-6 lg:py-12">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.35fr_1fr]">
              <aside className="lg:sticky lg:top-28 lg:h-fit">
                <p className="section-eyebrow">Tamohra Notes</p>
                <p className="body-copy mt-5 leading-7">
                  A short resort journal for guests planning thoughtful stays in Sakleshpur.
                </p>
              </aside>

              <div className="space-y-8">
                {post.body.map((paragraph) => (
                  <p className="heading-display text-2xl leading-[1.35] text-[var(--color-primary-dark)] sm:text-4xl" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </article>
        <HomeBookingSection booking={homePageData.bookingRequest} />
      </div>
      <SiteFooter reveal />
    </main>
  )
}

export default BlogDetailPage
