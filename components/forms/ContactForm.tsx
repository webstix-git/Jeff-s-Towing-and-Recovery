"use client";

import { useState } from "react";
import { site } from "@/lib/site";

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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const serviceType = String(data.get("service") ?? "");
    const location = String(data.get("location") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service needed: ${serviceType}`,
      `Location / vehicle: ${location}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Service request from ${name || "website"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitted ? (
        <p className="form-note" role="status">
          Thanks — your email app should now be open with your request. For an
          immediate response, call{" "}
          <a href={`tel:${site.primaryPhone.tel}`}>{site.primaryPhone.display}</a>.
        </p>
      ) : (
        <p className="form-note">
          For emergencies, calling is always fastest. This form opens your email app
          with the details filled in.
        </p>
      )}

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Full name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="cf-phone">Phone number</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-email">Email address</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" />
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

      <button className="btn btn--call btn--lg" type="submit">
        Send Request
      </button>
    </form>
  );
}
