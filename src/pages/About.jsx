import { SEO } from '../components/main'
import { AboutHero, AboutFeatureSection, WhyChooseUs } from '../components/About'
import { aboutSections } from '../data/data.js'

function About() {
  return (
    <>
      <SEO
        title="About Gardenside Kitchen | Café in South Salem, NY"
        description="Located inside Gossett Brothers Nursery, Gardenside Kitchen pairs South Salem Winery pours with house-made pastries from pastry chef Tracy Kamperdyk Assue."
        path="/about"
      />
      <AboutHero />
      <AboutFeatureSection {...aboutSections.nurseryPartnership} tone="light" />
      <AboutFeatureSection {...aboutSections.wineryPartnership} tone="dark" reverse />
      <AboutFeatureSection {...aboutSections.bakery} tone="light" />
      <WhyChooseUs />
    </>
  )
}

export default About
