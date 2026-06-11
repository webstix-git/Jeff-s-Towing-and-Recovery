import type { Metadata } from "next";
import "./globals.css";
import "./services.css";
import "./pages.css";
import { SITE_URL, site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.legalName} — ${site.tagline} | ${site.county}, MI`,
    template: `%s | ${site.name}`,
  },
  description: `${site.description} Call ${site.primaryPhone.display}.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.legalName,
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: [
      { url: "/images/hero.jpg", width: 1200, height: 630, alt: site.legalName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
