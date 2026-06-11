import { site } from "@/lib/site";

export default function FloatingActions() {
  return (
    <>
      <button className="to-top" aria-label="Scroll to top">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 19V5M6 11l6-6 6 6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="mobile-callbar">
        <a className="btn btn--call" href={`tel:${site.primaryPhone.tel}`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z"
              fill="currentColor"
            />
          </svg>
          Call {site.primaryPhone.display}
        </a>
      </div>
    </>
  );
}
