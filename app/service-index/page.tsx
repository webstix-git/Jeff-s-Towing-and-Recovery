import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { towingServices, roadsideServices } from "@/lib/navigation";

export const metadata: Metadata = pageMetadata({
  title: "Service Index — Every Service We Offer",
  description:
    "A complete index of towing and roadside services from Jeff's Towing & Recovery, organized by category with a description of each, serving Berrien County, MI.",
  path: "/service-index",
  image: "/images/svc-towing-recovery.png",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Index", path: "/service-index" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const groups = [
  { title: "Towing Services", href: "/towing-services", items: towingServices },
  { title: "Roadside Assistance", href: "/roadside-assistance", items: roadsideServices },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Everything We Do"
        title="Service Index"
        subtitle="Every service we offer, grouped by category, with a quick description and a direct link."
        image="/images/svc-towing-recovery.png"
        imageAlt="Tow truck loading a vehicle for transport"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="index-page section" data-screen-label="Service Index">
        <div className="wrap">
          {groups.map((group) => (
            <div className="index-group" key={group.href}>
              <h2>
                <Link href={group.href}>{group.title}</Link>
              </h2>
              <div className="index-list">
                {group.items.map((item) => (
                  <Link className="index-item" href={item.href} key={item.href}>
                    <strong>
                      {item.label} <ArrowIcon />
                    </strong>
                    <p>{item.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
