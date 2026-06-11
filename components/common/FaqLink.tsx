import Link from "next/link";

type Props = {
  heading?: string;
  body?: string;
};

/**
 * Compact banner that points visitors to the dedicated FAQ page. Used in place
 * of the inline FAQ sections that were removed from service and hub pages.
 */
export default function FaqLink({
  heading = "Answers to common towing & roadside questions",
  body = "Visit our FAQ page for straight answers on pricing, response times, what we tow, and what to expect when you call.",
}: Props) {
  return (
    <section className="faq-cta section" data-screen-label="FAQ">
      <div className="wrap">
        <div className="faq-cta-card reveal">
          <div className="faq-cta-text">
            <span className="eyebrow">Have Questions?</span>
            <h2 className="h-md">{heading}</h2>
            <p>{body}</p>
          </div>
          <Link className="btn btn--navy btn--lg" href="/faq">
            Visit Our FAQ Page
          </Link>
        </div>
      </div>
    </section>
  );
}
