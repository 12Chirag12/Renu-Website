"use client";

import { useState, useEffect, useRef } from "react";

interface IncrementalCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
  triggerKey?: string | number;
}

export function IncrementalCounter({
  target,
  duration = 2000,
  suffix = "+",
  className = "",
  triggerKey,
}: IncrementalCounterProps) {
  // Start with 0 so the user sees it increment upwards to the target number
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    let cancelCurrentAnimation: (() => void) | null = null;

    const startAnimation = () => {
      if (hasAnimatedRef.current && triggerKey === undefined) return;
      hasAnimatedRef.current = true;

      setCount(0);
      let startTime: number | null = null;
      let frameId: number;

      // Ease out cubic: fast start, smooth and natural deceleration to final number
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const updateCounter = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.round(easeOutCubic(progress) * target);

        setCount(currentVal);

        if (progress < 1) {
          frameId = requestAnimationFrame(updateCounter);
        } else {
          setCount(target);
        }
      };

      frameId = requestAnimationFrame(updateCounter);
      cancelCurrentAnimation = () => cancelAnimationFrame(frameId);
    };

    // If triggerKey changes (e.g. switching tabs), allow re-animating
    if (triggerKey !== undefined) {
      hasAnimatedRef.current = false;
    }

    let observer: IntersectionObserver | null = null;
    let fallbackTimer: NodeJS.Timeout | null = null;

    if (typeof IntersectionObserver !== "undefined" && elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            startAnimation();
            if (observer) {
              observer.disconnect();
              observer = null;
            }
          }
        },
        { threshold: 0, rootMargin: "40px" }
      );
      observer.observe(elementRef.current);

      // Check if already in viewport
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startAnimation();
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      }
    } else {
      startAnimation();
    }

    // Safety fallback: if not triggered within 500ms, start animation regardless so it never stays 0
    fallbackTimer = setTimeout(() => {
      if (!hasAnimatedRef.current) {
        startAnimation();
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      }
    }, 500);

    return () => {
      if (cancelCurrentAnimation) cancelCurrentAnimation();
      if (observer) observer.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [target, duration, triggerKey]);

  return (
    <span ref={elementRef} className={`inline-block ${className}`}>
      {count.toLocaleString("en-US")}{suffix}
    </span>
  );
}
