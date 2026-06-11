import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FaqList from "@/components/common/FaqList";
import CtaSection from "@/components/common/CtaSection";
import JsonLd from "@/components/common/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about towing and roadside assistance from Jeff's Towing & Recovery — pricing, response times, coverage areas, and what we tow in Berrien County, MI.",
  path: "/faq",
  image: "/images/hero.jpg",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

const intro =
  "Below are answers to the questions we hear most about our towing and roadside assistance services. If yours isn't covered here, give us a call — a local dispatcher is happy to help, any hour of the day.";

const faqs = [
  {
    q: "What should I do if my car ran out of gas?",
    a: "If your car runs out of gas on the road, you can call our team to request a fuel delivery service. Simply tell us the type of fuel you need and your location, and we'll come to fill up your tank for you straight away.",
  },
  {
    q: "Can you help if I need a jump start?",
    a: "Yes! Our mobile technicians are seasoned experts at resolving battery problems in vehicles of all makes and models. Over the years, we've successfully jumpstarted hundreds of cars stuck on the road, and we're confident yours will be no different.",
  },
  {
    q: "Can you help if I locked my keys in my vehicle?",
    a: "We sure can! Lockout services are one of the many options our roadside technicians can perform for an affordable price. Call us any time of day or night.",
  },
  {
    q: "My car is all-wheel drive AWD or 4X4, do I need a flatbed to tow it?",
    a: "The safest way to tow four-wheel drive vehicles is with a flatbed trailer so that all wheels are off the ground and protected from transmission damage. Our company proudly owns and operates several flatbed vehicles and can haul your all-wheel drive vehicle for a reasonable price.",
  },
  {
    q: "Someone is parked in my personal spot. Can I have it towed at the owner's expense?",
    a: "Yes. Our company provides comprehensive parking enforcement solutions. Contact us to learn more about how we can help you remove unauthorized vehicles from your property.",
  },
  {
    q: "Will you come and boost my dead car battery? Will you bring me a new battery?",
    a: "We can absolutely boost your dead car battery for you, wherever you may be. Our auto technicians are licensed and capable of replacing your car battery too, but our replacement services depend on product availability. If a new battery is not immediately available, we can tow your car to the location of your choice.",
  },
  {
    q: "What areas do you cover?",
    a: "From our Bridgman and Benton Harbor locations we serve St. Joseph, Stevensville, Lake Township, Sawyer, and the surrounding Berrien County communities.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Jeff's Towing & Recovery LLC has been fully licensed and insured since 2003, with more than two decades of towing and recovery experience across Berrien County.",
  },
  {
    q: "Which number should I call?",
    a: `Bridgman: ${site.locations[0].phone.display}. Benton Harbor: ${site.locations[1].phone.display}.`,
    aNode: (
      <>
        Bridgman:{" "}
        <a href={`tel:${site.locations[0].phone.tel}`}>{site.locations[0].phone.display}</a>
        <br />
        Benton Harbor:{" "}
        <a href={`tel:${site.locations[1].phone.tel}`}>{site.locations[1].phone.display}</a>
      </>
    ),
  },
];

export default function Page() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />

      <SubPageHero
        eyebrow="Good Questions"
        title="Frequently Asked Questions"
        subtitle="Straight answers about how we work, what we charge, and what to expect when you call."
        image="/images/hero.jpg"
        imageAlt="Tow truck on a Berrien County road at dusk"
      />

      <div className="page-crumbs">
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>

      <FaqList faqs={faqs} intro={intro} />

      <CtaSection
        eyebrow="Still Have A Question?"
        heading={
          <>
            Call Us — We&apos;re Happy <em>To Help.</em>
          </>
        }
        body="Can't find your answer here? Pick up the phone and ask. A local dispatcher is standing by 24/7."
      />
    </SiteShell>
  );
}
