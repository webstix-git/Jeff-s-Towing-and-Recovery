import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Jeff's Towing & Recovery collects, uses, and protects the information you share when you call or contact us. Read our privacy practices.",
  path: "/privacy-policy",
  image: "/images/hero.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Your Privacy"
        title="Privacy Policy"
        subtitle="What we collect, why, and how we handle it."
        showCall={false}
        image="/images/hero.jpg"
        imageAlt="Tow truck on the road"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="prose-page section" data-screen-label="Privacy Policy">
        <div className="wrap">
          <div className="prose">
            <p className="prose-updated">Last updated: January 2026</p>
            <p>
              This policy explains how {site.legalName} handles the information you provide
              when you call us, send a message through this website, or otherwise get in
              touch. We keep this simple because our business is simple: we tow vehicles and
              help drivers, and we only collect what we need to do that well.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you contact us by phone or through our online form, you may share details
              such as your name, phone number, email address, vehicle information, and your
              location. We collect this so we can dispatch help, give you an accurate quote,
              and follow up if needed.
            </p>
            <p>
              Like most websites, basic technical information (such as your browser type and
              general usage) may be logged by our hosting provider for security and
              performance. We do not sell this information.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your call or message and dispatch the service you need.</li>
              <li>To quote pricing and arrange a tow, recovery, or roadside visit.</li>
              <li>To follow up about a job or answer a question you&apos;ve asked.</li>
              <li>To keep our website and operations secure.</li>
            </ul>

            <h2>How we share information</h2>
            <p>
              We do not sell or rent your personal information. We only share it when it&apos;s
              necessary to provide the service you requested (for example, coordinating with
              a repair shop you&apos;ve asked us to deliver your vehicle to) or when required by
              law.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep contact and job records only as long as needed for our business and
              legal purposes, then dispose of them responsibly.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us what information we have about you, request that we correct it,
              or ask us to delete it where we&apos;re able to. To make a request, just{" "}
              <Link href="/contact-us">contact us</Link>.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={`tel:${site.primaryPhone.tel}`}>{site.primaryPhone.display}</a>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
