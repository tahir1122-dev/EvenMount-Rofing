// src/data/schemas.js
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "EverMont Roofing Ltd",
  "url": "https://evermontroofing.co.uk",
  "telephone": "+447533356557",
  "email": "info@evermontroofing.co.uk",
  "logo": "https://evermontroofing.co.uk/evermont-logo-new.png",
  "image": "https://evermontroofing.co.uk/evermont-logo-new.png",
  "description": "Professional roofing and building contractors serving Swindon and Wiltshire. Specialists in tile roofs, flat roofs, repairs, gutters, fascias and building services.",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Swindon",
    "addressRegion": "Wiltshire",
    "addressCountry": "GB",
    "postalCode": "SN1"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5558",
    "longitude": "-1.7797"
  },
  "areaServed": [
    { "@type": "City", "name": "Swindon" },
    { "@type": "AdministrativeArea", "name": "Wiltshire" },
    { "@type": "AdministrativeArea", "name": "Somerset" },
    { "@type": "City", "name": "Chippenham" },
    { "@type": "City", "name": "Trowbridge" },
    { "@type": "City", "name": "Bath" },
    { "@type": "City", "name": "Salisbury" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Tile & Slate Roofs" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Roof Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repairs & Chimney Repointing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fascias, Soffits & Guttering" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dry Fix Upgrades" } }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://www.tiktok.com"
  ]
}

export const pageSchemas = {
  newRoofs: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "New Tile & Slate Roof Installation in Wiltshire",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Professional tile and slate roof installations in Wiltshire and Somerset by EverMont Roofing Ltd.",
    "url": "https://evermontroofing.co.uk/roofing-services/new-roofs",
    "serviceType": "Roof Installation"
  },
  flatRoofs: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flat Roof Installation Wiltshire — GRP & EPDM",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "GRP fibreglass, EPDM rubber and torch-on felt flat roofs in Wiltshire and Somerset.",
    "url": "https://evermontroofing.co.uk/roofing-services/flat-roofs",
    "serviceType": "Flat Roof Installation"
  },
  roofRepairs: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof & Chimney Repairs in Wiltshire & Somerset",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Fast, reliable roof and chimney repairs across Wiltshire and Somerset. Emergency callouts available.",
    "url": "https://evermontroofing.co.uk/roofing-services/roof-repairs",
    "serviceType": "Roof Repair"
  },
  gutters: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fascias, Soffits & Guttering Wiltshire",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Professional fascia, soffit and gutter installation and replacement in Wiltshire and Somerset.",
    "url": "https://evermontroofing.co.uk/roofing-services/gutters",
    "serviceType": "Gutter & Fascia Installation"
  },
  dryFix: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dry Fix Roof Upgrades Wiltshire & Somerset",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Modern dry ridge and verge roofing systems installed across Wiltshire and Somerset.",
    "url": "https://evermontroofing.co.uk/roofing-services/dry-fix",
    "serviceType": "Dry Fix Roofing"
  },
  buildingServices: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Building Services Wiltshire — Walls, Patios, Garages",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Garden walls, patios, driveways and garage conversions in Wiltshire and Somerset.",
    "url": "https://evermontroofing.co.uk/building-services",
    "serviceType": "Building & Construction"
  },
  wallCladding: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wall Cladding Installation Wiltshire & Somerset",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd", "telephone": "+447533356557" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Professional composite and uPVC wall cladding installation in Wiltshire and Somerset by EverMont Roofing Ltd.",
    "url": "https://evermontroofing.co.uk/wall-cladding",
    "serviceType": "Wall Cladding Installation"
  },
  gallery: {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "EverMont Roofing Ltd — Project Gallery",
    "description": "Photos of completed roofing and building projects by EverMont Roofing Ltd across Wiltshire and Somerset.",
    "url": "https://evermontroofing.co.uk/gallery",
    "author": { "@type": "Organization", "name": "EverMont Roofing Ltd" }
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact EverMont Roofing Ltd",
    "description": "Get a free roofing or building services quote from EverMont Roofing Ltd in Wiltshire and Somerset.",
    "url": "https://evermontroofing.co.uk/contact",
    "mainEntity": {
      "@type": "RoofingContractor",
      "name": "EverMont Roofing Ltd",
      "telephone": "+447533356557",
      "email": "info@evermontroofing.co.uk"
    }
  }
}

