export type Faq = {
  q: string;
  /** Plain-text answer — also used for FAQ structured data */
  a: string;
  /** Optional rich answer (e.g. with links) rendered in place of the plain text */
  aNode?: React.ReactNode;
};

type Props = {
  faqs: Faq[];
  /** Optional section title shown above the list */
  heading?: string;
  eyebrow?: string;
  intro?: string;
};

/**
 * Static FAQ list — every question and answer is shown fully expanded on load,
 * with no click-to-reveal interaction.
 */
export default function FaqList({
  faqs,
  heading,
  eyebrow = "FAQ",
  intro,
}: Props) {
  return (
    <section className="faq-open section" data-screen-label="FAQ">
      <div className="wrap">
        {heading || intro ? (
          <div className="section-head reveal">
            {heading ? <span className="eyebrow">{eyebrow}</span> : null}
            {heading ? <h2 className="h-lg">{heading}</h2> : null}
            {intro ? <p className="lead">{intro}</p> : null}
          </div>
        ) : null}
        <div className="faq-open-list">
          {faqs.map((faq) => (
            <article className="faq-open-item reveal" key={faq.q}>
              <h3 className="faq-open-q">
                <span className="q-badge" aria-hidden="true">
                  Q
                </span>
                {faq.q}
              </h3>
              <p className="faq-open-a">{faq.aNode ?? faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
