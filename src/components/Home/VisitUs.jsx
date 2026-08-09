import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { contact, hours } from '../../data/data.js'

const VISIT_PHOTOS = [
  {
    src: '/images/about-nursery.jpg',
    alt: 'Gossett Brothers Nursery storefront and outdoor garden display in South Salem, NY',
  },
  {
    src: '/images/hero-counter.jpg',
    alt: 'Order counter at Gardenside Kitchen with pendant lights and chalkboard menus',
  },
]

function VisitUs() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, '[data-reveal]', { stagger: 0.1 })

  return (
    <section ref={sectionRef} className="bg-secondary px-6 py-20 md:px-10 md:py-28" id="visit">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4" data-reveal>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-primary/60">Visit Us</span>
          <span className="h-px flex-1 bg-primary/20" aria-hidden="true" />
        </div>

        <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-start md:gap-8" data-reveal>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Location</h2>
          <p className="max-w-sm border-l-0 pl-0 text-base leading-relaxed text-primary/70 md:border-l md:pl-8 md:text-lg">
            Located inside Gossett's Nursery, surrounded by plants, coffee, pastries, and South Salem Winery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr_1fr]">
          {VISIT_PHOTOS.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={900}
              loading="lazy"
              className="h-72 w-full rounded-sm object-cover md:h-96"
              data-reveal
            />
          ))}

          <div className="flex flex-col justify-center gap-8 rounded-sm bg-primary/5 p-6 md:p-8" data-reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/60">Address</p>
              <p className="mt-2 text-lg font-semibold md:text-xl">
                {contact.address.line1}
                <br />
                {contact.address.city}, {contact.address.state} {contact.address.zip}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/60">Hours</p>
              <ul className="mt-2 space-y-1 text-base md:text-lg">
                {hours.map((entry) => (
                  <li key={entry.days} className="flex justify-between gap-4">
                    <span>{entry.days}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-sm" data-reveal>
          <iframe
            title="Map to Gardenside Kitchen at 1202 NY-35, South Salem, NY 10590"
            src={contact.mapEmbedUrl}
            className="h-80 w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default VisitUs
