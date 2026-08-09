function AboutHero() {
  return (
    <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center text-secondary">
      <img
        src="/images/about-greenhouse.jpg"
        alt="Hanging ferns and flowering plants inside the Gossett Brothers Nursery greenhouse"
        width={1600}
        height={900}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
      <h1 className="relative z-10 font-display text-4xl leading-tight md:text-6xl">
        About Gardenside Kitchen
      </h1>
    </section>
  )
}

export default AboutHero
