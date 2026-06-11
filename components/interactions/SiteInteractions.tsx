"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const toTop = document.querySelector<HTMLElement>(".to-top");

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("scrolled", y > 40);
      if (toTop) toTop.classList.toggle("show", y > 500);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const drawer = document.querySelector<HTMLElement>(".drawer");
    const openBtn = document.querySelector<HTMLElement>(".nav-toggle");
    const closeBtn = document.querySelector<HTMLElement>(".drawer-close");
    const scrim = document.querySelector<HTMLElement>(".drawer-scrim");

    function setDrawer(open: boolean) {
      if (!drawer) return;
      drawer.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    }

    const onOpen = () => setDrawer(true);
    const onClose = () => setDrawer(false);
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    openBtn?.addEventListener("click", onOpen);
    closeBtn?.addEventListener("click", onClose);
    scrim?.addEventListener("click", onClose);
    document.addEventListener("keydown", onKeydown);

    // Close the drawer whenever any link inside it is followed.
    const drawerLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".drawer-panel a",
    );
    drawerLinks.forEach((a) => a.addEventListener("click", onClose));

    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    let io: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window && reveals.length) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14 },
      );
      reveals.forEach((el) => io?.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    const carousel = document.querySelector<HTMLElement>("[data-carousel]");
    let timer: ReturnType<typeof setInterval> | null = null;

    if (carousel) {
      const track = carousel.querySelector<HTMLElement>(".rv-track");
      const slides = carousel.querySelectorAll<HTMLElement>(".rv-slide");
      const dotsWrap = carousel.querySelector<HTMLElement>(".rv-dots");
      let i = 0;
      const n = slides.length;

      if (dotsWrap) {
        for (let d = 0; d < n; d++) {
          const b = document.createElement("button");
          b.className = "rv-dot";
          b.setAttribute("aria-label", `Review ${d + 1}`);
          b.addEventListener("click", () => {
            go(d);
            reset();
          });
          dotsWrap.appendChild(b);
        }
      }

      const dots = dotsWrap?.querySelectorAll<HTMLElement>(".rv-dot") ?? [];

      function go(idx: number) {
        i = (idx + n) % n;
        if (track) track.style.transform = `translateX(${-i * 100}%)`;
        dots.forEach((dt, k) => dt.classList.toggle("active", k === i));
      }

      function reset() {
        if (timer) clearInterval(timer);
        timer = setInterval(() => go(i + 1), 5000);
      }

      const prev = carousel.querySelector<HTMLElement>("[data-prev]");
      const next = carousel.querySelector<HTMLElement>("[data-next]");
      prev?.addEventListener("click", () => {
        go(i - 1);
        reset();
      });
      next?.addEventListener("click", () => {
        go(i + 1);
        reset();
      });

      go(0);
      reset();

      const pause = () => {
        if (timer) clearInterval(timer);
      };
      carousel.addEventListener("mouseenter", pause);
      carousel.addEventListener("mouseleave", reset);
    }

    document.querySelectorAll<HTMLElement>("[data-faq]").forEach((item) => {
      const q = item.querySelector<HTMLElement>(".faq-q");
      q?.addEventListener("click", () => {
        const open = item.classList.toggle("open");
        q.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      openBtn?.removeEventListener("click", onOpen);
      closeBtn?.removeEventListener("click", onClose);
      scrim?.removeEventListener("click", onClose);
      document.removeEventListener("keydown", onKeydown);
      drawerLinks.forEach((a) => a.removeEventListener("click", onClose));
      document.body.style.overflow = "";
      io?.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return null;
}
