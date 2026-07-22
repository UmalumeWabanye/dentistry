"use client";

import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useMediaQuery(breakpoint: Breakpoint, direction: "min" | "max" = "min") {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const px = breakpoints[breakpoint];
    const query =
      direction === "min"
        ? `(min-width: ${px}px)`
        : `(max-width: ${px - 1}px)`;

    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint, direction]);

  return matches;
}
