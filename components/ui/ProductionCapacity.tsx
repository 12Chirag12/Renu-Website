"use client";

import { useState, useEffect } from "react";

type Mode = "annual" | "monthly";

interface ProductionCapacityProps {
  className?: string;
}

/* ── Smooth Increment Counter Hook (matching 45 Cr counter) ── */
function useSmoothCounter(target: number, duration: number = 2200, triggerKey: string | number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
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
  }, [target, duration, triggerKey]);

  return value;
}

export function ProductionCapacity({ className = "" }: ProductionCapacityProps) {
  const [mode, setMode] = useState<Mode>("annual");

  const toggleMode = () => {
    setMode((prev) => (prev === "annual" ? "monthly" : "annual"));
  };

  const isAnnual = mode === "annual";

  // Target values based on mode
  const tabletTarget = isAnnual ? 1500 : 125;
  const capsuleTarget = isAnnual ? 960 : 80;
  const totalTarget = isAnnual ? 2460 : 205;

  // Smooth incrementing counters
  const tabletCount = useSmoothCounter(tabletTarget, 2200, mode);
  const capsuleCount = useSmoothCounter(capsuleTarget, 2200, mode);
  const totalCount = useSmoothCounter(totalTarget, 2200, mode);

  return (
    <div
      className={`relative mx-auto w-full max-w-4xl rounded-2xl border border-slate-200/90 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:px-8 sm:py-6 ${className}`}
    >
      {/* Centered Heading (matching reference image) */}
      <div className="text-center">
        <h4 className="display-face text-lg font-bold text-navy sm:text-xl lg:text-[1.35rem]">
          Production Capacity{" "}
          <span className="text-petrol font-semibold">
            ({isAnnual ? "million / annum" : "million / month"})
          </span>
        </h4>
      </div>

      {/* Horizontal Stats Row with Prev/Next Arrow Buttons */}
      <div className="mt-4 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left Arrow Button (Image 1 style) */}
        <button
          type="button"
          onClick={toggleMode}
          title={isAnnual ? "Switch to Monthly view" : "Switch to Annual view"}
          aria-label="Previous capacity view"
          className="group grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-600 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-navy sm:h-10 sm:w-10"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Center Numbers: Tablets, Capsules, Combined with Smooth Increment */}
        <div className="flex flex-1 items-center justify-around gap-2 px-2 text-center sm:px-6">
          {/* Tablets */}
          <div className="flex-1">
            <p className="display-face text-2xl font-extrabold tracking-tight text-navy tabular-nums font-mono sm:text-3xl lg:text-4xl transition-all duration-300">
              {tabletCount.toLocaleString("en-US")}{isAnnual ? "+" : "M+"}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-700 sm:text-sm lg:text-base">
              Tablets
            </p>
          </div>

          {/* Divider */}
          <div className="h-9 w-px bg-slate-200" aria-hidden="true" />

          {/* Capsules */}
          <div className="flex-1">
            <p className="display-face text-2xl font-extrabold tracking-tight text-navy tabular-nums font-mono sm:text-3xl lg:text-4xl transition-all duration-300">
              {capsuleCount.toLocaleString("en-US")}{isAnnual ? "+" : "M+"}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-700 sm:text-sm lg:text-base">
              Capsules
            </p>
          </div>

          {/* Divider */}
          <div className="h-9 w-px bg-slate-200" aria-hidden="true" />

          {/* Combined Solid Orals */}
          <div className="flex-1">
            <p className="display-face text-2xl font-extrabold tracking-tight text-petrol tabular-nums font-mono sm:text-3xl lg:text-4xl transition-all duration-300">
              {totalCount.toLocaleString("en-US")}{isAnnual ? "+" : "M+"}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-700 sm:text-sm lg:text-base">
              Total Solid Orals
            </p>
          </div>
        </div>

        {/* Right Arrow Button (Image 1 style) */}
        <button
          type="button"
          onClick={toggleMode}
          title={isAnnual ? "Switch to Monthly view" : "Switch to Annual view"}
          aria-label="Next capacity view"
          className="group grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-600 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-navy sm:h-10 sm:w-10"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Subtle indicator dots */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        <button
          type="button"
          onClick={() => setMode("annual")}
          aria-label="Annual view"
          className={`h-1.5 rounded-full transition-all duration-200 ${
            isAnnual ? "w-5 bg-navy" : "w-1.5 bg-slate-300 hover:bg-slate-400"
          }`}
        />
        <button
          type="button"
          onClick={() => setMode("monthly")}
          aria-label="Monthly view"
          className={`h-1.5 rounded-full transition-all duration-200 ${
            !isAnnual ? "w-5 bg-petrol" : "w-1.5 bg-slate-300 hover:bg-slate-400"
          }`}
        />
      </div>
    </div>
  );
}
