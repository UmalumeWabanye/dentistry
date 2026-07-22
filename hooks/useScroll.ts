"use client";

import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = 0;

    const handler = () => {
      const current = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(current);
      setScrollProgress(docHeight > 0 ? current / docHeight : 0);
      setScrollDirection(current > lastY ? "down" : "up");
      lastY = current;
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { scrollY, scrollProgress, scrollDirection };
}
