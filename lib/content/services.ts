import type { ServiceContent } from "@/components/services/ServicePage";

/**
 * Content for every service detail page. Written to read like a local towing
 * shop talking to its customers — specific, plain-spoken, and grounded in the
 * Berrien County roads we actually drive. Each page is unique; no boilerplate.
 */

const TOWING = "/towing-services";
const ROADSIDE = "/roadside-assistance";

export const serviceContent: Record<string, ServiceContent> = {
  "24-7-roadside-assistance": {
    path: `${TOWING}/24-7-roadside-assistance`,
    categoryLabel: "Towing Services",
    categoryPath: TOWING,
    name: "24/7 Roadside Assistance",
    seoTitle: "24/7 Roadside Assistance & Towing in Berrien County, MI",
    seoDescription:
      "Round-the-clock roadside assistance and recovery in Bridgman, Benton Harbor, and across Berrien County. A real person answers and a truck rolls out — day, night, weekends, holidays.",
    heroEyebrow: "Core Service · Available 24/7",
    heroTitle: "24/7 Roadside Assistance & Recovery",
    heroSubtitle:
      "Breakdowns don't keep business hours. Neither do we. Call any time and a dispatcher picks up — then a driver heads your way.",
    heroImage: "/images/svc-24-7-roadside.png",
    heroImageAlt: "Tow truck with emergency lights ready for a roadside recovery call",
    overviewHeading: "Help that actually answers the phone",
    overview: [
      "When you're stuck on the shoulder of I-94 or sitting in a parking lot with a car that won't move, the last thing you want is a menu of options and a hold queue. You call us, a person answers, and we start sorting out your situation right then.",
      "This is the service the rest of the company is built around. Tire change, jump start, lockout, fuel, or a tow to the shop — if it's light-duty and it happens on the road, it usually starts with this call. We'll tell you what we can do and give you an honest ETA before a truck ever leaves.",
    ],
    overviewImage: "/images/svc-towing-recovery.png",
    overviewImageAlt: "Tow truck loading a damaged vehicle for safe transport",
    overviewBullets: [
      "Live local dispatch — no call centers, no automated runaround",
      "Cars, trucks, and SUVs (light-duty only)",
      "Up-front pricing quoted before we roll",
      "Coverage across Bridgman, Benton Harbor, St. Joseph and nearby",
    ],
    benefitsHeading: "What you get when you call",
    benefits: [
      {
        title: "A real answer, fast",
        text: "You talk to someone who knows these roads and can dispatch immediately — not a script reader three states away.",
      },
      {
        title: "Any hour, any weather",
        text: "Lake-effect snow at 2 a.m. or a holiday afternoon, the phone gets answered and the truck still shows up.",
      },
      {
        title: "Honest pricing",
        text: "We quote the cost before we head out, with no surprise after-hours surcharges tacked on at the end.",
      },
    ],
    processHeading: "From your call to back on the road",
    processIntro:
      "Most roadside calls follow the same simple path. Here's what to expect after you dial.",
    process: [
      {
        title: "You call, we answer",
        text: "Tell us where you are and what's wrong. A nearby landmark, mile marker, or cross street helps us find you fast.",
      },
      {
        title: "We quote and dispatch",
        text: "You get a clear price and a realistic ETA, then the closest available truck is on its way.",
      },
      {
        title: "We get to work",
        text: "Our operator sizes up the situation safely, then changes the tire, jumps the battery, unlocks the door, or loads the vehicle.",
      },
      {
        title: "You're moving again",
        text: "Whether it's a quick fix on-site or a tow to your shop of choice, we don't leave until you're sorted.",
      },
    ],
    whyHeading: "Drivers keep our number saved for a reason",
    why: [
      {
        title: "Founded by a first responder",
        text: "Jeff served as a police officer and firefighter before starting this company, and that mindset still runs every call.",
      },
      {
        title: "Two locations, faster reach",
        text: "Bases in Bridgman and Benton Harbor keep a truck closer to wherever you've broken down in the county.",
      },
      {
        title: "Licensed and insured",
        text: "Your vehicle is handled by trained, insured operators who treat it the way they'd treat their own.",
      },
      {
        title: "We answer every call",
        text: "Nights, weekends, and holidays included. If you're stranded, we want you to be able to reach us.",
      },
    ],
    faqs: [
      {
        q: "Are you really available 24 hours a day?",
        a: "Yes. We dispatch around the clock, every day of the year, including overnight and holidays. Call and a person will answer.",
      },
      {
        q: "How quickly can someone reach me?",
        a: "It depends on your location and how busy we are, but most Berrien County calls are reached in under 30 minutes. We'll give you a straight ETA when you call.",
      },
      {
        q: "Do you charge more at night or on holidays?",
        a: "No. We quote fair pricing up front and don't pile on emergency surcharges for the time of day or the calendar date.",
      },
      {
        q: "What kind of vehicles do you help with?",
        a: "Light-duty automotive — cars, pickups, and SUVs. We don't handle semi-trucks or heavy equipment.",
      },
    ],
  },

  "flatbed-towing": {
    path: `${TOWING}/flatbed-towing`,
    categoryLabel: "Towing Services",
    categoryPath: TOWING,
    name: "Flatbed Towing",
    seoTitle: "Flatbed Towing in Bridgman & Benton Harbor, MI",
    seoDescription:
      "Damage-free flatbed towing for cars, trucks, SUVs, AWD and low-clearance vehicles across Berrien County. All four wheels off the ground, secured and level.",
    heroEyebrow: "Damage-Free Transport",
    heroTitle: "Flatbed Towing Done Right",
    heroSubtitle:
      "All four wheels off the pavement, level and locked down. The safest way to move a vehicle that shouldn't be dragged.",
    heroImage: "/images/svc-flatbed-towing.png",
    heroImageAlt: "Vehicle secured on a flatbed tow truck with wheel chocks and tie-down straps",
    overviewHeading: "When dragging it just won't do",
    overview: [
      "Some vehicles can't ride on a hook and a couple of wheels. All-wheel-drive cars, lowered or low-clearance vehicles, classics, and anything with a fragile drivetrain need to come up off the ground entirely. That's what a flatbed is for.",
      "We winch your vehicle onto a level deck, strap it down properly, and haul it without grinding bumpers on driveway aprons or stressing the transmission. It's the method we reach for whenever there's any doubt about how a car should travel.",
    ],
    overviewImage: "/images/svc-flatbed-towing.png",
    overviewImageAlt: "Close-up of a vehicle loaded and secured on a flatbed deck",
    overviewBullets: [
      "All four wheels off the ground — no drivetrain wear",
      "Proper soft-strap and wheel tie-downs, no chains on the body",
      "AWD, lowered, classic, and luxury vehicles welcome",
      "Local hauls and longer-distance transport available",
    ],
    benefitsHeading: "Why flatbed is the safe choice",
    benefits: [
      {
        title: "No drivetrain stress",
        text: "Lifting the whole vehicle protects all-wheel-drive systems and transmissions that hate being towed on their wheels.",
      },
      {
        title: "Gentle on low clearance",
        text: "A graduated load angle and careful approach keep front lips, exhausts, and air dams off the ground.",
      },
      {
        title: "Locked down level",
        text: "Secured at the wheels on a flat deck, your vehicle rides steady instead of swaying behind the truck.",
      },
    ],
    processHeading: "How we load and haul",
    processIntro:
      "A flatbed pickup is methodical on purpose — the slow part is what keeps your vehicle safe.",
    process: [
      {
        title: "Assess and position",
        text: "We park safely, read the surroundings, and figure out the best angle to bring the vehicle up onto the deck.",
      },
      {
        title: "Winch it on",
        text: "The bed tilts down and we winch the vehicle up slowly, watching clearance the whole way.",
      },
      {
        title: "Strap and secure",
        text: "Soft straps at the wheels lock everything in place so nothing shifts or rubs in transit.",
      },
      {
        title: "Deliver and unload",
        text: "We take it where you need — home, the shop, the dealer — and unload just as carefully as we loaded.",
      },
    ],
    whyHeading: "The careful way to move your vehicle",
    why: [
      {
        title: "Operators who care",
        text: "Our crew treats every vehicle like it's their own, from a daily commuter to a weekend project car.",
      },
      {
        title: "The right equipment",
        text: "Well-maintained flatbeds and proper tie-down gear mean fewer risks and a cleaner load every time.",
      },
      {
        title: "Clear, fair pricing",
        text: "You'll know the cost before we lift a wheel — local or longer distance, we keep it straightforward.",
      },
      {
        title: "Local knowledge",
        text: "We know the driveways, the back roads, and the tight spots around Berrien County that make a difference on a haul.",
      },
    ],
    faqs: [
      {
        q: "Why would I need a flatbed instead of a regular tow?",
        a: "All-wheel-drive vehicles, lowered cars, classics, and anything with low clearance or a delicate drivetrain should ride fully off the ground. A flatbed prevents the wear and damage a wheel-lift tow can cause.",
      },
      {
        q: "Can you tow my car a long distance?",
        a: "Yes. We handle local moves around Bridgman and Benton Harbor as well as longer-distance transport. Call with your pickup and drop-off points for a quote.",
      },
      {
        q: "Will my lowered or AWD car be safe?",
        a: "That's exactly what flatbeds are built for. We use careful load angles and wheel straps so there's no contact damage and no strain on the drivetrain.",
      },
      {
        q: "Do you tow trucks and SUVs too?",
        a: "We handle light-duty cars, pickups, and SUVs. We don't take on semi-trucks or heavy equipment.",
      },
    ],
  },

  "tire-changes": {
    path: `${ROADSIDE}/tire-changes`,
    categoryLabel: "Roadside Assistance",
    categoryPath: ROADSIDE,
    name: "Tire Changes",
    seoTitle: "Roadside Tire Change Service in Berrien County, MI",
    seoDescription:
      "Flat tire on the shoulder? We'll swap on your spare safely and get you moving — roadside tire changes across Bridgman, Benton Harbor, and Berrien County, 24/7.",
    heroEyebrow: "On-Site Help",
    heroTitle: "Roadside Tire Changes",
    heroSubtitle:
      "A blowout on the highway is no place to be kneeling in traffic. Call us and we'll handle the swap safely.",
    heroImage: "/images/svc-tire-changes.png",
    heroImageAlt: "Roadside technician changing a vehicle tire on-site",
    overviewHeading: "Get off the shoulder sooner",
    overview: [
      "Changing a tire sounds simple until you're doing it on a narrow shoulder with traffic blowing past at 70. That's where most of the real danger is — not the flat itself. We come to you, set up properly, and do the swap from the safe side.",
      "If your spare is good, we'll get it mounted and torqued so you can drive to a tire shop on your own schedule. If something else is going on, we can talk through a tow instead.",
    ],
    overviewImage: "/images/svc-tire-changes.png",
    overviewImageAlt: "Roadside technician changing a vehicle tire on-site",
    overviewBullets: [
      "Safe positioning that keeps you out of live traffic",
      "Spare mounted and lug nuts properly tightened",
      "Day or night, every day of the year",
      "Tow option if the spare isn't usable",
    ],
    benefitsHeading: "Why call instead of doing it yourself",
    benefits: [
      {
        title: "Traffic-side safety",
        text: "We position the truck to shield the work area so nobody's exposed to passing cars during the change.",
      },
      {
        title: "Done right",
        text: "The spare goes on snug and torqued, not finger-tight — so you're not white-knuckling it to the shop.",
      },
      {
        title: "No kneeling in the rain",
        text: "Bad weather, dress clothes, or a trunk you can't reach — we handle it so you don't have to.",
      },
    ],
    processHeading: "How a roadside tire change goes",
    processIntro: "Quick, safe, and back on your way — here's the routine.",
    process: [
      {
        title: "Pull over safely",
        text: "Get as far onto the shoulder as you can, turn on your hazards, and call us with your location.",
      },
      {
        title: "We set up to protect you",
        text: "Our operator parks to block the work zone and gets the jack and tools in position.",
      },
      {
        title: "Swap the tire",
        text: "We remove the flat, mount your spare, and torque the lugs so it's safe to drive on.",
      },
      {
        title: "You head to the shop",
        text: "With the spare on, you can get to a tire shop on your own time instead of stranded on the road.",
      },
    ],
    whyHeading: "Local help when you're stuck with a flat",
    why: [
      {
        title: "Fast county-wide response",
        text: "Two locations mean a truck is rarely far from wherever your tire decided to give out.",
      },
      {
        title: "Straightforward pricing",
        text: "You'll hear the cost before we come out — no add-ons for weather or time of day.",
      },
      {
        title: "Trained operators",
        text: "We change tires the safe way, every time, with the right gear for the job.",
      },
      {
        title: "Always answering",
        text: "Flats don't wait for daylight. Call any hour and we'll pick up.",
      },
    ],
    faqs: [
      {
        q: "What if I don't have a usable spare?",
        a: "No problem — if the spare is missing, flat, or worn out, we can tow your vehicle to a tire shop instead. Just let us know when you call.",
      },
      {
        q: "Can you change a tire in the snow or rain?",
        a: "Yes. Michigan weather is part of the job. We come prepared and position the truck to keep the work area as safe and dry as possible.",
      },
      {
        q: "Is it safe for me to change it myself on the highway?",
        a: "Changing a tire on a live highway shoulder is one of the more dangerous things a driver can do. If you're in traffic, it's worth letting a truck shield the work area instead.",
      },
      {
        q: "How fast can you get to me?",
        a: "Most calls in the area are reached in under 30 minutes. We'll give you an honest ETA based on where you are.",
      },
    ],
  },

  "jump-starts": {
    path: `${ROADSIDE}/jump-starts`,
    categoryLabel: "Roadside Assistance",
    categoryPath: ROADSIDE,
    name: "Jump Starts",
    seoTitle: "Jump Start Service in Bridgman & Benton Harbor, MI",
    seoDescription:
      "Dead battery? We'll get you running and confirm a clean restart before we leave. 24/7 jump-start service across Berrien County, including cold-weather no-starts.",
    heroEyebrow: "Quick Fix",
    heroTitle: "Jump Start Service",
    heroSubtitle:
      "Turn the key and get nothing? We'll get your engine turning over and make sure it stays that way.",
    heroImage: "/images/svc-jump-starts.png",
    heroImageAlt: "Technician connecting jumper cables to a car battery",
    overviewHeading: "Back to life in a few minutes",
    overview: [
      "A dead battery is usually a quick fix, but a bad jump can do real harm to today's electronics. We connect safely, get you started, and then watch how the vehicle behaves before we pack up.",
      "Cold Michigan mornings are hard on batteries, and a battery that's already weak often picks the worst moment to quit. If yours is clearly on its way out, we'll tell you straight so you can plan a replacement instead of getting stranded again next week.",
    ],
    overviewImage: "/images/svc-jump-starts.png",
    overviewImageAlt: "Technician connecting jumper cables to a car battery",
    overviewImagePosition: "center",
    overviewBullets: [
      "Safe, correct connections that protect your electronics",
      "We confirm a clean restart before leaving",
      "Honest heads-up if the battery is failing",
      "Available overnight, weekends, and holidays",
    ],
    benefitsHeading: "Why a proper jump matters",
    benefits: [
      {
        title: "No fried electronics",
        text: "Modern cars don't forgive sloppy jumps. We connect in the right order with the right gear.",
      },
      {
        title: "Verified restart",
        text: "We don't just get it running — we make sure it'll start again before we call it done.",
      },
      {
        title: "Straight talk on your battery",
        text: "If it's clearly dying, we'll say so, so you can replace it on your terms instead of from a parking lot.",
      },
    ],
    processHeading: "How we get you started",
    processIntro: "A few careful minutes is all it usually takes.",
    process: [
      {
        title: "Tell us where you are",
        text: "Call with your location — a driveway, lot, or roadside spot — and we'll head over.",
      },
      {
        title: "Safe hookup",
        text: "We connect to your battery correctly, protecting the vehicle's electronics throughout.",
      },
      {
        title: "Fire it up",
        text: "We get the engine turning over and let it run to confirm the charge is holding.",
      },
      {
        title: "Confirm and advise",
        text: "We make sure it'll restart and let you know if the battery looks like it needs replacing soon.",
      },
    ],
    whyHeading: "More than a quick boost",
    why: [
      {
        title: "Done safely",
        text: "Proper connections and procedure mean no risk to your car's sensitive systems.",
      },
      {
        title: "We don't rush off",
        text: "We stay long enough to confirm a reliable restart, not just the first crank.",
      },
      {
        title: "Fair, up-front cost",
        text: "You'll know the price before we arrive, with no surprises at the end.",
      },
      {
        title: "Any hour",
        text: "Dead batteries love cold mornings and late nights. We answer at both.",
      },
    ],
    faqs: [
      {
        q: "Will a jump start hurt my car's electronics?",
        a: "Not when it's done correctly. We connect in the proper order with the right equipment specifically to protect your vehicle's electronics.",
      },
      {
        q: "What if my car still won't start after a jump?",
        a: "If a jump doesn't take, the issue may be more than the battery. We can tow your vehicle to a mechanic so it gets properly diagnosed.",
      },
      {
        q: "Should I just replace the battery instead?",
        a: "If your battery is old or has died repeatedly, replacement is usually the smarter move. We'll give you an honest read on its condition.",
      },
      {
        q: "Do you come out in the middle of the night?",
        a: "Yes. We dispatch 24 hours a day, every day — cold winter mornings very much included.",
      },
    ],
  },

  "fuel-delivery": {
    path: `${ROADSIDE}/fuel-delivery`,
    categoryLabel: "Roadside Assistance",
    categoryPath: ROADSIDE,
    name: "Fuel Delivery",
    seoTitle: "Emergency Fuel Delivery in Berrien County, MI",
    seoDescription:
      "Ran out of gas between stations? We'll bring enough fuel to get you to the nearest pump. Fast emergency fuel delivery across Bridgman, Benton Harbor, and nearby.",
    heroEyebrow: "Out Of Gas",
    heroTitle: "Emergency Fuel Delivery",
    heroSubtitle:
      "Tank hit empty in the wrong spot? Stay with your vehicle and we'll bring you enough to reach a station.",
    heroImage: "/images/svc-fuel-delivery.png",
    heroImageAlt: "Gas pump nozzles at a fuel station",
    overviewHeading: "Enough to reach the next pump",
    overview: [
      "Running out of fuel always seems to happen on the stretch of road with no station in sight. Instead of walking the shoulder with a gas can, give us a call and stay safe in your vehicle.",
      "We bring enough fuel to get you to the nearest station so you can fill up properly. It's a small thing that turns a stressful detour back into a normal day.",
    ],
    overviewImage: "/images/fuel-delivery-overview.png",
    overviewImageAlt: "Green fuel pump nozzles at a gas station ready for refueling",
    overviewImagePosition: "center",
    overviewBullets: [
      "Gasoline brought directly to your location",
      "Enough to reach the nearest station and fill up",
      "No long walk along a busy or dark roadside",
      "Fast dispatch across our service area",
    ],
    benefitsHeading: "Why call for fuel",
    benefits: [
      {
        title: "Stay put, stay safe",
        text: "No hiking down the shoulder with a can. You wait in your vehicle and we come to you.",
      },
      {
        title: "Quick turnaround",
        text: "We get fuel to you so a dead tank doesn't wreck your whole afternoon or evening.",
      },
      {
        title: "Get rolling again",
        text: "Enough to reach a pump means you fill up on your terms and carry on.",
      },
    ],
    processHeading: "How fuel delivery works",
    processIntro: "Simple and quick — here's the flow.",
    process: [
      {
        title: "Call with your location",
        text: "Tell us where you've stopped and what you're driving so we can find you quickly.",
      },
      {
        title: "We load and roll",
        text: "We grab fuel and head your way, giving you an ETA so you know when to expect us.",
      },
      {
        title: "Fuel delivered",
        text: "We add enough to get your engine running and get you to the nearest station.",
      },
      {
        title: "Top off and go",
        text: "Drive to the pump, fill the tank properly, and you're back to your day.",
      },
    ],
    whyHeading: "A small problem, solved fast",
    why: [
      {
        title: "Local and quick",
        text: "Bases in Bridgman and Benton Harbor keep response times short across the county.",
      },
      {
        title: "Clear pricing",
        text: "You'll know the cost up front — fuel and the call, no mystery fees.",
      },
      {
        title: "Friendly help",
        text: "Everyone runs the tank low sometimes. No lectures — just a hand getting you going.",
      },
      {
        title: "Around the clock",
        text: "Empty tank at midnight? We still answer and still come out.",
      },
    ],
    faqs: [
      {
        q: "How much fuel will you bring?",
        a: "Enough to get you safely to the nearest station, where you can fill up the rest of the way. The idea is to get you moving, not to top off your tank on the roadside.",
      },
      {
        q: "What type of fuel do you deliver?",
        a: "We deliver gasoline. If you drive a diesel, let us know when you call so we can advise on the best option.",
      },
      {
        q: "Should I walk to a gas station instead?",
        a: "Walking a busy or dark roadside isn't worth the risk. Stay with your vehicle, keep your hazards on, and let us bring the fuel to you.",
      },
      {
        q: "How fast can you get there?",
        a: "Most calls in our area are reached in under 30 minutes. We'll give you a realistic ETA based on your location.",
      },
    ],
  },

  "lockout-services": {
    path: `${ROADSIDE}/lockout-services`,
    categoryLabel: "Roadside Assistance",
    categoryPath: ROADSIDE,
    name: "Lockout Services",
    seoTitle: "Car Lockout Service in Bridgman & Benton Harbor, MI",
    seoDescription:
      "Locked your keys in the car? We get you back in without damage, fast. 24/7 vehicle lockout service across Berrien County — including kids or pets locked inside.",
    heroEyebrow: "Lockouts",
    heroTitle: "Vehicle Lockout Service",
    heroSubtitle:
      "Keys on the seat and the doors locked? We get you back inside without damaging your vehicle.",
    heroImage: "/images/lockout-services-hero.png",
    heroImageAlt: "Roadside technician unlocking a vehicle door with professional lockout tools",
    overviewHeading: "Back in your car, no damage",
    overview: [
      "Locking your keys in the car is the kind of thing that happens to careful people on ordinary days — at the grocery store, the trailhead, or your own driveway. We use proper tools to open the door without prying, scratching, or breaking anything.",
      "If there's a child or a pet locked inside, tell us right away when you call. We treat those as urgent and get a truck moving immediately.",
    ],
    overviewImage: "/images/lockout-services-overview.png",
    overviewImageAlt:
      "Roadside technician helping a driver regain access to a locked vehicle without damage",
    overviewImagePosition: "center",
    overviewBullets: [
      "Non-destructive entry — no broken windows or pried doors",
      "Experienced, respectful operators",
      "Priority response for kids or pets locked inside",
      "Available 24/7 across Berrien County",
    ],
    benefitsHeading: "Why call a professional",
    benefits: [
      {
        title: "No damage",
        text: "The right tools open your door cleanly — far cheaper and safer than a coat hanger or a broken window.",
      },
      {
        title: "Urgent when it counts",
        text: "A child or pet inside changes everything. Say so on the call and we move immediately.",
      },
      {
        title: "Quick relief",
        text: "What feels like a disaster is usually a short visit once a trained operator arrives.",
      },
    ],
    processHeading: "How a lockout call works",
    processIntro: "Calm, quick, and damage-free — here's what happens.",
    process: [
      {
        title: "Call and tell us the situation",
        text: "Let us know your location and whether anyone or any pet is inside so we can prioritize.",
      },
      {
        title: "We dispatch a truck",
        text: "The nearest available operator heads your way with the proper entry tools.",
      },
      {
        title: "Careful entry",
        text: "We open the vehicle without prying or scratching, protecting the door, glass, and trim.",
      },
      {
        title: "You're back in",
        text: "Keys in hand, door open, and you're on your way — no body shop visit required.",
      },
    ],
    whyHeading: "The clean way back into your car",
    why: [
      {
        title: "Damage-free methods",
        text: "Professional tools and technique mean your vehicle comes away without a mark.",
      },
      {
        title: "Respectful service",
        text: "No judgment and no fuss — just a quick, friendly hand getting you back in.",
      },
      {
        title: "Up-front pricing",
        text: "You'll know the cost before we arrive, day or night.",
      },
      {
        title: "Fast local response",
        text: "Two county locations keep our arrival times short when you're stuck outside your own car.",
      },
    ],
    faqs: [
      {
        q: "Will you damage my car getting in?",
        a: "No. We use proper lockout tools designed to open doors without prying, scratching, or breaking glass.",
      },
      {
        q: "My child is locked in the car — what do I do?",
        a: "Call us immediately and say a child is inside. We treat that as an emergency and dispatch right away. If the child is in distress, call 911 first.",
      },
      {
        q: "Can you open any vehicle?",
        a: "We handle the vast majority of light-duty cars, trucks, and SUVs. Tell us your make and model when you call and we'll let you know.",
      },
      {
        q: "Are you available late at night?",
        a: "Yes. Lockouts happen at all hours, so we answer and dispatch 24/7, every day of the year.",
      },
    ],
  },
};

export const serviceList = Object.values(serviceContent);
