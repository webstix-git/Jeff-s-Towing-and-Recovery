/* Jeff's Towing — shared interactions */
(function () {
  // Header shrink on scroll
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll to top
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile drawer
  var drawer = document.querySelector('.drawer');
  var openBtn = document.querySelector('.nav-toggle');
  var closeBtn = document.querySelector('.drawer-close');
  var scrim = document.querySelector('.drawer-scrim');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (openBtn) openBtn.addEventListener('click', function () { setDrawer(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  document.querySelectorAll('.drawer-panel a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function () { setDrawer(false); });
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Reviews carousel
  var carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    var track = carousel.querySelector('.rv-track');
    var slides = carousel.querySelectorAll('.rv-slide');
    var dotsWrap = carousel.querySelector('.rv-dots');
    var i = 0, n = slides.length, timer = null;
    if (dotsWrap) {
      for (var d = 0; d < n; d++) {
        var b = document.createElement('button');
        b.className = 'rv-dot'; b.setAttribute('aria-label', 'Review ' + (d + 1));
        (function (idx) { b.addEventListener('click', function () { go(idx); reset(); }); })(d);
        dotsWrap.appendChild(b);
      }
    }
    var dots = dotsWrap ? dotsWrap.querySelectorAll('.rv-dot') : [];
    function go(idx) {
      i = (idx + n) % n;
      if (track) track.style.transform = 'translateX(' + (-i * 100) + '%)';
      dots.forEach(function (dt, k) { dt.classList.toggle('active', k === i); });
    }
    function reset() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 5000); }
    var prev = carousel.querySelector('[data-prev]');
    var next = carousel.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { go(i - 1); reset(); });
    if (next) next.addEventListener('click', function () { go(i + 1); reset(); });
    go(0); reset();
    carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
    carousel.addEventListener('mouseleave', reset);
  }

  // FAQ accordion
  document.querySelectorAll('[data-faq]').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (q) q.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
