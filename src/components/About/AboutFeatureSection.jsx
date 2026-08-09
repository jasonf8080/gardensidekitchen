import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

/**
 * Reusable image + copy block for About page sections (nursery partnership,
 * winery partnership, bakery story). Alternates image side via `reverse` so
 * consecutive sections don't feel repetitive.
 */
function AboutFeatureSection({ heading, paragraphs = [], image, reverse = false, tone = 'light' }) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.1 })

  const isDark = tone === 'dark'

  return (
    <section
      ref={sectionRef}
      className={`px-6 py-16 md:px-10 md:py-24 ${isDark ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 md:gap-16 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={800}
          height={900}
          loading="lazy"
          className="h-72 w-full max-w-md rounded-sm object-cover md:h-[420px]"
          data-reveal
        />

        <div className="w-full max-w-xl text-center md:text-left" data-reveal>
          <div className={`mb-4 h-px w-16 ${isDark ? 'bg-accent/60' : 'bg-accent/40'} mx-auto md:mx-0`} aria-hidden="true" />
          <h2 className="font-display text-3xl leading-tight md:text-4xl">{heading}</h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className={`mt-4 text-base leading-relaxed md:text-lg ${isDark ? 'text-secondary/80' : 'text-primary/75'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFeatureSection
