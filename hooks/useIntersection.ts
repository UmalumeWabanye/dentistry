"use client";

import { useEffect, useRef, useState } from "react";

interface Options extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersection<T extends Element>(options: Options = {}) {
  const { once = true, threshold = 0.1, rootMargin = "0px", ...rest } = options;
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin, ...rest }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin, rest]);

  return { ref, isIntersecting };
}
