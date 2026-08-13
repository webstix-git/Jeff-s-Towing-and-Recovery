import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import SubPageHero from "@/components/common/SubPageHero";
import {
  towingServices,
  roadsideServices,
  aboutPages,
} from "@/lib/navigation";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Pages",
    links: [{ label: "Home", href: "/" }],
  },
  {
    title: "Towing Services",
    links: [{ label: "Towing Services Overview", href: "/towing-services" }, ...towingServices],
  },
  {
    title: "Roadside Assistance",
    links: [
      { label: "Roadside Assistance Overview", href: "/roadside-assistance" },
      ...roadsideServices,
    ],
  },
  {
    title: "About Us",
    links: [{ label: "About Us Overview", href: "/about-us" }, ...aboutPages],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function NotFound() {
  return (
    <SiteShell>
      <SubPageHero
        title="404 Page"
        image="/images/hero.jpg"
        imageAlt="Tow truck on a Southwest Michigan road"
        showCall={false}
      />

      <section className="index-page section" data-screen-label="404 Sitemap">
        <div className="wrap">
          {groups.map((group) => (
            <div className="index-group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="index-simple">
                {group.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
