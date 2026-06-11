import Link from "next/link";
import { site } from "@/lib/site";
import { footerServices, footerUtilityNav } from "@/lib/navigation";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

function FooterSocial() {
  return (
    <div className="footer-social">
      <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8C15.7 4.8 14.7 4.7 13.5 4.7 11 4.7 9.3 6.2 9.3 9v2H6.6v3H9.3v8H13z" />
        </svg>
      </a>
      <a href={`tel:${site.primaryPhone.tel}`} aria-label={`Call ${site.primaryPhone.display}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" />
        </svg>
      </a>
      <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}>
        <MailIcon />
      </a>
    </div>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <img
              className="footer-logo"
              src="/images/logo.png"
              alt={site.legalName}
              width="116"
              height="88"
            />
            <FooterSocial />
          </div>

          <div className="footer-col footer-col--nav">
            <h4>Services</h4>
            <ul className="footer-nav">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Location &amp; Contact</h4>

            <div className="footer-contact-section">
              <div className="footer-locations-grid">
                {site.locations.map((loc) => (
                  <div className="footer-location-block" key={loc.id}>
                    <a
                      className="footer-location-link"
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${loc.name} location in Google Maps`}
                    >
                      <p className="footer-location-name">{loc.name}</p>
                      <div className="footer-contact-row footer-loc">
                        <span className="footer-contact-icon" aria-hidden="true">
                          <PinIcon />
                        </span>
                        <span className="footer-contact-text">
                          {loc.street}
                          <br />
                          {loc.city}, {loc.state} {loc.zip}
                        </span>
                      </div>
                    </a>
                    <a className="footer-location-phone" href={`tel:${loc.phone.tel}`}>
                      {loc.phone.display}
                    </a>
                  </div>
                ))}
              </div>

              <div className="footer-email-block">
                <p className="footer-location-name">Contact Email</p>
                <div className="footer-contact-row footer-email">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <MailIcon />
                  </span>
                  <a className="footer-contact-text" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col footer-col--hours">
            <h4>Hours of Operation</h4>
            <div className="footer-hours-content">
              {site.hours.office.map((line) => (
                <p className="footer-hours-item" key={line}>
                  {line}
                </p>
              ))}
              <div className="footer-hours-emergency">
                <span className="footer-contact-icon" aria-hidden="true">
                  <ClockIcon />
                </span>
                <span className="footer-hours-emergency-text">
                  {site.hours.emergencyLines.map((line) => (
                    <span className="footer-emergency-line" key={line}>{line}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.legalName}. All Rights Reserved.
          </span>
          <nav className="footer-legal" aria-label="Legal and utility links">
            {footerUtilityNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
