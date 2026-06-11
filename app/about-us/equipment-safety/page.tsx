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

const capabilities = [
  "Flatbeds serviced and inspected on a regular schedule",
  "Soft straps and wheel tie-downs that never touch your paint",
  "Winch and recovery gear for ditches, driveways, and tight angles",
  "Set up for AWD, lowered, low-clearance, and luxury vehicles",
  "Licensed, insured, and trained operators on every truck",
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Equipment & Safety"
        title="The Right Gear, Used The Right Way"
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
                The backbone of what we do is a clean, level flatbed — but a truck only earns its
                keep when it&apos;s cared for. Ours are serviced and inspected on a regular schedule,
                so the winch pulls, the deck tilts, and the straps hold the moment a call comes in.
              </p>
              <p className="lead">
                Beyond hauling, we carry the recovery tools for the awkward jobs: a car nosed into a
                ditch, parked at a brutal angle, or sitting low enough that a careless load would do
                more harm than the breakdown itself.
              </p>
              <ul className="svc-bullets">
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
