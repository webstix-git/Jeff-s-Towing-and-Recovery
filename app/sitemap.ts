import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import {
  towingServices,
  roadsideServices,
  aboutPages,
  footerUtilityNav,
} from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/towing-services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/roadside-assistance", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" },
  ];

  const servicePaths = [...towingServices, ...roadsideServices].map((c) => ({
    path: c.href,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const aboutChildPaths = aboutPages.map((c) => ({
    path: c.href,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // HTML sitemap + service index help crawl discovery; privacy/AI are indexable policies
  const utilityPaths = footerUtilityNav
    .filter((item) => item.href !== "/thank-you")
    .map((item) => ({
      path: item.href,
      priority: item.href === "/service-index" || item.href === "/sitemap" ? 0.6 : 0.4,
      changeFrequency: "yearly" as const,
    }));

  return [...staticPaths, ...servicePaths, ...aboutChildPaths, ...utilityPaths].map(
    (entry) => ({
      url: `${SITE_URL}${entry.path === "/" ? "" : entry.path}`,
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    }),
  );
}
