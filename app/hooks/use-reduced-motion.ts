import React from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Whether the visitor has asked the system to reduce motion.
 *
 * Starts as `false` so the server and the first client render agree, then
 * corrects itself once mounted. Anything driving an idle animation should stop
 * when this is true.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia(QUERY);

    setPrefersReducedMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);

    query.addEventListener("change", onChange);

    return () => query.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}
