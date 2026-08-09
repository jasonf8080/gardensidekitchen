import { SEO } from '../components/main'
import { MenuHero, MenuSection, MenuNote } from '../components/Menu'
import { menuFood, menuDrinks } from '../data/data.js'

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
      <MenuSection heading="Food" items={menuFood} tone="light" />
      <MenuSection
        heading="Drinks"
        items={menuDrinks.filter((item) => !String(item.price).startsWith('+'))}
        secondaryHeading="Add-Ins"
        secondaryItems={menuDrinks.filter((item) => String(item.price).startsWith('+'))}
        tone="light"
      />
    </>
  )
}

export default Menu
