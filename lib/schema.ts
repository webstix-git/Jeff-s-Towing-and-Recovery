import { SITE_URL, site } from "./site";

/**
 * Structured data (JSON-LD) generators. All values are pulled from the central
 * site config so schema always matches the visible contact information.
 */

const absolute = (path: string) => `${SITE_URL}${path}`;

/** One AutomotiveBusiness node per physical location. */
function locationNodes() {
  return site.locations.map((loc) => ({
    "@type": "AutomotiveBusiness",
    "@id": absolute(`/#${loc.id}`),
    name: `${site.legalName} — ${loc.name}`,
    image: absolute("/images/hero.jpg"),
    url: SITE_URL,
    telephone: loc.phone.tel,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
  }));
}

/** Site-wide LocalBusiness / Organization graph, rendered in the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absolute("/#organization"),
        name: site.legalName,
        url: SITE_URL,
        email: site.email,
        telephone: site.primaryPhone.tel,
        logo: absolute("/images/logo.png"),
        sameAs: [site.social.facebook],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
        },
      },
      ...locationNodes(),
      {
        "@type": "WebSite",
        "@id": absolute("/#website"),
        url: SITE_URL,
        name: site.legalName,
        publisher: { "@id": absolute("/#organization") },
      },
    ],
  };
}

/** Service schema for an individual service page. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absolute(input.path),
    serviceType: input.name,
    provider: {
      "@type": "AutomotiveBusiness",
      name: site.legalName,
      telephone: site.primaryPhone.tel,
      email: site.email,
    },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.primaryPhone.tel,
        contactType: "dispatch",
      },
    },
  };
}

/** FAQPage schema from a list of Q&A pairs. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}
