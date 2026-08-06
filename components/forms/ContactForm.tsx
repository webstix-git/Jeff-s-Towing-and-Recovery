import Script from "next/script";
import { site } from "@/lib/site";

/** Public Cloudflare Turnstile site key — safe to expose in the browser. */
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "0x4AAAAAAEIGPvCMetY2od42";

/** Leading country code, then digits with optional spaces, dots, dashes, or parens. */
const PHONE_PATTERN = "\\+[1-9][0-9 \\(\\)\\.\\-]{5,17}[0-9]";
const PHONE_TITLE =
  "Enter your phone number in international format, including the country code — e.g. +1 269 465 6142";

const RequiredMark = () => (
  <span className="req" aria-hidden="true">
    *
  </span>
);

const services = [
  "Emergency Towing",
  "Flatbed Towing",
  "24/7 Roadside Assistance",
  "Tire Change",
  "Jump Start",
  "Fuel Delivery",
  "Lockout Service",
  "Other / Not Sure",
];

const errorMessages: Record<string, string> = {
  captcha: "We couldn't confirm you're human. Please complete the captcha and try again.",
  submit: "Your request didn't go through. Please try again.",
  server: "Something went wrong on our end. Please try again.",
};

export default function ContactForm({ error }: { error?: string }) {
  const message = error ? errorMessages[error] ?? errorMessages.submit : null;

  return (
    <form id="request" className="contact-form" action="/api/contact" method="POST">
      {message ? (
        <p className="form-error" role="alert">
          {message} You can also call{" "}
          <a href={`tel:${site.primaryPhone.tel}`}>{site.primaryPhone.display}</a>.
        </p>
      ) : null}

      <p className="form-note">
        For emergencies, calling is always fastest. Send this form and we&apos;ll get
        back to you shortly. Fields marked <span className="req">*</span> are required.
      </p>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">
            Full name <RequiredMark />
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="cf-phone">
            Phone number <RequiredMark />
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+1 269 465 6142"
            pattern={PHONE_PATTERN}
            title={PHONE_TITLE}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-email">
            Email address <RequiredMark />
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="cf-service">What do you need?</label>
          <select id="cf-service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-location">Your location &amp; vehicle</label>
        <input
          id="cf-location"
          name="location"
          type="text"
          placeholder="e.g. Northbound I-94 near Exit 16, silver Honda CR-V"
        />
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">Anything else we should know?</label>
        <textarea id="cf-message" name="message" rows={4} />
      </div>

      <div
        className="cf-turnstile"
        data-sitekey={TURNSTILE_SITE_KEY}
        data-theme="light"
        data-action="contact-form"
      />

      <button className="btn btn--call btn--lg" type="submit">
        Send Request
      </button>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
    </form>
  );
}
