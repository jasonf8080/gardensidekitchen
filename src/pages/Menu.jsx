import { SEO } from '../components/main'
import { MenuHero, MenuSection, MenuNote } from '../components/Menu'
import { menuMorning, menuLunch, menuLunchFocaccia, menuAfternoonEvening } from '../data/data.js'

function Menu() {
  return (
    <>
      <SEO
        title="Menu | Gardenside Kitchen & Coffee Bar, South Salem NY"
        description="Coffee, focaccias, cheese boards, and local wine at Gardenside Kitchen, inside Gossett's Nursery in South Salem, NY — browse our full food and drink menu here."
        path="/menu"
      />
      <MenuHero />
      <MenuNote />
      <MenuSection
        heading="Morning (or until sold out)"
        items={menuMorning}
        tone="light"
      />
      <MenuSection
        heading="Afternoon (or until sold out)"
        items={menuLunch}
        secondaryHeading="Focaccia Sandwiches"
        secondaryItems={menuLunchFocaccia}
        tone="light"
      />
      <MenuSection
        heading="Afternoon / Evening"
        items={menuAfternoonEvening}
        tone="light"
      />
    </>
  )
}

export default Menu
