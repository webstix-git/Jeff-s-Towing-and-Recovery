import Link from "next/link";
import Breadcrumbs, { type Crumb } from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import FaqLink from "@/components/common/FaqLink";
import { type Faq } from "@/components/common/FaqList";
import JsonLd from "@/components/common/JsonLd";
import PhoneIcon from "@/components/common/PhoneIcon";
import { site } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export type ServiceContent = {
  /** Full route path, e.g. /towing-services/flatbed-towing */
  path: string;
  categoryLabel: string;
  categoryPath: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  /** H1 shown in the hero */
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  overviewHeading: string;
  overview: string[];
  overviewImage: string;
  overviewImageAlt: string;
  overviewImagePosition?: string;
  overviewBullets: string[];
  benefitsHeading: string;
  benefits: { title: string; text: string }[];
  processHeading: string;
  processIntro: string;
  process: { title: string; text: string }[];
  whyHeading: string;
  why: { title: string; text: string }[];
  faqs: Faq[];
};

export default function ServicePage({ content }: { content: ServiceContent }) {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: content.categoryLabel, path: content.categoryPath },
    { name: content.name, path: content.path },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: content.name,
          description: content.seoDescription,
          path: content.path,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="svc-page-hero hero" data-screen-label="Service Hero">
        <div className="hero-bg">
          <img src={content.heroImage} alt={content.heroImageAlt} />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-inner">
          <span className="hero-eyebrow">
            <span className="pulse-dot" />
            {content.heroEyebrow}
          </span>
          <h1 className="h-xxl" style={{ fontSize: "clamp(40px, 5.4vw, 76px)" }}>
            {content.heroTitle}
          </h1>
          <p className="hero-sub">{content.heroSubtitle}</p>
          <div className="hero-actions">
            <a className="btn btn--call btn--lg" href={`tel:${site.primaryPhone.tel}`}>
              <PhoneIcon />
              Call {site.primaryPhone.display}
            </a>
            <Link className="btn btn--ghost btn--lg" href="/contact-us">
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="svc-detail section" data-screen-label="Overview">
        <div className="wrap">
          <div className="svc-detail-grid reveal">
            <div className="svc-detail-media">
              <div className="frame">
                <img
                  src={content.overviewImage}
                  alt={content.overviewImageAlt}
                  loading="lazy"
                  style={
                    content.overviewImagePosition
                      ? { objectPosition: content.overviewImagePosition }
                      : undefined
                  }
                />
              </div>
            </div>
            <div className="svc-detail-copy">
              <span className="eyebrow">Service Overview</span>
              <h2 className="h-lg">{content.overviewHeading}</h2>
              {content.overview.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
              <ul className="svc-bullets">
                {content.overviewBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits section" data-screen-label="Benefits">
        <div className="wrap">
          <div className="reveal section-head">
            <span className="eyebrow">Why It Matters</span>
            <h2 className="h-lg">{content.benefitsHeading}</h2>
          </div>
          <div className="benefits-grid reveal d1">
            {content.benefits.map((benefit, i) => (
              <div className="benefit-card" key={benefit.title}>
                <span className="benefit-idx">{i + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" data-screen-label="How It Works">
        <div className="wrap">
          <div className="reveal section-head">
            <span className="eyebrow on-dark">How It Works</span>
            <h2 className="h-lg">{content.processHeading}</h2>
            <p className="lead">{content.processIntro}</p>
          </div>
          <ol className="process-steps reveal d1">
            {content.process.map((step, i) => (
              <li key={step.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="why section" data-screen-label="Why Choose Us">
        <div className="wrap why-grid">
          <div className="reveal why-intro">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="h-lg">{content.whyHeading}</h2>
            <p className="lead">
              {site.foundedNote} For over 20 years, drivers across {site.county} have
              counted on us for fast dispatch, fair pricing, and the kind of care you
              only get from a local crew.
            </p>
            <a className="btn btn--navy btn--lg" href={`tel:${site.primaryPhone.tel}`}>
              <PhoneIcon />
              Call {site.primaryPhone.display}
            </a>
          </div>
          <ul className="why-list reveal d1">
            {content.why.map((point) => (
              <li key={point.title}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5l4.2 4.2L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <strong>{point.title}</strong>
                  <p>{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqLink />

      <CtaSection />
    </>
  );
}
