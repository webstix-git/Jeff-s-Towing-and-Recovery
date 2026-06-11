
<header className="site-header site-header--float" data-screen-label="Header">
  <div className="wrap">
    <a className="brand" href="/" aria-label="Jeff's Towing and Recovery home">
      <img src="/images/logo.png" alt="Jeff's Towing & Recovery" />
    </a>
    <nav className="nav" aria-label="Primary">
      <a href="/" className="active">Home</a>
      <div className="nav-item">
        <a href="/services">Services
          <svg viewBox="0 0 24 24" fill="none" width="13" height="13"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </a>
        <div className="dropdown">
          <a href="/services#roadside">24/7 Roadside Assistance</a>
          <a href="/services#flatbed">Flatbed Towing</a>
          <a href="/services#tire">Tire Changes</a>
          <a href="/services#jump">Jump Starts</a>
          <a href="/services#fuel">Fuel Delivery</a>
          <a href="/services#lockout">Lockout Service</a>
        </div>
      </div>
      <a href="#legacy">About</a>
      <a href="#areas">Service Areas</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="header-cta">
      <div className="header-phone">
        <span className="lbl">Call 24/7</span>
        <a className="num" href="tel:+12694656142">(269) 465-6142</a>
      </div>
      <a className="btn btn--call" href="tel:+12694656142" aria-label="Call now">
        <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor"></path></svg>
        Call Now
      </a>
    </div>
    <button className="nav-toggle" aria-label="Open menu" aria-haspopup="true">
      <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"></path></svg>
    </button>
  </div>
</header>


<div className="drawer" role="dialog" aria-label="Menu">
  <div className="drawer-scrim"></div>
  <div className="drawer-panel">
    <div className="d-head">
      <img src="/images/logo.png" alt="Jeff's Towing & Recovery" />
      <button className="drawer-close" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"></path></svg>
      </button>
    </div>
    <nav aria-label="Mobile">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <div className="d-sub">
        <a href="/services#roadside">Roadside Assistance</a>
        <a href="/services#flatbed">Flatbed Towing</a>
        <a href="/services#lockout">Lockout Service</a>
      </div>
      <a href="#legacy">About</a>
      <a href="#areas">Service Areas</a>
      <a href="#contact">Contact</a>
    </nav>
    <a className="btn btn--call btn--block d-phone" href="tel:+12694656142">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor"></path></svg>
      (269) 465-6142
    </a>
  </div>
</div>


<section className="hero" data-screen-label="Hero">
  <div className="hero-bg"><img src="/images/hero.jpg" alt="Jeff's Towing recovering a vehicle at dusk" /></div>
  <div className="hero-scrim"></div>
  <div className="wrap hero-inner">
    <span className="hero-eyebrow"><span className="pulse-dot"></span>Available 24 / 7 / 365 · Berrien County</span>
    <h1 className="h-xxl" style={{ fontSize: "58px" }}>Stranded? We<br />Answer <em>Every Call.</em></h1>
    <p className="hero-sub">Founded by a former police officer and firefighter — over 20 years of fast, honest towing and roadside recovery, any hour, any weather.</p>
    <div className="hero-actions">
      <a className="btn btn--call btn--lg" href="tel:+12694656142">
        <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor"></path></svg>
        Call (269) 465-6142
      </a>
      <a className="btn btn--ghost btn--lg" href="/services">Explore Services</a>
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
      <div><strong>Open 24/7/365</strong><span>Holidays & overnight included</span></div>
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
      <div>
        <span className="eyebrow">What We Do</span>
        <h2 className="h-xl">Roadside Help For Every Emergency</h2>
      </div>
      <p className="lead">Light-duty automotive towing and recovery — done fast, priced fairly, and handled right. No semi-trucks or heavy equipment.</p>
    </div>

    
    <div className="svc-feature">
      <div className="col">
        <a className="svc-tile svc-tile--lg reveal" href="/services#roadside">
          <img src="/images/svc-roadside.jpg" alt="Tow truck recovering a vehicle" />
          <span className="badge">Priority Service</span>
          <div className="svc-tile-body">
            <span className="idx">01 — Core Service</span>
            <h3>24/7 Roadside Assistance & Recovery</h3>
            <p>A real person answers, a truck gets dispatched — at 2pm or 2am, holiday or not. The heart of everything we do.</p>
            <span className="go">Learn More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          </div>
        </a>
      </div>
      <div className="col col-right">
        <a className="svc-tile reveal d1" href="/services#flatbed">
          <img src="/images/svc-flatbed.jpg" alt="Car secured on a flatbed tow truck" />
          <div className="svc-tile-body">
            <span className="idx">02 — Damage-Free</span>
            <h3>Flatbed Towing</h3>
            <p>All four wheels off the ground — level, secure transport for cars, trucks & SUVs.</p>
            <span className="go">Learn More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          </div>
        </a>
        <a className="svc-tile reveal d2" href="/services#roadside">
          <img src="/images/svc-night.jpg" alt="Tow truck working at night with lights on" />
          <div className="svc-tile-body">
            <span className="idx">03 — Day & Night</span>
            <h3>After-Hours & Overnight</h3>
            <p>Stranded after dark? Our lights are always on and our phone is always answered.</p>
            <span className="go">Learn More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          </div>
        </a>
      </div>
    </div>

    
    <div className="svc-minor reveal">
      <a className="sm-item" href="/services#tire">
        <div className="sm-top">
          <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"></circle><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"></circle><path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path></svg></span>
          <span className="sm-idx">04</span>
        </div>
        <h4>Tire Changes</h4>
        <p>Flat on the shoulder? We swap on your spare safely, out of traffic.</p>
      </a>
      <a className="sm-item" href="/services#jump">
        <div className="sm-top">
          <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path></svg></span>
          <span className="sm-idx">05</span>
        </div>
        <h4>Jump Starts</h4>
        <p>Dead battery? We get you turning over and confirm a clean restart.</p>
      </a>
      <a className="sm-item" href="/services#fuel">
        <div className="sm-top">
          <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><path d="M7 21V6a2 2 0 012-2h4a2 2 0 012 2v15M5 21h12M15 9h2.5A1.5 1.5 0 0119 10.5V15a1.5 1.5 0 003 0V8l-2.5-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          <span className="sm-idx">06</span>
        </div>
        <h4>Fuel Delivery</h4>
        <p>Out of gas between stations? We bring enough to get you to the pump.</p>
      </a>
      <a className="sm-item" href="/services#lockout">
        <div className="sm-top">
          <span className="sm-ico"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"></rect><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8"></path><circle cx="12" cy="15.5" r="1.4" fill="currentColor"></circle></svg></span>
          <span className="sm-idx">07</span>
        </div>
        <h4>Lockout Service</h4>
        <p>Keys locked inside? We get you back in without damage — fast.</p>
      </a>
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
          <span className="v-num">01</span>
          <div className="v-lbl">Fairness</div>
          <p>Honest pricing, quoted up front — no emergency surcharges.</p>
        </div>
        <div className="value">
          <span className="v-num">02</span>
          <div className="v-lbl">Reliability</div>
          <p>We answer every call and show up when we say we will.</p>
        </div>
        <div className="value">
          <span className="v-num">03</span>
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
        <span className="eyebrow on-dark">Google Reviews</span>
        <h2 className="h-lg">What Drivers Are Saying</h2>
      </div>
      <div className="rv-score">
        <span className="big">4.9</span>
        <div>
          <div className="stars">★★★★★</div>
          <div className="sub">Based on Google Reviews</div>
        </div>
        <svg className="gicon" viewBox="0 0 24 24"><path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.6a4.8 4.8 0 01-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.6z"></path><path fill="#34A853" d="M12 22c2.7 0 5-1 6.6-2.5l-3.3-2.6c-.9.6-2 1-3.3 1a5.8 5.8 0 01-5.4-4H3.2v2.6A10 10 0 0012 22z"></path><path fill="#FBBC05" d="M6.6 13.9a5.9 5.9 0 010-3.8V7.5H3.2a10 10 0 000 9z"></path><path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 003.2 7.5l3.4 2.6A5.8 5.8 0 0112 6.1z"></path></svg>
      </div>
    </div>

    <div className="rv-carousel reveal d1" data-carousel="">
      <div className="rv-viewport">
        <div className="rv-track">
          <div className="rv-slide">
            <blockquote className="rv-quote"><span className="mark">“</span>Locked my keys in the car with the kids' seats inside. They had someone to me in under 25 minutes and charged a fair price. Lifesavers.<span className="mark">”</span></blockquote>
            <div className="rv-meta"><div className="rv-av">SM</div><div><strong>Sarah M.</strong><span>St. Joseph, MI</span><div className="rstars">★★★★★</div></div></div>
          </div>
          <div className="rv-slide">
            <blockquote className="rv-quote"><span className="mark">“</span>Broke down on the highway at 2am. They answered, stayed on the line until the driver arrived, and treated my old truck like a Ferrari.<span className="mark">”</span></blockquote>
            <div className="rv-meta"><div className="rv-av">DR</div><div><strong>Derek R.</strong><span>Benton Harbor, MI</span><div className="rstars">★★★★★</div></div></div>
          </div>
          <div className="rv-slide">
            <blockquote className="rv-quote"><span className="mark">“</span>You can tell this business is run by someone who cares about the community. Fair quote, no surprise fees, respectful driver. Won't call anyone else.<span className="mark">”</span></blockquote>
            <div className="rv-meta"><div className="rv-av">TL</div><div><strong>Tonya L.</strong><span>Bridgman, MI</span><div className="rstars">★★★★★</div></div></div>
          </div>
          <div className="rv-slide">
            <blockquote className="rv-quote"><span className="mark">“</span>Dead battery in a snowstorm. They came fast, jumped it, and made sure it started a second time before leaving. That care is rare.<span className="mark">”</span></blockquote>
            <div className="rv-meta"><div className="rv-av">MK</div><div><strong>Marcus K.</strong><span>Stevensville, MI</span><div className="rstars">★★★★★</div></div></div>
          </div>
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
  </div>
</section>


<section className="cta" id="contact" data-screen-label="Final CTA">
  <div className="cta-bg"><img src="/images/cta-highway.jpg" alt="Transport on the highway at sunset" /></div>
  <div className="wrap cta-grid">
    <div className="reveal">
      <span className="eyebrow on-dark">Don't Wait On The Roadside</span>
      <h2 className="h-xl">Help Is One Call Away. <em>Day Or Night.</em></h2>
      <p className="lead">No call centers, no runaround — just honest, local help when you need it most. Save our number before you ever need it.</p>
    </div>
    <div className="cta-call reveal d1">
      <span className="lbl">Call Us 24 / 7 / 365</span>
      <a className="num" href="tel:+12694656142">(269) 465-6142</a>
      <a className="btn btn--call btn--lg btn--block" href="tel:+12694656142">
        <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor"></path></svg>
        Call For Help Now
      </a>
      <span className="cta-note"><span className="pulse-dot"></span>Bridgman & Benton Harbor, MI</span>
    </div>
  </div>
</section>


<footer className="site-footer" data-screen-label="Footer">
  <div className="wrap">
    <div className="footer-grid">
      <div>
        <img className="footer-logo" src="/images/logo.png" alt="Jeff's Towing & Recovery" />
        <p style={{ fontSize: "15px", maxWidth: "300px" }}>Family-run, first-responder founded towing & recovery serving Berrien County, Michigan with fairness and respect for over 20 years.</p>
        <div className="footer-social">
          <a href="#contact" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8C15.7 4.8 14.7 4.7 13.5 4.7 11 4.7 9.3 6.2 9.3 9v2H6.6v3H9.3v8H13z"></path></svg></a>
          <a href="tel:+12694656142" aria-label="Call"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z"></path></svg></a>
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="/services#roadside">Roadside Assistance</a></li>
          <li><a href="/services#flatbed">Flatbed Towing</a></li>
          <li><a href="/services#tire">Tire Changes</a></li>
          <li><a href="/services#jump">Jump Starts</a></li>
          <li><a href="/services#fuel">Fuel Delivery</a></li>
          <li><a href="/services#lockout">Lockout Service</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#legacy">About / Our Legacy</a></li>
          <li><a href="#legacy">Jeff's Memorial</a></li>
          <li><a href="#areas">Service Areas</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">First Responder Support</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <a className="footer-phone" href="tel:+12694656142">(269) 465-6142</a>
        <div className="footer-loc"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8"></path><circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8"></circle></svg><span>9211 California Rd,<br />Bridgman, MI 49106</span></div>
        <div className="footer-loc"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8"></path><circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8"></circle></svg><span>722 M-139,<br />Benton Harbor, MI 49022</span></div>
        <div className="footer-loc"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"></circle><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path></svg><span>Open 24/7/365</span></div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Jeff's Towing & Recovery LLC</span>
      <span>Licensed & Insured · Berrien County, MI</span>
    </div>
  </div>
</footer>


<a className="fab-call" href="tel:+12694656142" aria-label="Call now">
  <span className="ring"></span>
  <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor"></path></svg>
</a>
<button className="to-top" aria-label="Scroll to top">
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>


<div className="mobile-callbar">
  <a className="btn btn--call" href="tel:+12694656142">
    <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.2 2.3z" fill="currentColor"></path></svg>
    Call (269) 465-6142
  </a>
</div>