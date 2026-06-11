import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";
import ContactForm from "@/components/forms/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

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

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor" />
  </svg>
);
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
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={contactPageSchema} />

      <SubPageHero
        eyebrow="Get In Touch"
        title="Contact Jeff's Towing & Recovery"
        subtitle="Stranded right now? Calling is fastest. For everything else, send us a note below."
        image="/images/cta-highway.jpg"
        imageAlt="Highway at sunset"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="contact-section section" data-screen-label="Contact">
        <div className="wrap contact-grid">
          <div className="reveal">
            <span className="eyebrow">Reach Us Directly-1</span>
            <h2 className="h-lg" style={{ marginTop: "14px", marginBottom: "22px" }}>
              We answer around the clock
            </h2>
            <div className="contact-cards">
              {site.phones.map((phone) => (
                <div className="contact-card" key={phone.tel}>
                  <span className="ci">
                    <PhoneIcon />
                  </span>
                  <div>
                    <h3>{phone.label} Dispatch</h3>
                    <a href={`tel:${phone.tel}`}>{phone.display}</a>
                  </div>
                </div>
              ))}
              <div className="contact-card">
                <span className="ci">
                  <MailIcon />
                </span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              {site.locations.map((loc) => (
                <div className="contact-card" key={loc.id}>
                  <span className="ci">
                    <PinIcon />
                  </span>
                  <div>
                    <h3>{loc.name}</h3>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {loc.street}, {loc.city}, {loc.state} {loc.zip}
                    </a>
                  </div>
                </div>
              ))}
              <div className="contact-card">
                <span className="ci">
                  <ClockIcon />
                </span>
                <div>
                  <h3>Hours</h3>
                  <p>{site.hours.long}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal d1">
            <span className="eyebrow">Send A Request</span>
            <h2 className="h-lg" style={{ marginTop: "14px", marginBottom: "22px" }}>
              Tell us what you need
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
