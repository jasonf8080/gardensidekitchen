import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap.js'

/**
 * Fades + slides elements matching `selector` into view as they cross the
 * viewport. One GSAP context per calling component, always reverted on
 * unmount so ScrollTriggers never leak between route changes.
 */
function useScrollReveal(containerRef, selector = '[data-reveal]', options = {}) {
  useLayoutEffect(() => {
    if (!containerRef.current) return undefined

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector)
      targets.forEach((target, index) => {
        gsap.from(target, {
          opacity: 0,
          y: 32,
          duration: 0.8,
          ease: 'power2.out',
          delay: options.stagger ? index * options.stagger : 0,
          scrollTrigger: {
            trigger: target,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, selector, options.stagger])
}

export default useScrollReveal
