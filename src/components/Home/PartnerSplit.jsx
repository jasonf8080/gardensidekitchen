import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { partners } from '../../data/data.js'

/**
 * Two large side-by-side panels for the sister businesses sharing the
 * property — a bigger, bolder treatment than a 3-up card grid since there
 * are only two partners to feature.
 */
function PartnerSplit() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.15 })

  return (
    <section ref={sectionRef} className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-[28rem] flex-col items-center justify-center overflow-hidden text-center text-secondary"
            data-reveal
          >
            <img
              src={partner.image.src}
              alt={partner.image.alt}
              width={900}
              height={700}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/60 transition-colors group-hover:bg-primary/70" aria-hidden="true" />

            <div className="relative z-10 max-w-sm px-6">
              <h2 className="font-display text-3xl md:text-4xl">{partner.name}</h2>
              <p className="mt-3 text-base leading-relaxed text-secondary/85 md:text-lg">{partner.description}</p>
              <span className="mt-6 inline-block border border-secondary/70 px-6 py-2.5 text-sm font-medium uppercase tracking-widest transition-colors group-hover:border-accent group-hover:text-accent">
                {partner.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default PartnerSplit
