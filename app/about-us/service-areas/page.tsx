import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas — Towing Across Berrien County, MI",
  description:
    "Jeff's Towing & Recovery serves Bridgman, Benton Harbor, St. Joseph, Stevensville, Lake Township, Sawyer, and surrounding Berrien County from two local dispatch locations.",
  path: "/about-us/service-areas",
  image: "/images/intro-snow.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Service Areas", path: "/about-us/service-areas" },
];

const areas = [
  { name: "Bridgman", note: "Home base on California Rd, with fast reach to the lakeshore and I-94." },
  { name: "Benton Harbor", note: "Our M-139 location keeps the north end of the county well covered." },
  { name: "St. Joseph", note: "Quick response downtown, along the bluff, and out toward the highway." },
  { name: "Stevensville", note: "Right between our two bases — usually a short hop for a truck." },
  { name: "Lake Township", note: "Familiar ground, and part of Jeff's first-responder roots." },
  { name: "Sawyer", note: "Covered on the south end, including the Red Arrow Highway corridor." },
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
        title="Covering All Of Berrien County"
        subtitle="Two locations, fast response, and the local knowledge to find you quickly."
        image="/images/intro-snow.jpg"
        imageAlt="Recovering a vehicle on a snowy Berrien County road"
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
          <div className="areas-map reveal d1" aria-label="Service area map">
            <div className="map-grid" />
            <div className="road r1" />
            <div className="road r2" />
            <div className="road r3" />
            <div className="map-pin map-a">
              <span className="dot pulse" />
              <span className="lbl">Bridgman</span>
            </div>
            <div className="map-pin map-b">
              <span className="dot" />
              <span className="lbl">Benton Harbor</span>
            </div>
            <span className="map-note">Berrien County, Michigan</span>
          </div>
        </div>
      </section>

      <section className="hub section" data-screen-label="Communities">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Communities We Serve</span>
            <h2 className="h-lg">Towns we know by name</h2>
            <p className="lead">
              We proudly serve communities throughout Berrien County and the surrounding areas,
              providing dependable towing and roadside assistance wherever drivers need help.
            </p>
          </div>
          <div className="areas-list reveal d1">
            {areas.map((area) => (
              <div className="area-tile" key={area.name}>
                <h3>{area.name}</h3>
                <p>{area.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Not Sure If You're In Range?"
        heading={
          <>
            Just Call — We&apos;ll <em>Tell You Straight.</em>
          </>
        }
        body="If you're anywhere near Berrien County, give us a ring and we'll let you know how fast we can reach you."
      />
    </SiteShell>
  );
}
