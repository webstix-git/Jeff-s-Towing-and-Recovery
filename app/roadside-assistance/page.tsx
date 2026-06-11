import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import Breadcrumbs, { type Crumb } from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import FaqLink from "@/components/common/FaqLink";
import JsonLd from "@/components/common/JsonLd";
import PhoneIcon from "@/components/common/PhoneIcon";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { roadsideServices } from "@/lib/navigation";
import { serviceContent } from "@/lib/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Roadside Assistance in Berrien County, MI",
  description:
    "Tire changes, jump starts, fuel delivery, and lockout service across Bridgman, Benton Harbor, and Berrien County. Fast, local, 24/7 roadside help that comes to you.",
  path: "/roadside-assistance",
  image: "/images/svc-roadside-assistance.png",
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Roadside Assistance", path: "/roadside-assistance" },
];

const benefits = [
  {
    title: "Live Local Dispatch",
    text: "A real person from right here answers and sends help — never a national call center or an automated phone tree.",
  },
  {
    title: "Available 24/7",
    text: "Tire, battery, fuel, or lockout trouble doesn't keep daytime hours, so we answer and roll out every hour of every day.",
  },
  {
    title: "We Come To You",
    text: "Stay safe with your vehicle. We bring the tools, the spare know-how, and the fuel directly to your location.",
  },
  {
    title: "Up-Front Pricing",
    text: "You hear a fair price before a truck leaves the yard — no late-night surcharges sprung on you at the scene.",
  },
  {
    title: "Fast County-Wide Reach",
    text: "Bases in Bridgman and Benton Harbor keep a truck close, with most calls reached in under 30 minutes.",
  },
  {
    title: "Tow-Ready If Needed",
    text: "If the quick fix isn't enough, we can tow your vehicle to a shop so it's handled properly — no second call required.",
  },
];

const whyPoints = [
  {
    title: "First-Responder Founded",
    text: "Started by a former police officer and firefighter, with safe roadside habits on every call.",
  },
  {
    title: "Local & Family-Run",
    text: "You reach neighbors who know these roads, not a dispatch desk three states away.",
  },
  {
    title: "Honest, Up-Front Pricing",
    text: "Fair quotes given before we dispatch — what we say is what you pay.",
  },
  {
    title: "Respect On Every Call",
    text: "No judgment and no fuss, whether it's a flat at noon or a lockout at midnight.",
  },
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

/** Pull a child service's hero image + alt from the central content store. */
function cardImage(href: string) {
  const slug = href.split("/").pop() ?? "";
  const match = serviceContent[slug];
  return {
    image: match?.heroImage ?? "/images/hero.jpg",
    alt: match?.heroImageAlt ?? site.legalName,
  };
}

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Roadside Assistance",
          itemListElement: roadsideServices.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.label,
            url: `${site.url}${s.href}`,
          })),
        }}
      />

      <section className="svc-page-hero hero" data-screen-label="Hub Hero">
        <div className="hero-bg">
          <img src="/images/svc-roadside-assistance.png" alt="Jeff's Towing flatbed truck ready for roadside assistance" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-inner">
          <span className="hero-eyebrow">
            <span className="pulse-dot" />
            On-Site Help · Available 24/7
          </span>
          <h1 className="h-xxl" style={{ fontSize: "clamp(40px, 5.4vw, 76px)" }}>
            Roadside Help For The Everyday Stuff
          </h1>
          <p className="hero-sub">
            Flat tire, dead battery, empty tank, or keys locked inside — we come to you and get you
            going again.
          </p>
          <div className="hero-actions">
            <a className="btn btn--call btn--lg" href={`tel:${site.primaryPhone.tel}`}>
              <PhoneIcon />
              Call {site.primaryPhone.display}
            </a>
          </div>
        </div>
      </section>

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="section" data-screen-label="Overview">
        <div className="wrap">
          <div className="two-ways-section">
            <div className="content section-head reveal">
              <span className="eyebrow">Roadside Assistance</span>
              <h2 className="h-lg">The fixes that get you back on your way</h2>
              <p className="lead">
                Not every roadside problem needs a tow. A lot of the time it&apos;s a tire, a battery,
                a locked door, or a dry tank standing between you and the rest of your day. These are
                the calls we handle on the spot, anywhere across Berrien County.
              </p>
              <p className="lead">
                Choose the service that fits what&apos;s happening below, or just call and describe
                your situation — a local dispatcher will figure out the right help and send a truck
                your way with an honest ETA.
              </p>
            </div>
            <div className="image reveal d1">
              <img
                src="/images/roadside-assistance-overview.png"
                alt="Jeff's Towing wrecker truck ready for roadside assistance calls"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="benefits section" data-screen-label="Service Benefits">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Service Benefits</span>
            <h2 className="h-lg">Why drivers keep our number saved</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card reveal" key={b.title}>
                <span className="benefit-idx">{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" data-screen-label="Emergency Assistance">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow on-dark">Emergency Assistance</span>
            <h2 className="h-lg">Stranded right now? Here&apos;s what to do</h2>
            <p className="lead">
              If you&apos;re stuck on the shoulder, a few simple steps keep you safe until our truck
              arrives. Call us first — then settle in where it&apos;s safest.
            </p>
          </div>
          <ol className="process-steps reveal d1">
            <li>
              <span className="step-num">1</span>
              <div>
                <h3>Get to safety</h3>
                <p>Pull as far off the road as you can, switch on your hazard lights, and stay buckled inside if traffic is close.</p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <h3>Call for dispatch</h3>
                <p>Reach a live local dispatcher day or night. Share your location — a mile marker, cross street, or landmark helps us reach you faster.</p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <h3>Flag anything urgent</h3>
                <p>Tell us right away if a child or pet is locked inside, or if you&apos;re in a dangerous spot, and we&apos;ll prioritize the call.</p>
              </div>
            </li>
            <li>
              <span className="step-num">4</span>
              <div>
                <h3>Wait for your ETA</h3>
                <p>We give you a realistic arrival time and roll the closest truck. Stay put with your vehicle until we get there.</p>
              </div>
            </li>
          </ol>
          <div className="reveal d2" style={{ marginTop: "30px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {site.phones.map((phone) => (
              <a key={phone.tel} className="btn btn--call btn--lg" href={`tel:${phone.tel}`}>
                <PhoneIcon />
                {phone.label}: {phone.display}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hub section" data-screen-label="Roadside Services">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Explore</span>
            <h2 className="h-lg">Roadside services we handle</h2>
            <p className="lead">
              Each service has its own page with the full details, pricing approach, and what to
              expect from the call.
            </p>
          </div>

          <div className="hub-grid">
            {roadsideServices.map((service) => {
              const { image, alt } = cardImage(service.href);
              return (
                <Link className="hub-card reveal" href={service.href} key={service.href}>
                  <div className="hub-card-media">
                    <img src={image} alt={alt} loading="lazy" />
                  </div>
                  <div className="hub-card-body">
                    <h3>{service.label}</h3>
                    <p>{service.blurb}</p>
                    <span className="go">
                      Learn More <ArrowIcon />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why section" data-screen-label="Why Choose Us">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-intro reveal">
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="h-lg">Local roadside help you can count on</h2>
              <p className="lead">
                When you&apos;re stranded, you don&apos;t need a call center three states away — you
                need a local crew that knows these roads and answers the phone.
              </p>
              <p className="lead">
                For over 20 years, drivers across Berrien County have trusted us to show up fast,
                charge fairly, and treat them with respect.
              </p>
              <a className="btn btn--call" href={`tel:${site.primaryPhone.tel}`}>
                <PhoneIcon />
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

      <FaqLink />

      <CtaSection />
    </SiteShell>
  );
}
