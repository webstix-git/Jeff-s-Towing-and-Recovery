import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FloatingActions from "@/components/layout/FloatingActions";
import SiteInteractions from "@/components/interactions/SiteInteractions";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <FloatingActions />
      <SiteInteractions />
    </>
  );
}
