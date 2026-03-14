// ─────────────────────────────────────────────────────────────
//  useReveal.jsx
//  Scroll-reveal hook + convenience wrapper component.
//  Usage:
//    const ref = useReveal();           // attach to any element
//    <Rv d={200}>...</Rv>               // delay in ms, auto-animates
// ─────────────────────────────────────────────────────────────

import { useRef, useEffect } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds class "on" which
 * triggers the CSS transition defined in global.css.
 *
 * @param {string} cls – base CSS class ("rv" | "rv-l" | "rv-r")
 */
export function useReveal(cls = "rv") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("on");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Convenience wrapper — wraps children in a reveal div.
 *
 * Props:
 *   d   – transition-delay in milliseconds (default 0)
 *   cls – animation class: "rv" | "rv-l" | "rv-r" (default "rv")
 */
export function Rv({ children, d = 0, cls = "rv", style = {} }) {
  const ref = useReveal(cls);
  return (
    <div
      ref={ref}
      className={cls}
      style={{ transitionDelay: `${d}ms`, ...style }}
    >
      {children}
    </div>
  );
}
