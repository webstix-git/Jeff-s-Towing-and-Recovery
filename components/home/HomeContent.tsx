import Link from "next/link";
import CtaSection from "@/components/common/CtaSection";
import { googleReviews, reviewInitials } from "@/lib/reviews";
import { site } from "@/lib/site";

export default function HomeContent() {
  return (
    <>
      <section className="hero" data-screen-label="Hero">
        <div className="hero-bg"><img src="/images/hero.jpg" alt="Jeff's Towing recovering a vehicle at dusk" /></div>
        <div className="hero-scrim"></div>
        <div className="wrap hero-inner">
          <span className="hero-eyebrow"><span className="pulse-dot"></span>Available 24 / 7 · Berrien County</span>
          <h1 className="h-xxl hero-title">Stranded? We<br />Answer <em>Every Call.</em></h1>
          <p className="hero-sub">Founded by a former police officer and firefighter — over 20 years of fast, honest towing and roadside recovery, any hour, any weather.</p>
          <div className="hero-actions">
            <Link className="btn btn--ghost btn--lg" href="/towing-services">Explore Services</Link>
          </div>
        </div>
        <span className="hero-scrollcue">Scroll</span>
      </section>
      
      
      <section className="trust-bar" aria-label="Why drivers trust us">
        <div className="wrap">
          <div className="tb-item">
            <span className="tb-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="1.6"></path><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
            <div><strong>First-Responder Founded</strong><span>By a former officer & firefighter</span></div>
          </div>
          <div className="tb-item">
            <span className="tb-ico"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"></circle><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path></svg></span>
            <div><strong>24/7 Emergency Towing</strong><span>Day, night & holidays</span></div>
          </div>
          <div className="tb-item">
            <span className="tb-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11M5 11h14v5H5v-5zM7 16v2M17 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="8.5" cy="13.5" r="1" fill="currentColor"></circle><circle cx="15.5" cy="13.5" r="1" fill="currentColor"></circle></svg></span>
            <div><strong>Damage-Free Flatbeds</strong><span>Your vehicle rides level & secure</span></div>
          </div>
          <div className="tb-item">
            <span className="tb-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.6"></path><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6"></circle></svg></span>
            <div><strong>Licensed & Insured</strong><span>Fair, up-front pricing</span></div>
          </div>
        </div>
      </section>
      
      
      <section className="intro section" data-screen-label="Local Promise">
        <div className="wrap intro-grid">
          <div className="intro-media reveal">
            <span className="accent"></span>
            <div className="frame"><img src="/images/intro-snow.jpg" alt="Jeff's Towing recovering a car in a Michigan snowstorm" /></div>
            <div className="intro-stat">
              <div className="is-num">20+</div>
              <div className="is-lbl">Years on Berrien County roads</div>
            </div>
          </div>
          <div className="intro-copy reveal d1">
            <span className="eyebrow">Local · Family-Run · Dependable</span>
            <h2 className="h-lg">Built For Michigan Roads — In <em>Any</em> Weather.</h2>
            <p className="lead">When a snowstorm rolls off the lake or a breakdown leaves you on the shoulder, you don't need a call center three states away. You need neighbors who know these roads and answer the phone.</p>
            <p className="lead">For over two decades, Jeff's Towing & Recovery has been that crew — dispatching fast, charging fairly, and treating every driver with the respect they deserve.</p>
            <div className="intro-sign">
              <img src="/images/emblem.png" alt="Jeff's Towing & Recovery emblem" />
              <p><strong>Jeff's Towing & Recovery LLC</strong>Bridgman & Benton Harbor, Michigan</p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="svc section" id="services" data-screen-label="Services">
        <div className="wrap">
          <div className="svc-head reveal">
            <span className="eyebrow">What We Do</span>
            <h2 className="h-xl svc-head-title">
              <span className="svc-head-title-line">Roadside Help For</span>
              <span className="svc-head-title-line">Every Emergency</span>
            </h2>
            <p className="lead svc-head-lead">Light-duty automotive towing and recovery — done fast, priced fairly, and handled right. No semi-trucks or heavy equipment.</p>
          </div>
      
          
          <div className="svc-feature">
            <div className="col">
              <Link className="svc-tile svc-tile--lg reveal" href="/towing-services/24-7-roadside-assistance">
                <img src="/images/svc-24-7-roadside.png" alt="Tow truck with emergency lights ready for a recovery call" />
                <span className="badge">Priority Service</span>
                <div className="svc-tile-body">
                  <span className="idx">1 — Core Service</span>
                  <h3>24/7 Roadside Assistance & Recovery</h3>
                  <p>A real person answers, a truck gets dispatched — at 2pm or 2am, holiday or not. The heart of everything we do.</p>
                  <span className="go">Learn More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                </div>
              </Link>
            </div>
            <div className="col col-right">
              <Link className="svc-tile reveal d1" href="/towing-services/flatbed-towing">
                <img src="/images/svc-flatbed-towing.png" alt="Car secured on a flatbed tow truck" />
                <div className="svc-tile-body">
                  <span className="idx">2 — Damage-Free</span>
                  <h3>Flatbed Towing</h3>
                  <p>All four wheels off the ground — level, secure transport for cars, trucks & SUVs.</p>
                  <span className="go">Learn More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                </div>
              </Link>
              <Link className="svc-tile reveal d2" href="/towing-services/24-7-roadside-assistance">
                <img src="/images/svc-towing-recovery.png" alt="Tow truck loading a vehicle for transport" />
                <div className="svc-tile-body">
                  <span className="idx">3 — Day & Night</span>
                  <h3>After-Hours & Overnight</h3>
                  <p>Stranded after dark? Our lights are always on and our phone is always answered.</p>
                  <span className="go">Learn More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                </div>
              </Link>
            </div>
          </div>
      
          
          <div className="svc-minor reveal">
            <Link className="sm-item" href="/roadside-assistance/tire-changes">
              <div className="sm-top">
                <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"></circle><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"></circle><path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path></svg></span>
                <span className="sm-idx">4</span>
              </div>
              <h4>Tire Changes</h4>
              <p>Flat on the shoulder? We swap on your spare safely, out of traffic.</p>
            </Link>
            <Link className="sm-item" href="/roadside-assistance/jump-starts">
              <div className="sm-top">
                <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path></svg></span>
                <span className="sm-idx">5</span>
              </div>
              <h4>Jump Starts</h4>
              <p>Dead battery? We get you turning over and confirm a clean restart.</p>
            </Link>
            <Link className="sm-item" href="/roadside-assistance/fuel-delivery">
              <div className="sm-top">
                <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M7 21V6a2 2 0 012-2h4a2 2 0 012 2v15M5 21h12M15 9h2.5A1.5 1.5 0 0119 10.5V15a1.5 1.5 0 003 0V8l-2.5-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                <span className="sm-idx">6</span>
              </div>
              <h4>Fuel Delivery</h4>
              <p>Out of gas between stations? We bring enough to get you to the pump.</p>
            </Link>
            <Link className="sm-item" href="/roadside-assistance/lockout-services">
              <div className="sm-top">
                <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"></rect><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8"></path><circle cx="12" cy="15.5" r="1.4" fill="currentColor"></circle></svg></span>
                <span className="sm-idx">7</span>
              </div>
              <h4>Lockout Service</h4>
              <p>Keys locked inside? We get you back in without damage — fast.</p>
            </Link>
          </div>
        </div>
      </section>
      
      
      <section className="legacy section" id="legacy" data-screen-label="Legacy">
        <div className="wrap legacy-grid">
          <div className="legacy-media reveal">
            <div className="frame"><img src="/images/legacy.jpg" alt="Flatbed towing a vehicle in winter conditions" /></div>
            <div className="tab">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.9 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
              <div><strong>Bridgman City Police</strong><span>& Lake Township Fire Dept.</span></div>
            </div>
          </div>
          <div className="legacy-copy reveal d1">
            <span className="eyebrow on-dark">Our Legacy</span>
            <h2 className="h-lg">Built On A First <em>Responder's</em> Promise.</h2>
            <p className="lead">Jeff didn't start out in towing — he started out serving his community, first as an officer with the Bridgman City Police, then with the Lake Township Fire Department. When he founded this company, he carried that same oath onto the roadside.</p>
            <p className="lead">Today our team upholds his standard in his memory, on every single call.</p>
            <div className="values">
              <div className="value">
                <span className="v-num">1</span>
                <div className="v-lbl">Fairness</div>
                <p>Honest pricing, quoted up front — no emergency surcharges.</p>
              </div>
              <div className="value">
                <span className="v-num">2</span>
                <div className="v-lbl">Reliability</div>
                <p>We answer every call and show up when we say we will.</p>
              </div>
              <div className="value">
                <span className="v-num">3</span>
                <div className="v-lbl">Respect</div>
                <p>You and your vehicle are treated with genuine care.</p>
              </div>
            </div>
            <p className="memorial">In loving memory and honor of Jeff — mentor, first responder, and the heart of this company.</p>
          </div>
        </div>
      </section>
      
      
      <section className="areas section" id="areas" data-screen-label="Service Areas">
        <div className="wrap areas-grid">
          <div className="areas-copy reveal">
            <span className="eyebrow">Where We Go</span>
            <h2 className="h-xl">Serving All Of Berrien County</h2>
            <p className="lead">Two locations keep us close when you need us most — covering Bridgman, St. Joseph, Benton Harbor and the surrounding communities, fast.</p>
            <div className="loc-cards">
              <div className="loc-card">
                <span className="pin"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8"></path><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8"></circle></svg></span>
                <div><h4>Bridgman</h4><p>9211 California Rd<br />Bridgman, MI 49106</p></div>
              </div>
              <div className="loc-card">
                <span className="pin"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8"></path><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8"></circle></svg></span>
                <div><h4>Benton Harbor</h4><p>722 M-139<br />Benton Harbor, MI 49022</p></div>
              </div>
            </div>
            <div className="area-chips">
              <span>Bridgman</span><span>St. Joseph</span><span>Benton Harbor</span>
              <span>Stevensville</span><span>Lake Township</span><span>Sawyer</span><span>+ Surrounding</span>
            </div>
          </div>
          <div className="areas-map reveal d1" aria-label="Service area map">
            <div className="map-grid"></div>
            <div className="road r1"></div>
            <div className="road r2"></div>
            <div className="road r3"></div>
            <div className="map-pin map-a"><span className="dot pulse"></span><span className="lbl">Bridgman</span></div>
            <div className="map-pin map-b"><span className="dot"></span><span className="lbl">Benton Harbor</span></div>
            <span className="map-note">Berrien County, Michigan</span>
          </div>
        </div>
      </section>
      
      
      <section className="reviews section" id="reviews" data-screen-label="Reviews">
        <div className="wrap">
          <div className="rv-top reveal">
            <div>
              <span className="eyebrow on-dark">Customer Reviews</span>
              <h2 className="h-lg">What Drivers Are Saying</h2>
            </div>
            <div className="rv-score">
              <span className="big">
                {site.rating.value}
                <span className="rv-max"> / {site.rating.max}</span>
              </span>
              <div>
                <div className="stars">★★★★★</div>
                <div className="sub">Out of 5.0</div>
              </div>
            </div>
          </div>
      
          <div className="rv-carousel reveal d1" data-carousel="">
            <div className="rv-viewport">
              <div className="rv-track">
                {googleReviews.map((review, index) => (
                  <div className="rv-slide" key={`${review.name}-${index}`}>
                    <blockquote className="rv-quote">
                      <span className="mark">“</span>
                      {review.quote}
                      <span className="mark">”</span>
                    </blockquote>
                    <div className="rv-meta">
                      <div className="rv-av">{reviewInitials(review.name)}</div>
                      <div>
                        <strong>{review.name}</strong>
                        <span>{review.location}</span>
                        <div className="rstars">★★★★★</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv-controls">
              <div className="rv-arrows">
                <button className="rv-arrow" data-prev="" aria-label="Previous review"><svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                <button className="rv-arrow" data-next="" aria-label="Next review"><svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
              </div>
              <div className="rv-dots" aria-hidden="true"></div>
            </div>
          </div>

          <div className="rv-cta reveal d2">
            <a
              className="btn btn--call btn--lg"
              href={site.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more customer reviews (opens in a new tab)"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </section>
      
      
      <CtaSection />
    </>
  );
}
