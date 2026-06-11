"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/navigation";
import { site } from "@/lib/site";

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="13" height="13" aria-hidden="true">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z"
      fill="currentColor"
    />
  </svg>
);

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (item: { href: string; children?: { href: string }[] }) => {
    if (item.href === "/") return pathname === "/";
    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
    return Boolean(item.children?.some((c) => pathname === c.href));
  };

  const primary = site.primaryPhone;

  return (
    <>
      <header className="site-header site-header--float" data-screen-label="Header">
        <div className="wrap">
          <Link className="brand" href="/" aria-label={`${site.legalName} home`}>
            <img src="/images/logo.png" alt={site.legalName} width="220" height="125" />
          </Link>

          <nav className="nav" aria-label="Primary">
            {mainNav.map((item) =>
              item.children ? (
                <div className="nav-item" key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive(item) ? "active" : undefined}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronIcon />
                  </Link>
                  <div className="dropdown">
                    {item.overviewLabel ? (
                      <Link href={item.href}>{item.overviewLabel}</Link>
                    ) : null}
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item) ? "active" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="header-cta">
            <a
              className="btn btn--call"
              href={`tel:${primary.tel}`}
              aria-label={`Call ${primary.display} for emergency service`}
            >
              <PhoneIcon />
              {primary.display}
            </a>
          </div>

          <button className="nav-toggle" aria-label="Open menu" aria-haspopup="true">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer-scrim" />
        <div className="drawer-panel">
          <div className="d-head">
            <img src="/images/logo.png" alt={site.legalName} width="120" height="44" />
            <button className="drawer-close" aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link href={item.href}>{item.label}</Link>
                {item.children ? (
                  <div className="d-sub">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="d-phones">
            {site.phones.map((phone) => (
              <a
                key={phone.tel}
                className="btn btn--call btn--block"
                href={`tel:${phone.tel}`}
              >
                <PhoneIcon />
                <span className="d-phone-text">
                  <span className="d-phone-label">{phone.label}</span>
                  <span className="d-phone-num">{phone.display}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
