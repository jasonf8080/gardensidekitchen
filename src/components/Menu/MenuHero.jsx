function MenuHero() {
  return (
    <section className="relative flex min-h-[35vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center text-secondary">
      <img
        src="/images/service-focaccia.jpg"
        alt="Grilled focaccia topped with burrata, tomato sauce, and pesto on a wooden board"
        width={1600}
        height={900}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
      <h1 className="relative z-10 font-display text-4xl leading-tight md:text-6xl">Our Menu</h1>
      <p className="relative z-10 mt-4 max-w-xl text-sm text-secondary/80 md:text-base">
        Food and drinks, made fresh daily inside Gossett's Nursery.
      </p>
    </section>
  )
}

export default MenuHero
