import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import HomeContent from "@/components/home/HomeContent";
import { site } from "@/lib/site";

const homeTitle = `${site.legalName} — ${site.tagline} | ${site.county}, MI`;
const homeDescription = `${site.description} Bridgman & Benton Harbor dispatch. Call ${site.primaryPhone.display} any time.`;

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.legalName,
    url: "/",
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${site.legalName} tow truck ready for emergency recovery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/images/hero.jpg"],
  },
};

export default function HomePage() {
  return (
    <SiteShell>
      <HomeContent />
    </SiteShell>
  );
}
