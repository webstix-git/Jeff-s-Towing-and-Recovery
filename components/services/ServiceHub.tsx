import Link from "next/link";
import Breadcrumbs, { type Crumb } from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import FaqLink from "@/components/common/FaqLink";
import JsonLd from "@/components/common/JsonLd";
import PhoneIcon from "@/components/common/PhoneIcon";
import { site } from "@/lib/site";
import { type NavChild } from "@/lib/navigation";
import { serviceContent } from "@/lib/content/services";
import { breadcrumbSchema } from "@/lib/schema";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12l4 4 10-10"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type Highlight = { title: string; text: string };
export type WhyChoose = {
  heading: string;
  intro: string[];
  points: { title: string; text: string }[];
};

type Props = {
  path: string;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  introHeading: string;
  intro: string[];
  /** Optional image shown to the right of the intro copy */
  introImage?: string;
  introImageAlt?: string;
  services: NavChild[];
  /** Optional "Service Highlights" cards */
  highlights?: Highlight[];
  highlightsHeading?: string;
  /** Optional "Why Choose ..." section */
  whyChoose?: WhyChoose;
  /** Heading above the related-service cards */
  servicesHeading?: string;
};

/** Lookup card image + alt for a child service from the central content store. */
function cardImage(href: string) {
  const match = Object.values(serviceContent).find((s) => s.path === href);
  return {
    image: match?.heroImage ?? "/images/hero.jpg",
    alt: match?.heroImageAlt ?? site.legalName,
  };
}

export default function ServiceHub({
  path,
  name,
  eyebrow,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  introHeading,
  intro,
  introImage,
  introImageAlt,
  services,
  highlights,
  highlightsHeading,
  whyChoose,
  servicesHeading,
}: Props) {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: name, path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.label,
          url: `${site.url}${s.href}`,
        })),
      }} />

      <section className="svc-page-hero hero" data-screen-label="Hub Hero">
        <div className="hero-bg">
          <img src={heroImage} alt={heroImageAlt} />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-inner">
          <span className="hero-eyebrow">
            <span className="pulse-dot" />
            {eyebrow}
          </span>
          <h1 className="h-xxl" style={{ fontSize: "clamp(40px, 5.4vw, 76px)" }}>
            {heroTitle}
          </h1>
          <p className="hero-sub">{heroSubtitle}</p>
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
          {introImage ? (
            <div className="two-ways-section">
              <div className="content section-head reveal">
                <span className="eyebrow">{name}</span>
                <h2 className="h-lg">{introHeading}</h2>
                {intro.map((p) => (
                  <p key={p} className="lead">
                    {p}
                  </p>
                ))}
              </div>
              <div className="image reveal d1">
                <img src={introImage} alt={introImageAlt ?? introHeading} loading="lazy" />
              </div>
            </div>
          ) : (
            <div className="section-head reveal">
              <span className="eyebrow">{name}</span>
              <h2 className="h-lg">{introHeading}</h2>
              {intro.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="benefits section" data-screen-label="Service Highlights">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Service Highlights</span>
              <h2 className="h-lg">{highlightsHeading ?? "What you can count on"}</h2>
            </div>
            <div className="benefits-grid">
              {highlights.map((h, i) => (
                <div className="benefit-card reveal" key={h.title}>
                  <span className="benefit-idx">{i + 1}</span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {whyChoose && (
        <section className="why section" data-screen-label="Why Choose Us">
          <div className="wrap">
            <div className="why-grid">
              <div className="why-intro reveal">
                <span className="eyebrow">Why Choose Us</span>
                <h2 className="h-lg">{whyChoose.heading}</h2>
                {whyChoose.intro.map((p) => (
                  <p key={p} className="lead">
                    {p}
                  </p>
                ))}
                <a className="btn btn--call" href={`tel:${site.primaryPhone.tel}`}>
                  <PhoneIcon />
                  Call {site.primaryPhone.display}
                </a>
              </div>
              <ul className="why-list reveal d1">
                {whyChoose.points.map((pt) => (
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
      )}

      <section className="hub section" data-screen-label="Related Services">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Explore</span>
            <h2 className="h-lg">{servicesHeading ?? `Explore our ${name.toLowerCase()}`}</h2>
          </div>

          <div className="hub-grid">
            {services.map((service) => {
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

      <FaqLink />

      <CtaSection />
    </>
  );
}
