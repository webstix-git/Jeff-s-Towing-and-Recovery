export type Faq = {
  q: string;
  /** Plain-text answer — also used for FAQ structured data */
  a: string;
  /** Optional rich answer (e.g. with links) rendered in place of the plain text */
  aNode?: React.ReactNode;
};

type Props = {
  faqs: Faq[];
  intro?: string;
};

/**
 * Static FAQ list — every question and answer is shown fully expanded on load,
 * with no click-to-reveal interaction. Used only on the dedicated /faq page.
 */
export default function FaqList({ faqs, intro }: Props) {
  return (
    <section className="faq-open section" data-screen-label="FAQ">
      <div className="wrap">
        {intro ? <p className="faq-open-intro reveal">{intro}</p> : null}
        <div className="faq-open-list">
          {faqs.map((faq) => (
            <article className="faq-open-item reveal" key={faq.q}>
              <h2 className="faq-open-q">
                <span className="q-badge" aria-hidden="true">
                  Q
                </span>
                {faq.q}
              </h2>
              <p className="faq-open-a">{faq.aNode ?? faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
