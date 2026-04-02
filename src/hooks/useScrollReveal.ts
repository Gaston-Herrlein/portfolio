import { useEffect, useRef, useState } from "react";

type UseScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = "0px",
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isRevealed };
};