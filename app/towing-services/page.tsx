import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import ServiceHub from "@/components/services/ServiceHub";
import { pageMetadata } from "@/lib/seo";
import { towingServices } from "@/lib/navigation";

export const metadata: Metadata = pageMetadata({
  title: "Towing Services in Berrien County, MI",
  description:
    "Light-duty towing and 24/7 recovery across Bridgman, Benton Harbor, and Berrien County. Flatbed transport and round-the-clock roadside assistance from a local, family-run crew.",
  path: "/towing-services",
  image: "/images/towing-services-hero.png",
});

export default function Page() {
  return (
    <SiteShell>
      <ServiceHub
        path="/towing-services"
        name="Towing Services"
        eyebrow="Light-Duty Towing · Available 24/7"
        heroTitle="Towing & Recovery You Can Count On"
        heroSubtitle="Flatbed transport and 24/7 roadside recovery for cars, trucks, and SUVs across Berrien County."
        heroImage="/images/towing-services-hero.png"
        heroImageAlt="Jeff's Towing & Recovery flatbed tow truck ready for service"
        introHeading="Two ways we get you and your vehicle off the road"
        introImage="/images/svc-flatbed-towing.png"
        introImageAlt="Car secured on a flatbed tow truck for damage-free transport"
        intro={[
          "Most of what we do starts with one of two needs: someone to answer the phone any hour of the day, and a flatbed that can move your vehicle without doing it harm. Everything below grows out of those two.",
          "Pick the service that fits your situation, or just call and tell us what's going on — we'll point you in the right direction.",
        ]}
        highlightsHeading="What you can count on, every call"
        highlights={[
          {
            title: "Light-Duty Specialists",
            text: "Cars, pickups, and SUVs handled by a crew that does this every day — no semi-trucks or heavy equipment.",
          },
          {
            title: "Damage-Free Flatbeds",
            text: "Your vehicle rides level and fully secured — no drivetrain wear, no scraped bumpers, no surprises.",
          },
          {
            title: "24/7 Emergency Dispatch",
            text: "A real person answers and a truck rolls out — day or night, holidays and overnight included.",
          },
          {
            title: "Up-Front Pricing",
            text: "You get a fair quote before the truck leaves the yard — never an emergency surcharge sprung at the scene.",
          },
          {
            title: "Local Berrien County Coverage",
            text: "Two bases in Bridgman and Benton Harbor keep response times short across the county.",
          },
          {
            title: "First-Responder Standards",
            text: "Founded by a former police officer and firefighter, with safe traffic procedures on every call.",
          },
        ]}
        whyChoose={{
          heading: "Why Choose Jeff's Towing & Recovery",
          intro: [
            "When you're stranded on the shoulder, you don't need a call center three states away — you need a local crew that knows these roads and answers the phone.",
            "For over 20 years, drivers across Berrien County have trusted us to show up fast, charge fairly, and treat them with respect.",
          ],
          points: [
            {
              title: "Local & Family-Run",
              text: "You reach neighbors who know these roads, not a national dispatch line.",
            },
            {
              title: "20+ Years on the Road",
              text: "Two decades of recoveries in every Michigan condition, from lake-effect snow to summer heat.",
            },
            {
              title: "Honest, Up-Front Pricing",
              text: "Fair quotes given before we dispatch — what we say is what you pay.",
            },
            {
              title: "Respect on Every Call",
              text: "You and your vehicle are treated with genuine care, from the first ring to drop-off.",
            },
          ],
        }}
        servicesHeading="Explore our towing services"
        services={towingServices}
      />
    </SiteShell>
  );
}
