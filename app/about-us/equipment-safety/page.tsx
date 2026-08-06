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
  title: "Equipment & Safety — How We Protect Your Vehicle",
  description:
    "Well-maintained flatbeds, proper tie-down gear, and strict safety procedures on every call. How Jeff's Towing & Recovery keeps your vehicle and our crew safe.",
  path: "/about-us/equipment-safety",
  image: "/images/svc-flatbed-towing.png",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Equipment & Safety", path: "/about-us/equipment-safety" },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Equipment & Safety"
        title="Equipment & Safety"
        subtitle="Good equipment is only half of it. The other half is the careful habits behind every load."
        image="/images/svc-flatbed-towing.png"
        imageAlt="Vehicle secured on a flatbed tow truck with tie-down straps"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="svc-detail section" data-screen-label="Equipment">
        <div className="wrap">
          <div className="svc-detail-grid reveal">
            <div className="svc-detail-media">
              <div className="frame">
                <img
                  src="/images/svc-flatbed-towing.png"
                  alt="Vehicle secured on a well-maintained flatbed tow truck"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="svc-detail-copy">
              <span className="eyebrow">Our Equipment</span>
              <h2 className="h-lg">The right gear, ready to roll</h2>
              <p className="lead">
                A flatbed is only as good as the care behind it. We keep ours clean, level, and
                checked on a regular schedule — so when you call, the winch, the deck, and the straps
                are ready to do their job.
              </p>
              <p className="lead">
                Not every tow is a straight pull onto the highway. Sometimes the car is in a ditch,
                wedged at a bad angle, or sitting so low that the wrong approach would scratch more
                than it helps. That&apos;s why we carry the recovery gear for the hard ones, not just
                the easy loads.
              </p>
              <p className="lead">
                Soft straps and wheel tie-downs keep chains off your paint. We handle AWD, lowered,
                low-clearance, and luxury vehicles with the same care — and a licensed, insured
                operator is on every truck that rolls out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process section" data-screen-label="Safety First">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow on-dark">Safety First</span>
            <h2 className="h-lg">Why the careful approach pays off</h2>
            <p className="lead">
              A scratched bumper or a strained drivetrain almost always traces back to rushed work
              or worn-out gear — not bad luck. Since {site.foundedYear} we&apos;ve run the same
              disciplined routine on every flatbed and recovery call, so your vehicle is protected,
              our operators stay safe, and nothing on the truck is left to chance.
            </p>
          </div>
          <ol className="process-steps reveal d1">
            <li>
              <span className="step-num">1</span>
              <div>
                <h3>Equipment checked first</h3>
                <p>Winch, cables, soft straps, wheel ties, and warning lights are inspected before the truck rolls — well-kept gear is what keeps a load secure when it matters.</p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <h3>Method matched to the vehicle</h3>
                <p>AWD, lowered, or low-clearance, we set the right deck angle and recovery technique so the drivetrain, bumpers, and undertray are never put at risk.</p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <h3>Loaded level and locked down</h3>
                <p>Slow winching onto a flat deck and soft straps at the wheels mean no chains on the body, no contact damage, and nothing shifting in transit.</p>
              </div>
            </li>
            <li>
              <span className="step-num">4</span>
              <div>
                <h3>Verified before we roll</h3>
                <p>Every tie-down gets a second check and the route is planned before the wheels turn — a habit two decades of recoveries have made automatic.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <CtaSection
        eyebrow="Careful Hands, Fair Price"
        heading={
          <>
            Need A Tow Done <em>Properly?</em>
          </>
        }
        body="Call for a flatbed or recovery and we'll handle your vehicle like it's our own."
      />
    </SiteShell>
  );
}
