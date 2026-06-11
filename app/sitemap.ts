import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import {
  towingServices,
  roadsideServices,
  aboutPages,
} from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/towing-services", priority: 0.9 },
    { path: "/roadside-assistance", priority: 0.9 },
    { path: "/about-us", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact-us", priority: 0.8 },
  ];

  const childPaths = [
    ...towingServices,
    ...roadsideServices,
    ...aboutPages,
  ].map((c) => ({ path: c.href, priority: 0.8 }));

  return [...staticPaths, ...childPaths].map((entry) => ({
    url: `${SITE_URL}${entry.path === "/" ? "" : entry.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: entry.priority,
  }));
}
