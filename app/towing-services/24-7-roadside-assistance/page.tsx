import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import ServicePage from "@/components/services/ServicePage";
import { pageMetadata } from "@/lib/seo";
import { serviceContent } from "@/lib/content/services";

const content = serviceContent["24-7-roadside-assistance"];

export const metadata: Metadata = pageMetadata({
  title: content.seoTitle,
  description: content.seoDescription,
  path: content.path,
  image: content.heroImage,
  imageAlt: content.heroImageAlt,
});

export default function Page() {
  return (
    <SiteShell>
      <ServicePage content={content} />
    </SiteShell>
  );
}
