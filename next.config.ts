import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Preserve old links from the previous single services page.
      { source: "/services", destination: "/towing-services", permanent: true },
      { source: "/services/:path*", destination: "/towing-services", permanent: true },
    ];
  },
};

export default nextConfig;
