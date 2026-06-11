export type CustomerReview = {
  quote: string;
  name: string;
  location: string;
};

export const googleReviews: CustomerReview[] = [
  {
    quote: "Nathan hooked me quick and was very professional and courteous.",
    name: "Joshua Bolt",
    location: "Berrien County, MI",
  },
  {
    quote:
      "We were so surprised on a holiday weekend we got service so quickly!! Nathan got it there in 10 minutes. The price was such a surprise we figured being a holiday weekend it was going to be so high, it was very reasonable. Thank you so much for the great service. Nathan was super nice and was very helpful.",
    name: "Julie Kiser",
    location: "Berrien County, MI",
  },
  {
    quote:
      "Nathan was so helpful with changing our flat tire. Professional, efficient, and kind!! Thank you!",
    name: "Sarah",
    location: "Berrien County, MI",
  },
  {
    quote:
      "Nathan assisted me towing my vehicle today — very professional, friendly, and effective. Definitely recommend.",
    name: "Krista Blaylock",
    location: "Berrien County, MI",
  },
  {
    quote:
      "Michael, tow truck driver for Jeff's Towing, was excellent! He came shortly after being contacted by AAA to tow my car to my repair shop. He was courteous, very careful with my sportscar & mindful of my distress. By the time we reached the auto repair shop I felt much better.",
    name: "The Kruggels",
    location: "Berrien County, MI",
  },
  {
    quote: "Brandon was very friendly and respectful.",
    name: "Marcus Manigold",
    location: "Berrien County, MI",
  },
];

export function reviewInitials(name: string): string {
  const cleaned = name.replace(/^The\s+/i, "");
  const parts = cleaned.replace(/\./g, "").trim().split(/\s+/);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
}
