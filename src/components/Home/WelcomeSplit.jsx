import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { business } from '../../data/data.js'

const rotatingPhotos = [
  {
    src: '/images/optimized/about-greenhouse.webp',
    alt: 'Hanging ferns and flowering plants inside the Gossett Brothers Nursery greenhouse',
  },
  {
    src: '/images/optimized/service-bakery.webp',
    alt: 'Handcrafted pastries displayed in the Gardenside bakery case',
  },
  {
    src: '/images/optimized/about-winery.webp',
    alt: 'South Salem Winery Malbec bottle beside a cheese and charcuterie board',
  },
]

/**
 * Asymmetric welcome section: rotating three-photo slideshow on one side, tagline +
 * intro copy on the other. Replaces v1's centered text-over-three-photos block.
 */
function WelcomeSplit() {
  const sectionRef = useRef(null)
  const [activePhoto, setActivePhoto] = useState(0)

  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.12 })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActivePhoto((current) => (current + 1) % rotatingPhotos.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section ref={sectionRef} className="bg-secondary px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="relative h-80 w-full max-w-md overflow-hidden rounded-sm md:h-[480px]" data-reveal>
          {rotatingPhotos.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={1125}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === activePhoto ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="w-full max-w-lg text-center md:text-left" data-reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">{business.kicker}</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">{business.tagline}</h2>
          <p className="mt-6 text-base leading-relaxed text-primary/75 md:text-2xl">{business.heroIntro}</p>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSplit
