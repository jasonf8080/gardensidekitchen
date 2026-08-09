import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { whyChooseUs } from '../../data/data.js'

function WhyChooseUs() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.12 })

  return (
    <section ref={sectionRef} className="bg-secondary px-6 py-16 text-center md:px-10 md:py-24">
      <h2 className="font-display text-3xl leading-tight md:text-4xl" data-reveal>
        Why Visit Gardenside
      </h2>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div key={item.title} data-reveal>
            <h3 className="text-2xl md:text-3xl">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-primary/70 md:text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
