function AboutStorySection({ story }) {
  return (
    <section className="app-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-10">
        <div className="overflow-hidden rounded-[var(--radius-app)] shadow-[var(--shadow-soft)]">
          <img className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]" src={story.image} alt={story.imageAlt} />
        </div>

        <div>
          <p className="section-eyebrow mb-5">{story.eyebrow}</p>
          <h2 className="heading-display max-w-[620px] text-[clamp(36px,10vw,68px)] font-semibold leading-[1.02]">
            {story.title}
          </h2>
          <div className="hero-ornament my-5 h-[18px] w-[76px]" aria-hidden="true" />
          <div className="space-y-7">
            {story.paragraphs.map((paragraph) => (
              <p className="body-copy max-w-[620px] text-base leading-8 sm:text-lg" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStorySection
