import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./services.css";
import "./pages.css";
import { SITE_URL, site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/common/JsonLd";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  "BXbzOEmZ3RIZs4JolqmUl22R3gSQeuYMQLnnfrzQyos";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | 24/7 Towing in Southwest Michigan`,
    template: `%s | ${site.name}`,
  },
  description: `${site.description} Call ${site.primaryPhone.display}.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.legalName,
    title: `${site.name} | 24/7 Towing in Southwest Michigan`,
    description: site.description,
    url: "/",
    images: [
      { url: "/images/hero.jpg", width: 1200, height: 630, alt: site.legalName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | 24/7 Towing in Southwest Michigan`,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  verification: { google: googleVerification },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className={sans.className}>
        <GoogleAnalytics />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
