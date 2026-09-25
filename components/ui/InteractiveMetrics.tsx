"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const metrics = [
  {
    value: "2 Core",
    label: "Dosage Forms",
    subtext: "Specialized in Tablets & Capsules manufacturing",
    icon: "layers" as const,
  },
  {
    value: "100%",
    label: "Batch Traceability",
    subtext: "End-to-end documentation from API receipt to dispatch",
    icon: "document" as const,
  },
  {
    value: "7 Stage",
    label: "Quality Workflow",
    subtext: "Controlled checkpoints at every manufacturing phase",
    icon: "shield" as const,
  },
  {
    value: "<24h",
    label: "Response Commitment",
    subtext: "Dedicated technical review for contract manufacturing enquiries",
    icon: "clock" as const,
  },
];

export function InteractiveMetrics() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        return (
          <div
            key={item.label}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
              isHovered
                ? "border-cyan/50 bg-white -translate-y-1.5 shadow-xl shadow-cyan/10"
                : "border-slate-200 bg-white/90 shadow-sm"
            }`}
          >
            {/* Ambient radial glow on hover */}
            <div
              className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan/15 blur-2xl transition-opacity duration-500 pointer-events-none ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="flex items-center justify-between">
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300 ${
                  isHovered ? "bg-navy text-cyan" : "bg-mist text-petrol"
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-[.68rem] font-bold uppercase tracking-wider text-slate-400">
                0{idx + 1}
              </span>
            </div>

            <div className="mt-6">
              <p className="display-face text-3xl font-extrabold text-navy tracking-tight sm:text-4xl transition-colors group-hover:text-petrol">
                {item.value}
              </p>
              <h4 className="mt-1 text-sm font-bold text-navy">{item.label}</h4>
              <p className="mt-2 text-xs leading-5 text-slate-500">{item.subtext}</p>
            </div>

            <div
              className={`mt-4 h-1 w-full rounded-full bg-slate-100 overflow-hidden transition-opacity ${
                isHovered ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className={`h-full bg-gradient-to-r from-cyan to-petrol transition-all duration-500 ${
                  isHovered ? "w-full" : "w-1/3"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
