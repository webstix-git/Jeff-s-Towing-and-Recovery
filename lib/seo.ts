import type { Metadata } from "next";
import { site } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Absolute path beginning with "/" — used for canonical + OG url */
  path: string;
  /** Path under /images, defaults to the hero */
  image?: string;
  imageAlt?: string;
};

/**
 * Builds a consistent, unique Metadata object for any page: title, description,
 * canonical URL, Open Graph, and Twitter card. The root layout supplies the
 * title template ("%s | Jeff's Towing & Recovery").
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero.jpg",
  imageAlt = site.legalName,
}: PageMetaInput): Metadata {
  const canonical = path;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.legalName,
      url: canonical,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
