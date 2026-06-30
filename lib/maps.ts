import { site, type Location } from "@/lib/site";

export function formatLocationAddress(location: Location): string {
  return `${location.street}, ${location.city}, ${location.state} ${location.zip}`;
}

/** Google Maps iframe embed for the Bridgman dispatch listing. */
export function getServiceAreaMapEmbedUrl(): string {
  const bridgman =
    site.locations.find((location) => location.id === "bridgman") ?? site.locations[0];
  const { lat, lng } = bridgman.geo;
  const query = encodeURIComponent(`${site.legalName}`);

  return `https://maps.google.com/maps?q=${query}&ll=${lat},${lng}&z=14&hl=en&output=embed`;
}
