"use client";

import { IncrementalCounter } from "./IncrementalCounter";

interface ProductionCapacityProps {
  className?: string;
}

export function ProductionCapacity({ className = "" }: ProductionCapacityProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-4xl rounded-3xl border border-slate-200/90 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:p-8 ${className}`}
    >
      {/* Centered Heading */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-petrol">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          Installed Manufacturing Infrastructure
        </span>
        <h4 className="display-face mt-2 text-xl font-bold text-navy sm:text-2xl">
          Annual Production Capacity{" "}
          <span className="text-petrol font-semibold">(million / annum)</span>
        </h4>
        <p className="mt-1 text-xs text-slate-500">
          Commercial scale capacity per annum across approved tablet rotary lines and encapsulation suites.
        </p>
      </div>

      {/* 2-Column Dedicated Stats Grid: Tablets & Capsules (No Total, Only Per Annum) */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Tablets Capacity Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-cyan/25 bg-gradient-to-br from-mist/80 via-white to-cyan/10 p-5 shadow-sm transition-all duration-300 hover:border-cyan/50 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                Tablets Section
              </span>
            </div>
            <span className="rounded-md bg-cyan/15 px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-petrol">
              Verified Scale
            </span>
          </div>

          <div className="mt-3 flex items-baseline gap-2.5">
            <span className="display-face text-3xl sm:text-4xl font-extrabold tracking-tight text-navy tabular-nums font-mono">
              <IncrementalCounter target={1500} duration={2000} suffix="+" />
            </span>
            <span className="text-sm sm:text-base font-bold text-petrol">
              Million Tablets <span className="text-xs font-semibold text-slate-500">/ annum</span>
            </span>
          </div>
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
            High-speed rotary punching lines supporting multi-million commercial runs.
          </p>
        </div>

        {/* Capsules Capacity Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-petrol/25 bg-gradient-to-br from-mist/80 via-white to-petrol/10 p-5 shadow-sm transition-all duration-300 hover:border-petrol/50 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-petrol opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-petrol" />
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                Capsules Section
              </span>
            </div>
            <span className="rounded-md bg-petrol/15 px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-petrol">
              Verified Scale
            </span>
          </div>

          <div className="mt-3 flex items-baseline gap-2.5">
            <span className="display-face text-3xl sm:text-4xl font-extrabold tracking-tight text-navy tabular-nums font-mono">
              <IncrementalCounter target={960} duration={2000} suffix="+" />
            </span>
            <span className="text-sm sm:text-base font-bold text-petrol">
              Million Capsules <span className="text-xs font-semibold text-slate-500">/ annum</span>
            </span>
          </div>
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
            Automatic precision encapsulation suites for powder blends and micro-pellets.
          </p>
        </div>
      </div>
    </div>
  );
}
