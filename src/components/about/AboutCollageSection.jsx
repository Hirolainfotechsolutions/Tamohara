function AboutCollageSection({ collage }) {
  return (
    <section className="app-section overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="hero-ornament mx-auto mb-4 h-[18px] w-[76px]" aria-hidden="true" />
        <p className="section-eyebrow mb-4">{collage.eyebrow}</p>
        <h2 className="heading-display text-[clamp(36px,10vw,70px)] font-semibold leading-[1.02]">
          {collage.title}
        </h2>
        <p className="body-copy mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg">
          {collage.description}
        </p>
      </div>

      <div className="mx-[calc(50%-50vw)] mt-10 grid w-screen overflow-hidden sm:grid-cols-2 md:mt-14 md:grid-cols-4 md:grid-rows-[320px_320px]">
        <img
          className="h-[240px] w-full object-cover sm:h-[300px] md:col-span-2 md:h-full"
          src={collage.images[0].src}
          alt={collage.images[0].alt}
        />
        <img
          className="h-[240px] w-full object-cover sm:h-[300px] md:col-span-2 md:h-full"
          src={collage.images[1].src}
          alt={collage.images[1].alt}
        />
        <img
          className="h-[240px] w-full object-cover sm:h-[300px] md:h-full"
          src={collage.images[2].src}
          alt={collage.images[2].alt}
        />
        <img
          className="h-[240px] w-full object-cover sm:h-[300px] md:col-span-2 md:h-full"
          src={collage.images[3].src}
          alt={collage.images[3].alt}
        />
        <img
          className="h-[240px] w-full object-cover sm:h-[300px] md:h-full"
          src={collage.images[4].src}
          alt={collage.images[4].alt}
        />
      </div>
    </section>
  )
}

export default AboutCollageSection
