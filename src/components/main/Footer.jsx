import { FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { business, contact, hours, socialLinks } from '../../data/data.js'

function Footer() {
  return (
    <footer className="bg-primary px-6 py-14 text-secondary md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex items-start gap-3">
          <Logo className="h-10 w-10 shrink-0" />
          <div>
            <p className="font-display text-xl">{business.name}</p>
            <p className="mt-1 max-w-xs text-sm text-secondary/60">{business.shortDescription}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <section aria-labelledby="footer-location">
            <h2 id="footer-location" className="text-xl font-semibold md:text-2xl">
              Location
            </h2>
            <address className="mt-3 flex items-start gap-2 text-base not-italic leading-relaxed text-secondary/80 md:text-lg">
              <FiMapPin className="mt-1 shrink-0" aria-hidden="true" />
              <span>
                {contact.address.line1}
                <br />
                {contact.address.city}, {contact.address.state} {contact.address.zip}
              </span>
            </address>
          </section>

          <section aria-labelledby="footer-hours">
            <h2 id="footer-hours" className="text-xl font-semibold md:text-2xl">
              Hours
            </h2>
            <ul className="mt-3 space-y-1 text-base leading-relaxed text-secondary/80 md:text-lg">
              {hours.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-4 md:max-w-xs">
                  <span>{entry.days}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-xl font-semibold md:text-2xl">
              Contact
            </h2>
            <p className="mt-3 flex items-center gap-2 text-base text-secondary/80 md:text-lg">
              <FiPhone aria-hidden="true" />
              <a href={contact.phoneHref} className="hover:text-accent">
                {contact.phoneDisplay}
              </a>
            </p>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Gardenside Kitchen on Instagram"
              className="mt-4 inline-flex items-center gap-2 text-secondary/80 transition-colors hover:text-accent"
            >
              <FiInstagram size={22} />
              <span>{socialLinks.instagramHandle}</span>
            </a>
          </section>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-secondary/10 pt-6 text-sm text-secondary/50">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
