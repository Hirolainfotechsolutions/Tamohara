function AboutJourneySection({ journey }) {
  return (
    <section className="app-section px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-10 lg:w-[90vw] lg:max-w-none lg:grid-cols-[1.44fr_0.78fr] lg:gap-12">
        <div className="grid gap-4 sm:grid-cols-[1.08fr_0.84fr] sm:gap-6">
          {journey.images.map((image, index) => (
            <figure
              key={image.alt}
              className={`overflow-hidden bg-[var(--color-primary-dark)] ${
                index === 0 ? "rounded-[var(--radius-app)] sm:rounded-tl-2xl sm:rounded-bl-2xl sm:rounded-tr-none sm:rounded-br-none" : "rounded-[var(--radius-app)] sm:rounded-none"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[320px] w-full object-cover sm:h-[560px] lg:h-[610px]"
              />
            </figure>
          ))}
        </div>

        <div className="max-w-[560px] self-center lg:max-w-[500px] lg:translate-y-5 lg:pl-4 xl:pl-6">
          <p className="font-body text-xl font-medium leading-none text-[var(--color-primary-dark)]">
            {journey.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(38px,10vw,64px)] font-normal leading-[1.04] text-[var(--color-primary-dark)] sm:mt-10">
            {journey.title}
          </h2>
          <div className="mt-6 space-y-5 font-body text-base leading-7 text-[var(--color-muted)] sm:mt-9 sm:space-y-7 sm:text-lg sm:leading-8">
            {journey.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutJourneySection;
