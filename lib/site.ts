/**
 * Single source of truth for all Jeff's Towing & Recovery business information.
 * Every component, page, CTA, form, schema, header, and footer reads from here.
 * Nothing about the business (name, phones, email, hours, addresses) is hardcoded
 * anywhere else in the codebase.
 */

export type PhoneNumber = {
  /** Location label this number belongs to */
  label: string;
  /** Human-readable display string, e.g. "(269) 465-6142" */
  display: string;
  /** E.164 value for tel: links, e.g. "+12694656142" */
  tel: string;
};

export type Location = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  /** Phone that rings this location */
  phone: PhoneNumber;
  /** Latitude/longitude for schema */
  geo: { lat: number; lng: number };
  /** Direct Google Maps link for this location */
  mapsUrl: string;
};

const bridgmanPhone: PhoneNumber = {
  label: "Bridgman",
  display: "(269) 465-6142",
  tel: "+12694656142",
};

const bentonHarborPhone: PhoneNumber = {
  label: "Benton Harbor",
  display: "(269) 934-7133",
  tel: "+12699347133",
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jeffstowing.com";

export const site = {
  name: "Jeff's Towing & Recovery",
  legalName: "Jeff's Towing & Recovery LLC",
  tagline: "24/7 Towing & Roadside Assistance",
  description:
    "Family-run, first-responder founded towing & recovery serving Berrien County, Michigan. 24/7 emergency roadside assistance, flatbed towing, lockouts, jump starts, tire changes, and fuel delivery.",
  foundedNote: "Founded by a former police officer and firefighter.",
  /** Year the company was established */
  foundedYear: 2003,
  yearsInBusiness: "20+",
  url: SITE_URL,

  email: "jeffstowing@comcast.net",

  /** Primary number used for single-CTA placements (header button, sticky bar) */
  primaryPhone: bridgmanPhone,
  phones: [bridgmanPhone, bentonHarborPhone] as PhoneNumber[],

  hours: {
    /** Short availability badge used across heroes/eyebrows */
    badge: "Available 24 / 7",
    /** Compact label for "Call Us {cta}" CTAs */
    cta: "24 / 7",
    /** Office hours, line by line, for the footer */
    office: [
      "Mon – Fri: 8:00 AM – 5:00 PM",
      "Sat & Sun: By Appointment Only",
    ],
    /** Emergency availability — footer displays as two lines */
    emergencyLines: ["Emergency Services Available", "24/7 Towing"],
    /** One-line summary for the contact page */
    long: "Mon – Fri 8:00 AM – 5:00 PM, Sat & Sun by appointment. Emergency 24/7 towing available.",
  },

  locations: [
    {
      id: "bridgman",
      name: "Bridgman",
      street: "9211 California Rd",
      city: "Bridgman",
      state: "MI",
      zip: "49106",
      phone: bridgmanPhone,
      geo: { lat: 41.946, lng: -86.557 },
      mapsUrl: "https://maps.app.goo.gl/om8sg5usRz43dy2U7",
    },
    {
      id: "benton-harbor",
      name: "Benton Harbor",
      street: "722 M-139",
      city: "Benton Harbor",
      state: "MI",
      zip: "49022",
      phone: bentonHarborPhone,
      geo: { lat: 42.116, lng: -86.443 },
      mapsUrl: "https://maps.app.goo.gl/GEJNAxhEfDytu52m9",
    },
  ] as Location[],

  county: "Berrien County",
  region: "Southwest Michigan",

  /** Communities served — used for local SEO context, not keyword stuffing */
  serviceAreas: [
    "Bridgman",
    "St. Joseph",
    "Benton Harbor",
    "Stevensville",
    "Lake Township",
    "Sawyer",
  ],

  social: {
    facebook: "https://www.facebook.com/",
    /** Opens the Benton Harbor location on Google Maps with reviews visible */
    googleReviews: "https://maps.app.goo.gl/GEJNAxhEfDytu52m9",
  },

  rating: { value: "4.6", max: "5.0", count: "13" },
} as const;

export const primaryTelHref = `tel:${site.primaryPhone.tel}`;
export const emailHref = `mailto:${site.email}`;
