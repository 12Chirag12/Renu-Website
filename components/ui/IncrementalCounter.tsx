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
  const [value, setValue] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsMounted(true);

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return;

    setValue(0);
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = easeOutCubic(progress);

      const current = Math.round(eased * target);
      setValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, hasEnteredView, triggerKey]);

  // SSR fallback renders target for SEO
  if (!isMounted) {
    return (
      <span className={className}>
        {target.toLocaleString("en-US")}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={elementRef} className={className}>
      {(hasEnteredView ? value : 0).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
