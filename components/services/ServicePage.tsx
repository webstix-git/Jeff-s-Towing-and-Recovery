import Link from "next/link";
import Breadcrumbs, { type Crumb } from "@/components/common/Breadcrumbs";
import CtaSection from "@/components/common/CtaSection";
import FaqLink from "@/components/common/FaqLink";
import FaqList, { type Faq } from "@/components/common/FaqList";
import JsonLd from "@/components/common/JsonLd";
import PhoneIcon from "@/components/common/PhoneIcon";
import { site } from "@/lib/site";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  towingServices,
  roadsideServices,
  serviceCtaLabel,
} from "@/lib/navigation";
import { serviceContent } from "@/lib/content/services";

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

function relatedServices(path: string, categoryPath: string) {
  const pool =
    categoryPath.startsWith("/roadside") ? roadsideServices : towingServices;
  return pool.filter((s) => s.href !== path);
}

function cardImage(href: string) {
  const match = Object.values(serviceContent).find((s) => s.path === href);
  return {
    image: match?.heroImage ?? "/images/hero.jpg",
    alt: match?.heroImageAlt ?? site.legalName,
  };
}

function categoryCardImage(categoryPath: string) {
  if (categoryPath.startsWith("/roadside")) {
    return {
      image: "/images/svc-roadside-assistance.png",
      alt: "Roadside assistance technician helping a stranded driver",
    };
  }
  return {
    image: "/images/towing-services-hero.png",
    alt: "Jeff's Towing & Recovery flatbed tow truck ready for service",
  };
}

export default function ServicePage({ content }: { content: ServiceContent }) {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: content.categoryLabel, path: content.categoryPath },
    { name: content.name, path: content.path },
  ];

  const related = relatedServices(content.path, content.categoryPath);
  const categoryImage = categoryCardImage(content.categoryPath);

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
      {content.faqs.length > 0 ? <JsonLd data={faqSchema(content.faqs)} /> : null}

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
            {content.name}
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

      {content.faqs.length > 0 ? (
        <FaqList
          faqs={content.faqs}
          heading="Frequently asked questions"
          intro={`Common questions about ${content.name.toLowerCase()} from drivers across ${site.county}.`}
        />
      ) : null}

      {related.length > 0 ? (
        <section className="hub section" data-screen-label="Related Services">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Explore</span>
              <h2 className="h-lg">Related {content.categoryLabel.toLowerCase()}</h2>
            </div>
            <div className="hub-grid">
              {related.map((service) => {
                const { image, alt } = cardImage(service.href);
                return (
                  <Link className="hub-card reveal" href={service.href} key={service.href}>
                    <div className="hub-card-media">
                      <img src={image} alt={alt} loading="lazy" />
                    </div>
                    <div className="hub-card-body">
                      <h3>{service.label}</h3>
                      {service.blurb ? <p>{service.blurb}</p> : null}
                      <span className="go">
                        {serviceCtaLabel(service.label)} <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                );
              })}
              <Link className="hub-card reveal" href={content.categoryPath}>
                <div className="hub-card-media">
                  <img src={categoryImage.image} alt={categoryImage.alt} loading="lazy" />
                </div>
                <div className="hub-card-body">
                  <h3>All {content.categoryLabel}</h3>
                  <p>
                    See every {content.categoryLabel.toLowerCase()} option we offer across{" "}
                    {site.county}.
                  </p>
                  <span className="go">
                    View {content.categoryLabel} <ArrowIcon />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <FaqLink />

      <CtaSection />
    </>
  );
}
