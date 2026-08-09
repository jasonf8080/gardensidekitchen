import { socialLinks } from '../../data/data.js'

function SocialCTA() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-primary px-6 py-16 text-center text-secondary">
      <h2 className="text-2xl md:text-3xl">Follow us on social media for more</h2>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-lg font-medium uppercase tracking-widest text-accent underline underline-offset-4 hover:text-secondary md:text-xl"
      >
        {socialLinks.instagramHandle}
      </a>
    </section>
  )
}

export default SocialCTA
