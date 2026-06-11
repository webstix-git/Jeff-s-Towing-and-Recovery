import { site } from "@/lib/site";
import PhoneIcon from "./PhoneIcon";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  showCall?: boolean;
  children?: React.ReactNode;
};

/** Shared compact hero used by About, FAQ, Contact, and informational pages. */
export default function SubPageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/hero.jpg",
  imageAlt = site.legalName,
  showCall = true,
  children,
}: Props) {
  return (
    <section className="svc-page-hero hero" data-screen-label="Hero">
      <div className="hero-bg">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="hero-scrim" />
      <div className="wrap hero-inner">
        <span className="hero-eyebrow">
          <span className="pulse-dot" />
          {eyebrow}
        </span>
        <h1 className="h-xxl" style={{ fontSize: "clamp(38px, 5.2vw, 72px)" }}>
          {title}
        </h1>
        {subtitle ? <p className="hero-sub">{subtitle}</p> : null}
        {(showCall || children) && (
          <div className="hero-actions">
            {showCall ? (
              <a className="btn btn--call btn--lg" href={`tel:${site.primaryPhone.tel}`}>
                <PhoneIcon />
                Call {site.primaryPhone.display}
              </a>
            ) : null}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
