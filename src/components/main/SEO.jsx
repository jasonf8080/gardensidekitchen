import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://gardensidekitchen.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/optimized/og-image.webp`

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Gardenside Kitchen & Coffee Bar',
  image: DEFAULT_IMAGE,
  url: SITE_URL,
  telephone: '+1-917-837-1131',
  priceRange: '$$',
  servesCuisine: ['Café', 'Bakery', 'Wine Bar'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1202 NY-35',
    addressLocality: 'South Salem',
    addressRegion: 'NY',
    postalCode: '10590',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.2726,
    longitude: -73.5387,
  },
  areaServed: ['South Salem, NY', 'Lewisboro, NY', 'Westchester County, NY'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://www.instagram.com/gardensidekitchen/'],
}

/**
 * Per-page <head> management: title, meta description, canonical, Open Graph,
 * Twitter Card, and optional JSON-LD structured data.
 */
function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, includeLocalBusinessSchema = false }) {
  const canonical = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {includeLocalBusinessSchema && (
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_JSON_LD)}</script>
      )}
    </Helmet>
  )
}

export default SEO
