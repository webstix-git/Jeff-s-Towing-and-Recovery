import { site } from "@/lib/site";
import PhoneIcon from "./PhoneIcon";

type Props = {
  eyebrow?: string;
  heading?: React.ReactNode;
  body?: string;
};

/** Reusable final call-to-action band. Pulls the dispatch number from config. */
export default function CtaSection({
  eyebrow = "Don't Wait On The Roadside",
  heading = (
    <>
      Help Is One Call Away. <em>Day Or Night.</em>
    </>
  ),
  body = "No call centers, no runaround — just honest, local help when you need it most. Save our number before you ever need it.",
}: Props) {
  return (
    <section className="cta" id="contact" data-screen-label="Final CTA">
      <div className="cta-bg">
        <img src="/images/cta-highway.jpg" alt="" loading="lazy" />
      </div>
      <div className="wrap cta-grid">
        <div className="reveal">
          <span className="eyebrow on-dark">{eyebrow}</span>
          <h2 className="h-xl">{heading}</h2>
          <p className="lead">{body}</p>
        </div>
        <div className="cta-call reveal d1">
          <span className="lbl">Call Us {site.hours.cta}</span>
          {site.phones.map((phone) => (
            <a key={phone.tel} className="num num--stack" href={`tel:${phone.tel}`}>
              <span className="num-label">{phone.label}</span>
              {phone.display}
            </a>
          ))}
          <a
            className="btn btn--call btn--lg btn--block"
            href={`tel:${site.primaryPhone.tel}`}
          >
            <PhoneIcon />
            Call For Help Now
          </a>
          <span className="cta-note">
            <span className="pulse-dot" />
            {site.locations.map((l) => l.name).join(" & ")}, MI
          </span>
        </div>
      </div>
    </section>
  );
}
