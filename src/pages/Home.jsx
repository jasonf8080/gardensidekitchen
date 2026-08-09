import { SEO } from '../components/main'
import { Hero, WelcomeSplit, MenuHighlights, PartnerSplit, VisitUs, GalleryStrip, SocialCTA } from '../components/Home'

function Home() {
  return (
    <>
      <SEO
        title="Gardenside Kitchen & Coffee Bar | Café in South Salem, NY"
        description="Westchester County's most unique destination. Enjoy thoughtfully crafted coffee, wine, pastries and seasonal bites inside Gossett's Nursery in South Salem, NY."
        path="/"
        includeLocalBusinessSchema
      />
      <Hero />
      <WelcomeSplit />
      <MenuHighlights />
      <PartnerSplit />
      <VisitUs />
      <GalleryStrip />
      <SocialCTA />
    </>
  )
}

export default Home
