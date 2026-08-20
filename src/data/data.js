// Single source of truth for all Gardenside Kitchen copy and repeatable content.
// v2 — rebuilt with real photos supplied by the client on 2026-08-08.
// The menu below is FILLER content (10 food items, 5 drinks) per client request —
// swap in the real menu and prices before this goes live. Items marked
// PLACEHOLDER were not published anywhere and still need the client's input.

export const business = {
  name: 'Gardenside Kitchen & Coffee Bar',
  shortName: 'Gardenside Kitchen',
  tagline: 'Café. Winery. Greenhouse.',
  kicker: 'Three spaces. One destination.',
  heroIntro:
    'From morning coffee to an evening pour, surrounded by greenery in between. Welcome to Gardenside.',
  heroSubtitle: 'Fresh Coffee · Handcrafted Pastries · Focaccias · Local Wine · Lattes',
  established: '2026',
  description:
    "Westchester County's most unique destination. Enjoy thoughtfully crafted coffee, wine, pastries and seasonal bites inside Gossett's Nursery in South Salem, NY.",
  shortDescription:
    'Thoughtfully crafted coffee, wine, pastries and seasonal bites in South Salem, NY.',
  industry: 'Café, Coffee Bar & Wine Tasting Room',
  city: 'South Salem',
  state: 'NY',
}

export const contact = {
  phone: '917-837-1131',
  phoneDisplay: '(917) 837-1131',
  phoneHref: 'tel:+19178371131',
  email: '', // PLACEHOLDER — not published anywhere, confirm with client
  address: {
    line1: '1202 NY-35',
    city: 'South Salem',
    state: 'NY',
    zip: '10590',
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=1202+NY-35+South+Salem+NY+10590&output=embed',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=1202+NY-35+South+Salem+NY+10590',
}

export const hours = [
  { days: 'Thursday – Friday', time: '7:00 AM – 7:00 PM' },
  { days: 'Saturday', time: '8:00 AM – 7:00 PM' },
  { days: 'Sunday', time: '8:00 AM – 5:00 PM' },
  { days: 'Monday – Wednesday', time: 'Closed' },
]

export const socialLinks = {
  instagram: 'https://www.instagram.com/gardensidekitchen/',
  instagramHandle: '@gardensidekitchen',
}

// "What We're Known For" cards on the homepage
export const services = [
  {
    id: 'bakery',
    name: 'Bakery',
    description: 'Freshly baked pastries made in-house daily.',
    cta: 'See Bakery Case',
    image: {
      tag: 'service-bakery',
      src: '/images/optimized/service-bakery.webp',
      alt: 'Five sugar-topped kouign-amann pastries in paper cups on a wooden tray',
    },
  },
  {
    id: 'coffee',
    name: 'Coffee',
    description: 'Artisan coffee roasted to perfection.',
    cta: 'See Coffee Menu',
    image: {
      tag: 'service-coffee',
      src: '/images/optimized/service-coffee.webp',
      alt: 'Latte with foam art beside a blueberry scone on a metal plate at Gardenside Kitchen',
    },
  },
  {
    id: 'focaccias',
    name: 'Focaccias',
    description: 'Freshly baked focaccia sandwiches made in-house daily.',
    cta: 'See Focaccias',
    image: {
      tag: 'service-focaccia',
      src: '/images/optimized/service-focaccia.webp',
      alt: 'Grilled focaccia topped with burrata, tomato sauce, and pesto on a wooden board',
    },
  },
]

// Cross-promotion of the two sister businesses sharing the property
export const partners = [
  {
    id: 'south-salem-winery',
    name: 'South Salem Winery',
    description:
      'Thoughtfully crafted wines, handcrafted small plates & welcoming moments to savor.',
    cta: 'Visit Winery',
    href: 'https://southsalemwinery.com/',
    image: {
      tag: 'about',
      src: '/images/optimized/about-winery.webp',
      alt: 'South Salem Winery Malbec bottle beside a cheese, prosciutto, salami, and grape board',
    },
  },
  {
    id: 'gossetts-nursery',
    name: "Gossett's Nursery",
    description: 'Thoughtfully grown plants, seasonal blooms & a peaceful place to wander.',
    cta: 'Visit Nursery',
    href: 'https://www.gossettnursery.com/',
    image: {
      tag: 'about',
      src: '/images/optimized/about-nursery.webp',
      alt: 'Gossett Brothers Nursery storefront with pottery and garden displays out front',
    },
  },
]

export const homeGallery = [
  {
    src: '/images/optimized/gallery-walnut-loaf.webp',
    alt: 'Slice of walnut spice loaf cake on a wooden board at Gardenside Kitchen',
  },
  {
    src: '/images/optimized/gallery-scones.webp',
    alt: 'Three stacked blueberry scones on a wooden serving board',
  },
  {
    src: '/images/optimized/gallery-cranberry-cake.webp',
    alt: 'Slice of cranberry almond cake topped with sliced almonds',
  },
  {
    src: '/images/optimized/gallery-cider.webp',
    alt: 'South Salem Winery dry cider bottle on a wooden table in the greenhouse café',
  },
]

export const aboutSections = {
  nurseryPartnership: {
    heading: 'Partnership w/ Gossett Brothers Nursery',
    paragraphs: [
      'Our café is proudly located inside Gossett Brothers Nursery, a family-run greenhouse owned and operated by the Gossett family. Surrounded by plants and seasonal greenery, the space creates a unique atmosphere where fresh flavors and garden vibes naturally come together.',
      "Our partnership makes every visit more than just a meal—it's an experience that blends nature, community, and nourishment under one roof.",
    ],
    image: {
      tag: 'about',
      src: '/images/optimized/about-greenhouse.webp',
      alt: 'Hanging ferns and flowering plants inside the Gossett Brothers Nursery greenhouse',
    },
  },
  wineryPartnership: {
    heading: 'Partnership w/ South Salem Winery',
    paragraphs: [
      "We're excited to share our partnership with South Salem Winery, led by local winemaker John Vuolo. Known for crafting small-batch wines with unique characteristics and balance, John brings a passion for both tradition and innovation to every bottle.",
      "At Gardenside Kitchen, we believe food and wine tell a story. Our menu features fresh, locally inspired dishes that are designed to pair with South Salem Winery's wines—each plate thoughtfully crafted to complement the flavors in your glass and elevate the experience.",
    ],
    image: {
      tag: 'about',
      src: '/images/optimized/about-winery.webp',
      alt: 'South Salem Winery Malbec bottle beside a cheese, prosciutto, salami, and grape board',
    },
  },
  bakery: {
    heading: 'A Bakery Case Worth the Trip',
    paragraphs: [
      "Pastry chef Tracy Kamperdyk Assue has worked with some of the world's most famous chefs throughout New York City and Westchester County. She has taken her 20 years in pastry skills to finally open up a business of her own located in the heart of Lewisboro, NY.",
      'Some of the finest restaurants such as City Limits in White Plains, River Cafe in Brooklyn, Lespinasse in Manhattan, and many more shaped her craft. She wanted to devote her love of pastries into her own establishment — everything in the case is made in-house, daily.',
    ],
    image: {
      tag: 'service-bakery',
      src: '/images/optimized/service-bakery.webp',
      alt: 'Five sugar-topped kouign-amann pastries in paper cups on a wooden tray',
    },
  },
}

export const menuFood = [
  {
    name: 'Yogurt Parfait',
    description: 'Housemade jam + granola',
    price: '$6.50',
  },
  {
    name: 'Quiche',
    description: 'Spinach, zucchini, tomatoes, scallions, Gruyère, kale, Greek',
    price: '$6.95',
  },
  {
    name: 'Organic Salad',
    description: 'Little gem, feta, olives, tomatoes, red onions, egg',
    price: '$12.95',
  },
  {
    name: 'Mozzarella',
    description: 'Tomato, basil, arugula, eggplant',
    price: '$12.95',
    isFocaccia: true,
  },
  {
    name: 'Rosemary Ham',
    description: 'Fontina, mustard mayo, arugula',
    price: '$13.95',
    isFocaccia: true,
  },
  {
    name: 'Add Prosciutto',
    description: '',
    price: '+$3.00',
    isFocaccia: true,
  },
  {
    name: 'Cheese Board',
    description: '',
    price: '$18.00',
  },
  {
    name: 'Cheese + Salumi Board',
    description: '',
    price: '$21.00',
  },
]

export const menuDrinks = [
  {
    name: 'Espresso',
    description: 'Classic shot of espresso.',
    price: '$4.00',
  },
  {
    name: 'Fresh Brew',
    description: 'House drip coffee.',
    price: '$4.00',
  },
  {
    name: 'Americano',
    description: 'Espresso with hot water.',
    price: '$4.25',
  },
  {
    name: 'Cappuccino',
    description: 'Espresso, steamed milk, rich foam.',
    price: '$4.75',
  },
  {
    name: 'Latte',
    description: 'Espresso and steamed milk.',
    price: '$5.25',
  },
  {
    name: 'Iced Coffee',
    description: 'Cold coffee over ice.',
    price: '$4.50',
  },
  {
    name: 'Iced Fresh Brew',
    description: 'Freshly brewed coffee served iced.',
    price: '$4.75',
  },
  {
    name: 'Iced Americano',
    description: 'Espresso and cold water over ice.',
    price: '$4.75',
  },
  {
    name: 'Iced Latte',
    description: 'Espresso and chilled milk.',
    price: '$5.25',
  },
  {
    name: 'Double Shot',
    description: 'Extra espresso boost.',
    price: '$4.25',
  },
  {
    name: 'Almond Milk',
    description: 'Dairy-free milk alternative.',
    price: '+$1.00',
  },
  {
    name: 'Oat Milk',
    description: 'Creamy oat milk alternative.',
    price: '+$1.00',
  },
  {
    name: 'Extra Shot',
    description: 'Add a little more espresso.',
    price: '+$1.00',
  },
  {
    name: 'Tea',
    description: 'Black • Green • Herbal • Decaf available',
    price: '$4.00',
  },
]

// PLACEHOLDER — no customer reviews were published anywhere.
export const reviews = []

export const whyChooseUs = [
  {
    title: 'A destination, not just a stop',
    description:
      "Gardenside sits inside a working greenhouse — you're sipping coffee surrounded by plants and seasonal blooms, not a strip mall.",
  },
  {
    title: 'Wine from next door',
    description:
      "Our pours come from South Salem Winery, Westchester's first micro-winery, led by local winemaker John Vuolo.",
  },
  {
    title: 'Pastry chef pedigree',
    description:
      'Chef Tracy Kamperdyk Assue brings 20 years of pastry experience from City Limits, River Cafe, and Lespinasse to every bake.',
  },
]

export const serviceAreas = ['South Salem, NY', 'Lewisboro, NY', 'Westchester County, NY']
