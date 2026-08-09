import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

/**
 * Shared list layout for a menu category (Food, Drinks). Two-column on
 * desktop so a 10-item list doesn't run too long down the page.
 */
function MenuSection({ heading, items, tone = 'light' }) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.05 })

  const isDark = tone === 'dark'

  return (
    <section
      ref={sectionRef}
      className={`px-6 py-16 md:px-10 md:py-20 ${isDark ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4" data-reveal>
          <h2 className="font-display text-3xl md:text-4xl">{heading}</h2>
          <span className={`h-px flex-1 ${isDark ? 'bg-secondary/20' : 'bg-primary/15'}`} aria-hidden="true" />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.name} data-reveal>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl md:text-2xl">{item.name}</h3>
                <span className="whitespace-nowrap text-lg text-accent md:text-xl">{item.price}</span>
              </div>
              <p className={`mt-1 text-base leading-relaxed md:text-lg ${isDark ? 'text-secondary/70' : 'text-primary/65'}`}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MenuSection
