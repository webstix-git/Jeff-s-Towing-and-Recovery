/**
 * Centralized navigation structure used by the header, footer, sitemap page,
 * and service index. Keeping it here guarantees every link is routed correctly
 * and stays consistent across the site.
 */

export type NavChild = {
  label: string;
  href: string;
  /** Short description used on hub pages, the sitemap, and the service index */
  blurb?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** When set, the parent/overview page is shown as the first dropdown entry */
  overviewLabel?: string;
};

export const towingServices: NavChild[] = [
  {
    label: "24/7 Roadside Assistance",
    href: "/towing-services/24-7-roadside-assistance",
    blurb:
      "A real person answers and a truck rolls out — any hour, any weather, holidays included.",
  },
  {
    label: "Flatbed Towing",
    href: "/towing-services/flatbed-towing",
    blurb:
      "Level, damage-free transport for cars, trucks, SUVs, AWD, and low-clearance vehicles.",
  },
];

export const roadsideServices: NavChild[] = [
  {
    label: "Tire Changes",
    href: "/roadside-assistance/tire-changes",
    blurb:
      "Safe roadside spare swaps with proper traffic positioning, day or night.",
  },
  {
    label: "Jump Starts",
    href: "/roadside-assistance/jump-starts",
    blurb:
      "Dead battery? We get you running and confirm a clean restart before we leave.",
  },
  {
    label: "Fuel Delivery",
    href: "/roadside-assistance/fuel-delivery",
    blurb:
      "Out of gas between stations? We bring enough fuel to reach the nearest pump.",
  },
  {
    label: "Lockout Services",
    href: "/roadside-assistance/lockout-services",
    blurb:
      "Keys locked inside? Non-destructive entry that gets you back on the road fast.",
  },
];

export const aboutPages: NavChild[] = [
  {
    label: "Service Areas",
    href: "/about-us/service-areas",
    blurb:
      "Two locations covering Bridgman, Benton Harbor, St. Joseph, and surrounding Berrien County.",
  },
  {
    label: "Equipment & Safety",
    href: "/about-us/equipment-safety",
    blurb:
      "Well-maintained flatbeds and strict safety procedures on every call.",
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Towing Services",
    href: "/towing-services",
    overviewLabel: "Towing Services",
    children: towingServices,
  },
  {
    label: "Roadside Assistance",
    href: "/roadside-assistance",
    overviewLabel: "Roadside Assistance",
    children: roadsideServices,
  },
  {
    label: "About Us",
    href: "/about-us",
    overviewLabel: "About Us",
    children: aboutPages,
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerQuickLinks: NavChild[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Service Areas", href: "/about-us/service-areas" },
  { label: "Equipment & Safety", href: "/about-us/equipment-safety" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerServices: NavChild[] = [
  { label: "Towing Services", href: "/towing-services" },
  { label: "24/7 Roadside Assistance", href: "/towing-services/24-7-roadside-assistance" },
  { label: "Flatbed Towing", href: "/towing-services/flatbed-towing" },
  { label: "Tire Changes", href: "/roadside-assistance/tire-changes" },
  { label: "Jump Starts", href: "/roadside-assistance/jump-starts" },
  { label: "Fuel Delivery", href: "/roadside-assistance/fuel-delivery" },
  { label: "Lockout Services", href: "/roadside-assistance/lockout-services" },
];

export const footerUtilityNav: NavChild[] = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "AI Policy", href: "/ai-policy" },
  { label: "Service Index", href: "/service-index" },
];
