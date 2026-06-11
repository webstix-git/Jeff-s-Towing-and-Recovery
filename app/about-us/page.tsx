import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { aboutPages } from "@/lib/navigation";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Jeff's Towing & Recovery — First-Responder Founded",
  description:
    "Founded in 2003, Jeff's Towing & Recovery is a family-run, first-responder founded towing company that has served Berrien County for over two decades. Meet the team, the values, and the story behind the trucks.",
  path: "/about-us",
  image: "/images/legacy.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneRingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12l9-9 9 9-9 9-9-9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 20s-7-4.3-9.2-8.4C1.3 8.5 2.8 5.5 6 5.5c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3.2 0 4.7 3 3.2 6.1C19 15.7 12 20 12 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const commitments = [
  {
    icon: <PhoneRingIcon />,
    title: "We answer every call",
    text: "A real local person picks up, day or night, holidays included — no call centers and no automated runaround.",
  },
  {
    icon: <TagIcon />,
    title: "Fair pricing, up front",
    text: "You hear an honest quote before a truck rolls, with no emergency surcharges sprung on you at the scene.",
  },
  {
    icon: <ShieldIcon />,
    title: "Your vehicle, protected",
    text: "Licensed, insured operators and damage-free flatbeds mean your car arrives in the same shape it left.",
  },
  {
    icon: <HeartIcon />,
    title: "Respect, every time",
    text: "Stranded is stressful enough. We treat you and your vehicle with genuine care from the first ring to drop-off.",
  },
];

const whyPoints = [
  {
    title: "Local & Family-Run",
    text: "You reach neighbors who know these roads, not a national dispatch line.",
  },
  {
    title: "20+ Years On The Road",
    text: "Two decades of recoveries in every Michigan condition, from lake-effect snow to summer heat.",
  },
  {
    title: "First-Responder Standards",
    text: "Founded by a former officer and firefighter, with safe procedures on every single call.",
  },
  {
    title: "Honest, Up-Front Pricing",
    text: "Fair quotes given before we dispatch — what we say is what you pay.",
  },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <SubPageHero
        eyebrow="Family-Run · Berrien County"
        title="The Story Behind The Trucks"
        subtitle="Founded by a first responder, run like a family, and built on showing up when it counts."
        image="/images/legacy.jpg"
        imageAlt="Flatbed towing a vehicle in winter conditions"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="intro section" data-screen-label="Our Story">
        <div className="wrap intro-grid">
          <div className="intro-media reveal">
            <span className="accent" />
            <div className="frame">
              <img src="/images/intro-snow.jpg" alt="Recovering a car in a Michigan snowstorm" loading="lazy" />
            </div>
            <div className="intro-stat">
              <div className="is-num">{site.yearsInBusiness}</div>
              <div className="is-lbl">Years on Berrien County roads</div>
            </div>
          </div>
          <div className="intro-copy reveal d1">
            <span className="eyebrow">Who We Are</span>
            <h2 className="h-lg">A local crew that treats people right</h2>
            <p className="lead">
              Jeff didn&apos;t come up through the towing business. He served his community
              first — as an officer with the Bridgman City Police, then with the Lake
              Township Fire Department. When he founded {site.name} in {site.foundedYear}, he
              brought that same sense of duty to the roadside.
            </p>
            <p className="lead">
              More than two decades later, we&apos;re still family-run and still operating on
              the standard he set: answer every call, quote a fair price, and treat every
              driver and their vehicle with respect. Serving Berrien County since{" "}
              {site.foundedYear} has earned us a reputation built one honest job at a time —
              and the trust of drivers who keep our number saved for the next time they&apos;re
              stranded. Two locations in Bridgman and Benton Harbor keep us close when you
              need us.
            </p>
            <div className="intro-sign">
              <img src="/images/emblem.png" alt={`${site.legalName} emblem`} />
              <p>
                <strong>{site.legalName}</strong>
                Bridgman &amp; Benton Harbor, Michigan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="By The Numbers">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">By The Numbers</span>
            <h2 className="h-lg">What two decades looks like</h2>
          </div>
          <div className="stat-row reveal d1">
            <div className="stat-card">
              <div className="stat-num">{site.yearsInBusiness}</div>
              <div className="stat-lbl">Years serving the county</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-lbl">Local dispatch locations</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">24/7</div>
              <div className="stat-lbl">Every day of the year</div>
            </div>
          </div>
        </div>
      </section>

      <section className="process section" data-screen-label="Mission & Values">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow on-dark">Mission &amp; Values</span>
            <h2 className="h-lg">What we stand for on every call</h2>
            <p className="lead">
              Our mission has never changed: answer every call, quote a fair price, and treat
              every driver and their vehicle with respect. These are the values Jeff built the
              company on, and the ones the family still runs on today.
            </p>
          </div>
          <div className="values reveal d1">
            <div className="value">
              <span className="v-num">1</span>
              <div className="v-lbl">Fairness</div>
              <p>Honest pricing, quoted up front — no emergency surcharges.</p>
            </div>
            <div className="value">
              <span className="v-num">2</span>
              <div className="v-lbl">Reliability</div>
              <p>We answer every call and show up when we say we will.</p>
            </div>
            <div className="value">
              <span className="v-num">3</span>
              <div className="v-lbl">Respect</div>
              <p>You and your vehicle are treated with genuine care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="Service Commitment">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Service Commitment</span>
            <h2 className="h-lg">The promise behind every dispatch</h2>
            <p className="lead">
              When you call Jeff&apos;s Towing &amp; Recovery, here&apos;s what you can count on —
              not as fine print, but as the way we&apos;ve done business for over twenty years.
            </p>
          </div>
          <div className="feature-list reveal d1">
            {commitments.map((item) => (
              <div className="feature-item" key={item.title}>
                <span className="fi-ico">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="Community Focus">
        <div className="wrap">
          <div className="areas-grid">
            <div className="areas-copy reveal">
              <span className="eyebrow">Local Community Focus</span>
              <h2 className="h-lg">Rooted in Berrien County</h2>
              <p className="lead">
                This isn&apos;t a franchise passing through. Jeff served this community first as a
                Bridgman City Police officer and a Lake Township firefighter, and that sense of duty
                still shapes how we show up. From two local bases in Bridgman and Benton Harbor, we
                cover the towns and back roads we live on ourselves.
              </p>
              <p className="lead">
                Knowing the area means faster response and fewer wrong turns when you&apos;re waiting
                on the shoulder. See exactly where we go on our{" "}
                <Link href="/about-us/service-areas">service areas</Link> page.
              </p>
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
        </div>
      </section>

      <section className="why section" data-screen-label="Why Choose Us">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-intro reveal">
              <span className="eyebrow">Why Customers Choose Us</span>
              <h2 className="h-lg">Why drivers choose Jeff&apos;s Towing &amp; Recovery</h2>
              <p className="lead">
                When you&apos;re stranded, you don&apos;t need a call center three states away — you
                need a local crew that knows these roads and answers the phone. For over 20 years,
                that&apos;s exactly what Berrien County drivers have gotten from us.
              </p>
              <a className="btn btn--call" href={`tel:${site.primaryPhone.tel}`}>
                <PhoneRingIcon />
                Call {site.primaryPhone.display}
              </a>
            </div>
            <ul className="why-list reveal d1">
              {whyPoints.map((pt) => (
                <li key={pt.title}>
                  <CheckIcon />
                  <div>
                    <strong>{pt.title}</strong>
                    <p>{pt.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hub section" data-screen-label="Learn More">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Get To Know Us</span>
            <h2 className="h-lg">Take a closer look</h2>
          </div>
          <div className="index-list">
            {aboutPages.map((page) => (
              <Link className="index-item" href={page.href} key={page.href}>
                <strong>
                  {page.label} <ArrowIcon />
                </strong>
                <p>{page.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Glad To Help"
        heading={
          <>
            Have A Vehicle That Needs <em>Moving?</em>
          </>
        }
        body="Whether it's an emergency or a planned tow, you'll get a real person and an honest answer."
      />
    </SiteShell>
  );
}
