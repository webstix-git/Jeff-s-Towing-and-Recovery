import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Contact – Thank You",
    description:
      "Thanks for contacting Jeff's Towing & Recovery. We received your message and will get in touch with you shortly.",
    path: "/thank-you",
    image: "/images/hero.jpg",
  }),
  robots: { index: false, follow: true },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Thank You", path: "/thank-you" },
];

export default function Page() {
  return (
    <SiteShell>
      <SubPageHero
        eyebrow="Message Received"
        title="Contact – Thank You"
        showCall={false}
        image="/images/hero.jpg"
        imageAlt="Tow truck on the road"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <section className="prose-page section" data-screen-label="Thank You">
        <div className="wrap">
          <div className="prose">
            <p>Thanks for contacting us! We will get in touch with you shortly.</p>
            <p>
              If you need help right now, calling is always fastest — someone answers
              day or night.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
