import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { services } from '../../data/data.js'

/**
 * Full-bleed photo cards with layered text overlay — a different visual
 * treatment from the "image above text" cards used elsewhere on the site.
 */
function MenuHighlights() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.12 })

  return (
    <section ref={sectionRef} className="bg-primary px-6 py-20 text-center md:px-10 md:py-28">
      <h2 className="font-display text-3xl leading-tight text-secondary md:text-5xl" data-reveal>
        What We're Known For
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary/70 md:text-lg" data-reveal>
        From homemade pastries to savory bites and perfectly brewed coffee, explore our handcrafted favorites.
      </p>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            to="/menu"
            className="group relative block h-96 overflow-hidden rounded-sm"
            data-reveal
          >
            <img
              src={service.image.src}
              alt={service.image.alt}
              width={700}
              height={900}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left">
              <h3 className="text-2xl text-secondary md:text-3xl">{service.name}</h3>
              <p className="mt-1 text-sm text-secondary/80 md:text-base">{service.description}</p>
              <span className="mt-4 inline-block border-b border-accent text-sm font-medium uppercase tracking-widest text-accent">
                {service.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default MenuHighlights
