import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import ServiceAreaMap from "@/components/common/ServiceAreaMap";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas — Towing Across Southwest Michigan, MI",
  description:
    "Jeff's Towing & Recovery serves Bridgman, Benton Harbor, St. Joseph, Stevensville, Lake Township, Sawyer, and surrounding Southwest Michigan from two local dispatch locations.",
  path: "/about-us/service-areas",
  image: "/images/intro-snow.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Service Areas", path: "/about-us/service-areas" },
];

const communities = [
  "Bridgman",
  "Benton Harbor",
  "St. Joseph",
  "Stevensville",
  "Lake Township",
  "Sawyer",
  "New Buffalo",
  "Lakeside",
  "Harbert",
  "Three Oaks",
  "Buchanan",
  "Niles",
  "Baroda",
  "Berrien Springs",
  "Eau Claire",
  "Coloma",
  "Watervliet",
  "Hartford",
  "South Haven",
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Where We Go"
        title="Service Areas"
        subtitle="Two locations, fast response, and the local knowledge to find you quickly."
        image="/images/intro-snow.jpg"
        imageAlt="Recovering a vehicle on a snowy Southwest Michigan road"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="areas section" data-screen-label="Locations">
        <div className="wrap areas-grid">
          <div className="areas-copy reveal">
            <span className="eyebrow">Two Local Bases</span>
            <h2 className="h-xl">Close When You Need Us</h2>
            <p className="lead">
              Having trucks in both Bridgman and Benton Harbor cuts down the distance between
              your call and our arrival — which matters most when you&apos;re stuck on the shoulder
              in bad weather.
            </p>
            <div className="loc-cards">
              {site.locations.map((loc) => (
                <a
                  className="loc-card"
                  key={loc.id}
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="pin">
                    <PinIcon />
                  </span>
                  <div>
                    <h4>{loc.name}</h4>
                    <p>
                      {loc.street}
                      <br />
                      {loc.city}, {loc.state} {loc.zip}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="area-chips">
              {site.serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
              <span>+ Surrounding</span>
            </div>
          </div>
          <ServiceAreaMap className="reveal d1" />
        </div>
      </section>

      <section className="hub section section--surface" data-screen-label="Communities">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Communities We Serve</span>
            <h2 className="h-lg">Towns we know by name</h2>
            <p className="lead">
              We proudly serve communities throughout Southwest Michigan and the surrounding areas,
              providing dependable towing and roadside assistance wherever drivers need help.
            </p>
          </div>
          <ul className="communities-grid reveal d1" aria-label="Communities we serve">
            {communities.map((name) => (
              <li className="community-item" key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        eyebrow="Not Sure If You're In Range?"
        heading={
          <>
            Just Call — We&apos;ll <em>Tell You Straight.</em>
          </>
        }
        body="If you're anywhere near Southwest Michigan, give us a ring and we'll let you know how fast we can reach you."
      />
    </SiteShell>
  );
}
