import { Link } from 'react-router-dom'
import { business } from '../../data/data.js'

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-secondary">
      <img
        src="/images/hero-counter.jpg"
        alt="Order counter at Gardenside Kitchen with pendant lights, chalkboard menus, and a wine shelf"
        width={1600}
        height={1067}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <div className="mb-6 flex items-center gap-4 text-accent">
          <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
          <span className="text-sm font-medium tracking-[0.3em] md:text-base">
            EST {business.established}
          </span>
          <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
        </div>

        <h1 className="font-display text-4xl leading-tight tracking-wide md:text-6xl">
          {business.name}
        </h1>

        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-secondary/85 md:text-lg">
          {business.heroSubtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/menu"
            className="border border-accent bg-accent px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors hover:bg-accent/85 md:text-base"
          >
            View Menu
          </Link>
          <Link
            to="/about"
            className="border border-secondary/70 px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors hover:border-accent hover:text-accent md:text-base"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
