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
  title: "AI Policy",
  description:
    "How Jeff's Towing & Recovery uses (and doesn't use) artificial intelligence. Our commitment to a real person answering your call and accurate information online.",
  path: "/ai-policy",
  image: "/images/hero.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "AI Policy", path: "/ai-policy" },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Transparency"
        title="AI Policy"
        subtitle="Where technology helps, and where a real person always stays in charge."
        showCall={false}
        image="/images/hero.jpg"
        imageAlt="Tow truck on the road"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="prose-page section" data-screen-label="AI Policy">
        <div className="wrap">
          <div className="prose">
            <p className="prose-updated">Last updated: January 2026</p>
            <p>
              We believe in being straight with our customers, and that includes how we use
              technology. This page explains where artificial intelligence does and does not
              play a part in {site.legalName}.
            </p>

            <h2>A real person answers your call</h2>
            <p>
              When you call us, you reach a live local dispatcher — not a bot, not a virtual
              agent, and not an automated phone tree designed to keep you on hold. That has
              been true since Jeff founded the company, and it isn&apos;t changing. In an
              emergency, you deserve a human who can act.
            </p>

            <h2>How we may use AI tools</h2>
            <p>
              Behind the scenes, we may use ordinary software and AI-assisted tools to help
              with things like drafting website content, organizing schedules, or improving
              how quickly we can route a truck to you. These tools support our team; they
              never replace the judgment of the people doing the work.
            </p>

            <h2>Accuracy of our website content</h2>
            <ul>
              <li>
                Our service descriptions, pricing approach, coverage areas, and contact
                details are reviewed by our team for accuracy.
              </li>
              <li>
                Where AI tools assist in drafting content, a person checks it before it goes
                live so it reflects how we actually operate.
              </li>
              <li>
                If you ever spot something on this site that seems off, please{" "}
                <Link href="/contact-us">let us know</Link> and we&apos;ll correct it.
              </li>
            </ul>

            <h2>Your information</h2>
            <p>
              We do not feed your personal contact details into AI tools for marketing or
              resale. For the full picture of how we handle your data, see our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>Questions</h2>
            <p>
              Want to know more about how we work? Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={`tel:${site.primaryPhone.tel}`}>{site.primaryPhone.display}</a>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
