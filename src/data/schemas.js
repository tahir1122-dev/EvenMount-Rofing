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
  "description": "Professional roofing and building contractors serving Swindon, Wiltshire, and Somerset. Specialists in tile roofs, flat roofs, repairs, gutters, fascias and building services.",
  "priceRange": "££",
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
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "13:00"
    }
  ]
}

export const pageSchemas = {
  newRoofs: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "New Tile & Slate Roof Installation in Wiltshire",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Professional tile and slate roof installations in Wiltshire and Somerset by EverMont Roofing Ltd."
  },
  flatRoofs: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flat Roof Installation Wiltshire — GRP & EPDM",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd" },
    "areaServed": "Wiltshire and Somerset",
    "description": "GRP fibreglass, EPDM rubber and torch-on felt flat roofs in Wiltshire and Somerset."
  },
  roofRepairs: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof & Chimney Repairs in Wiltshire & Somerset",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Fast, reliable roof and chimney repairs across Wiltshire and Somerset. Emergency callouts available."
  },
  gutters: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fascias, Soffits & Guttering Wiltshire",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Professional fascia, soffit and gutter installation and replacement in Wiltshire and Somerset."
  },
  dryFix: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dry Fix Roof Upgrades Wiltshire & Somerset",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Modern dry ridge and verge roofing systems installed across Wiltshire and Somerset."
  },
  buildingServices: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Building Services Wiltshire — Walls, Patios, Garages",
    "provider": { "@type": "RoofingContractor", "name": "EverMont Roofing Ltd" },
    "areaServed": "Wiltshire and Somerset",
    "description": "Garden walls, patios, driveways and garage conversions in Wiltshire and Somerset."
  }
}

