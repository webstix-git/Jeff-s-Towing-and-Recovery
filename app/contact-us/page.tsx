import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";
import ContactForm from "@/components/forms/ContactForm";
import PhoneIcon from "@/components/common/PhoneIcon";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8C15.7 4.8 14.7 4.7 13.5 4.7 11 4.7 9.3 6.2 9.3 9v2H6.6v3H9.3v8H13z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
import "./contact.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact Jeff's Towing & Recovery — Call 24/7",
  description: `Reach Jeff's Towing & Recovery 24/7 in Berrien County, MI. Bridgman ${site.locations[0].phone.display}, Benton Harbor ${site.locations[1].phone.display}, or email ${site.email}.`,
  path: "/contact-us",
  image: "/images/cta-highway.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us" },
];

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14 5h5v5M10 14L19 5M19 14v5H5V5h5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.legalName}`,
  url: `${site.url}/contact-us`,
  mainEntity: {
    "@type": "AutomotiveBusiness",
    name: site.legalName,
    email: site.email,
    telephone: site.primaryPhone.tel,
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.tel,
      contactType: "dispatch",
      areaServed: "US-MI",
      name: `${p.label} dispatch`,
    })),
  },
};

export default function Page() {
  return (
    <SiteShell>
      <div className="contact-page">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        <JsonLd data={contactPageSchema} />

        <SubPageHero
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Stranded right now? Calling is fastest. For everything else, send us a note below."
          image="/images/cta-highway.jpg"
          imageAlt="Highway at sunset"
        />

        <div className="page-crumbs">
          <div className="wrap">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        </div>

        <section className="cp-locations section" data-screen-label="Locations">
          <div className="wrap">
            <header className="cp-section-head reveal">
              <span className="eyebrow">Our Locations</span>
              <h2 className="h-xl">Two dispatch points, one reliable crew</h2>
              <p className="lead">
                Call dispatch directly or open the map for turn-by-turn directions to either location.
              </p>
            </header>

            <div className="cp-locations-grid">
              {site.locations.map((loc, index) => (
                <article className={`cp-loc-card reveal${index > 0 ? " d1" : ""}`} key={loc.id}>
                  <div className="cp-loc-body">
                    <div className="cp-loc-header">
                      <span className="cp-loc-badge">Location {index + 1}</span>
                      <h3 className="h-md">{loc.name}</h3>
                    </div>

                    <div className="cp-loc-rows">
                      <div className="cp-loc-row">
                        <span className="cp-loc-icon">
                          <PinIcon />
                        </span>
                        <div>
                          <span className="cp-loc-label">Address</span>
                          <a
                            className="cp-loc-address"
                            href={loc.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{loc.street}</span>
                            <span>
                              {loc.city}, {loc.state} {loc.zip}
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="cp-loc-row cp-loc-row--phone">
                        <a className="cp-loc-phone" href={`tel:${loc.phone.tel}`}>
                          <PhoneIcon />
                          {loc.phone.display}
                        </a>
                      </div>
                    </div>

                    <a
                      className="cp-loc-directions"
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ExternalIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cp-connect section" data-screen-label="Contact Form">
          <div className="wrap cp-connect-grid">
            <aside className="cp-connect-aside reveal">
              <header className="cp-section-head">
                <span className="eyebrow">General Contact</span>
                <h2 className="h-lg">Email &amp; hours</h2>
                <p className="lead">
                  One shared inbox for both locations. For urgent roadside help, call the dispatch number above.
                </p>
              </header>

              <div className="cp-info-cards">
                <div className="cp-info-card">
                  <span className="cp-info-icon">
                    <MailIcon />
                  </span>
                  <div>
                    <h3>Email</h3>
                    <p className="cp-info-note">Shared for all locations</p>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>

                <div className="cp-info-card">
                  <span className="cp-info-icon">
                    <ClockIcon />
                  </span>
                  <div>
                    <h3>Hours</h3>
                    <p>{site.hours.long}</p>
                    <p className="cp-info-emergency">Emergency 24/7 towing available</p>
                  </div>
                </div>
              </div>

              <div className="cp-social-block">
                <p className="cp-social-label">Follow Us</p>
                <div className="cp-social-icons">
                  <a
                    className="cp-social-link"
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                  >
                    <FacebookIcon />
                    <span>Facebook</span>
                  </a>
                  <a
                    className="cp-social-link"
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </aside>

            <div className="cp-form-panel reveal d1">
              <header className="cp-section-head">
                <span className="eyebrow">Send A Request</span>
                <h2 className="h-lg">Tell us what you need</h2>
                <p className="lead">
                  Non-emergency requests only. This form opens your email app with the details filled in.
                </p>
              </header>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
