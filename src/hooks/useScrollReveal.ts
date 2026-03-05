import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Also reveal children with .reveal class (for stagger)
            entry.target.querySelectorAll(".reveal").forEach((child) => {
              child.classList.add("visible");
            });
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the container itself if it has .reveal
    if (el.classList.contains("reveal")) {
      observer.observe(el);
    }

    // Observe all .reveal children
    el.querySelectorAll(".reveal").forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
