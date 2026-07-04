"use client";

import { useEffect } from "react";

export function HomeEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;
    let started = false;

    const start = async () => {
      if (started) return;
      started = true;

      const [{ gsap }, { ScrollTrigger }, motionTools] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("framer-motion"),
      ]);

      if (cancelled) return;

      motionTools.animate(
        ".ticket-stats article",
        { opacity: [0.72, 1], transform: ["translateY(10px)", "translateY(0px)"] },
        { duration: 0.42, delay: motionTools.stagger(0.04) },
      );

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          const distance = Number(element.dataset.parallax ?? 24);
          gsap.to(element, {
            y: distance,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        gsap.to(".home-grid-bg", {
          backgroundPosition: "72px 72px",
          ease: "none",
          scrollTrigger: {
            trigger: ".ts-home",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });

      cleanup = () => context.revert();
    };

    window.addEventListener("scroll", start, { once: true, passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", start);
      cleanup?.();
    };
  }, []);

  return null;
}
