import { useAnimation, AnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

type ScrollRevealOptions = IntersectionObserverInit & {
  once?: boolean;
};

export const useScrollReveal = (
  options: ScrollRevealOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px",
    once: true,
  },
): { ref: React.RefObject<HTMLElement>; controls: AnimationControls } => {
  const controls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  const optionsRef = useRef<ScrollRevealOptions>(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const { once = true, ...observerOptions } = optionsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          controls.start("hidden");
        }
      });
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [controls]);

  return { ref, controls };
};
