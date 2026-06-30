import { getServiceAreaMapEmbedUrl } from "@/lib/maps";
import { site } from "@/lib/site";

type ServiceAreaMapProps = {
  className?: string;
};

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export default function ServiceAreaMap({ className }: ServiceAreaMapProps) {
  return (
    <div
      className={["areas-map areas-map--embed", className].filter(Boolean).join(" ")}
      aria-label="Service area map with both dispatch locations"
    >
      <div className="areas-map-frame">
        <iframe
          title={`${site.name} — Bridgman dispatch location`}
          src={getServiceAreaMapEmbedUrl()}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="areas-map-locations" aria-label="Dispatch locations">
        {site.locations.map((location) => (
          <a
            key={location.id}
            className="areas-map-loc"
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${location.name} location in Google Maps`}
          >
            <span className="areas-map-loc-pin">
              <PinIcon />
            </span>
            <span className="areas-map-loc-text">
              <strong>{location.name}</strong>
              <span>{location.street}</span>
              <span>
                {location.city}, {location.state} {location.zip}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
