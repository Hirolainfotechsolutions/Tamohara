function AboutJourneySection({ journey }) {
  return (
    <section className="app-section px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto grid w-[90vw] max-w-none items-center gap-10 lg:grid-cols-[1.44fr_0.78fr] lg:gap-12">
        <div className="grid gap-6 sm:grid-cols-[1.08fr_0.84fr]">
          {journey.images.map((image, index) => (
            <figure
              key={image.alt}
              className={`overflow-hidden bg-[var(--color-sage)] ${
                index === 0 ? "rounded-tl-2xl rounded-bl-2xl" : "rounded-none"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[430px] w-full object-cover sm:h-[560px] lg:h-[610px]"
              />
            </figure>
          ))}
        </div>

        <div className="max-w-[500px] self-center lg:translate-y-5 lg:pl-4 xl:pl-6">
          <p className="font-body text-xl font-medium leading-none text-[var(--color-primary-dark)]">
            {journey.eyebrow}
          </p>
          <h2 className="mt-10 font-display text-[clamp(44px,4vw,64px)] font-normal leading-[1.02] text-[var(--color-primary-dark)]">
            {journey.title}
          </h2>
          <div className="mt-9 space-y-7 font-body text-lg leading-8 text-[var(--color-muted)]">
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
