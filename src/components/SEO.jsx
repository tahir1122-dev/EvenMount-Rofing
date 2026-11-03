// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://evermontroofing.co.uk'
const DEFAULT_TITLE = 'Professional Roofers in Wiltshire | EverMont Roofing Ltd'
const DEFAULT_DESC = 'EverMont Roofing Ltd — expert roofing and building contractors in Swindon and Wiltshire. Free quotes available. Call 07533 356557.'
const DEFAULT_IMAGE = `${SITE_URL}/evermont-logo-new.png`
const DEFAULT_KEYWORDS = 'roofers Wiltshire, roofing Swindon, EverMont Roofing, new roofs Wiltshire, flat roofs Wiltshire, roof repairs, gutters fascias soffits, dry fix roofing, building services Wiltshire'

export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical = '/',
  schema,
}) {
  const fullTitle = title ? `${title} | EverMont Roofing Ltd` : DEFAULT_TITLE
  const canonicalUrl = `${SITE_URL}${canonical}`

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="EverMont Roofing Ltd — Professional Roofers in Wiltshire" />
      <meta property="og:site_name" content="EverMont Roofing Ltd" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content="EverMont Roofing Ltd — Professional Roofers in Wiltshire" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

