import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import {
  towingServices,
  roadsideServices,
  aboutPages,
} from "@/lib/navigation";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap — All Pages",
  description:
    "A full list of every page on the Jeff's Towing & Recovery website, from services and roadside assistance to company information and contact.",
  path: "/sitemap",
  image: "/images/hero.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Sitemap", path: "/sitemap" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Towing Services",
    links: [{ label: "Towing Services Overview", href: "/towing-services" }, ...towingServices],
  },
  {
    title: "Roadside Assistance",
    links: [
      { label: "Roadside Assistance Overview", href: "/roadside-assistance" },
      ...roadsideServices,
    ],
  },
  {
    title: "About Us",
    links: [{ label: "About Us Overview", href: "/about-us" }, ...aboutPages],
  },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Find Your Way"
        title="Sitemap"
        subtitle="Every page on the site, in one place."
        image="/images/hero.jpg"
        imageAlt="Tow truck on a Berrien County road"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="index-page section" data-screen-label="Sitemap">
        <div className="wrap">
          {groups.map((group) => (
            <div className="index-group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="index-simple">
                {group.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <ArrowIcon />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
