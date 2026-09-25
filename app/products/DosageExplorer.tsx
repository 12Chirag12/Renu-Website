"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

type DosageDetail = {
  id: "tablets" | "capsules";
  name: "Tablets" | "Capsules";
  code: string;
  badge: string;
  headline: string;
  summary: string;
  formTypes: { title: string; desc: string; icon: IconName }[];
  technicalSpecs: { label: string; value: string }[];
  packagingOptions: string[];
  sampleApplications: string[];
};

const dosageData: Record<"tablets" | "capsules", DosageDetail> = {
  tablets: {
    id: "tablets",
    name: "Tablets",
    code: "TB",
    badge: "Solid Oral Formulation",
    headline: "Precision Compression & Coating Capabilities",
    summary:
      "Our tablet manufacturing infrastructure supports high-speed rotary compression, advanced aqueous and organic film coating, and modified-release formulation profiles with stringent weight uniformity.",
    formTypes: [
      {
        title: "Film-Coated Tablets",
        desc: "Aqueous and organic polymer film coatings protecting sensitive APIs and improving swallowability.",
        icon: "shield",
      },
      {
        title: "Enteric-Coated Tablets",
        desc: "pH-dependent polymers designed for targeted intestinal drug release and gastric protection.",
        icon: "layers",
      },
      {
        title: "Sustained & Extended Release",
        desc: "Hydrophilic and lipid matrix systems for controlled API release kinetics over extended periods.",
        icon: "clock",
      },
      {
        title: "Dispersible & Chewable",
        desc: "Fast-disintegrating formulations engineered for rapid oral dispersion and high patient adherence.",
        icon: "spark",
      },
      {
        title: "Bilayer & Multilayer Tablets",
        desc: "Specialized dual-layer compression separating incompatible actives or providing biphasic release.",
        icon: "box",
      },
      {
        title: "Uncoated Compressed Tablets",
        desc: "High-hardness, low-friability core tablets manufactured under strictly controlled environmental humidity.",
        icon: "clipboard",
      },
    ],
    technicalSpecs: [
      { label: "Core Shapes", value: "Round, Oval, Oblong, Caplet, Custom shapes" },
      { label: "Identification", value: "Custom debossing, break-line scoring, logo embossing" },
      { label: "Tablet Diameters", value: "5mm to 22mm customizable tooling" },
      { label: "Batch Sizing", value: "Pilot, clinical, and commercial scale runs" },
      { label: "Quality Checks", value: "Friability, Hardness, Disintegration, Weight variation" },
    ],
    packagingOptions: [
      "Alu-Alu Cold Form Blister Packaging (Maximum moisture barrier)",
      "PVC / PVDC Blister Packaging (Crystal clear presentation)",
      "Child-Resistant & Senior-Friendly Blister Strips",
      "High-Density Polyethylene (HDPE) Bottles with induction sealing",
    ],
    sampleApplications: [
      "Antibiotics & Anti-infectives",
      "Cardiovascular & Antihypertensive",
      "Analgesic & Anti-inflammatory (NSAIDs)",
      "Gastrointestinal & Proton-Pump Inhibitors",
      "Multivitamins, Minerals & Nutraceuticals",
    ],
  },
  capsules: {
    id: "capsules",
    name: "Capsules",
    code: "CP",
    badge: "Encapsulation Technology",
    headline: "Versatile Encapsulation for Powders, Pellets & Granules",
    summary:
      "Precision capsule filling technology engineered for uniform fill weights, sensitive active pharmaceutical ingredients, and customized shell specifications.",
    formTypes: [
      {
        title: "Hard Gelatin Capsules (HGC)",
        desc: "Standard pharmaceutical-grade gelatin shells with rapid disintegration in gastric fluid.",
        icon: "box",
      },
      {
        title: "Vegetarian (HPMC) Capsules",
        desc: "Plant-derived hypromellose shells with low moisture content (<7%), ideal for hygroscopic APIs.",
        icon: "spark",
      },
      {
        title: "Pellets-in-Capsule (MUPS)",
        desc: "Controlled-release micro-pellets and coated beads filled with precise multi-unit dosage accuracy.",
        icon: "layers",
      },
      {
        title: "Delayed / Enteric Capsules",
        desc: "Acid-resistant capsule shells protecting acid-labile molecules without needing solvent coating.",
        icon: "shield",
      },
      {
        title: "Combination Fills",
        desc: "Dual filling capabilities such as tablet-in-capsule or multi-pellet formulations for combination therapy.",
        icon: "flask",
      },
      {
        title: "Banded & Tamper-Evident",
        desc: "Hermetically sealed gelatin or HPMC liquid banding around the joint for tamper evidence and stability.",
        icon: "check",
      },
    ],
    technicalSpecs: [
      { label: "Available Sizes", value: "Size 00, Size 0, Size 1, Size 2, Size 3, Size 4" },
      { label: "Shell Appearance", value: "Opaque, Transparent, Two-tone color combinations" },
      { label: "Fill Formats", value: "Powder blends, Granules, Micro-pellets, Mini-tablets" },
      { label: "Moisture Levels", value: "HPMC: 3-7% | Gelatin: 13-16% equilibrium" },
      { label: "Quality Checks", value: "Weight consistency, Shell integrity, Disintegration time" },
    ],
    packagingOptions: [
      "Alu-Alu Cold Form Blister Packs for moisture-sensitive formulations",
      "PVC/PVDC Blister Packs with foil backing",
      "Wide-mouth HDPE Bottles with silica gel / molecular sieve desiccant caps",
      "Tamper-evident induction seal and outer carton packaging",
    ],
    sampleApplications: [
      "Proton Pump Inhibitors (Enteric Pellets)",
      "Antibiotics & Cephalosporins",
      "Probiotics & Synbiotic Formulations (HPMC)",
      "Neurological & CNS Formulations",
      "Nutraceuticals & Dietary Supplements",
    ],
  },
};

/* ── Smooth Increment Counter Hook ──────────────────── */
function useSmoothCounter(target: number, duration: number = 2200, triggerKey: string) {
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

export function DosageExplorer() {
  const [activeTab, setActiveTab] = useState<"tablets" | "capsules">("tablets");
  const activeData = dosageData[activeTab];

  // Simple number counter towards 453454234 for tablets
  const tabletCount = useSmoothCounter(453454234, 2200, activeTab);

  return (
    <div className="relative">
      {/* Tab Switcher Controls */}
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-md shadow-slate-200/60 border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab("tablets")}
            className={`inline-flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 ${
              activeTab === "tablets"
                ? "bg-navy text-white shadow-lg shadow-navy/20 scale-[1.02]"
                : "text-slate-600 hover:text-navy hover:bg-slate-50"
            }`}
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-lg text-xs font-bold ${
                activeTab === "tablets" ? "bg-cyan text-navy" : "bg-slate-100 text-slate-500"
              }`}
            >
              TB
            </span>
            Tablets Formulation
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("capsules")}
            className={`inline-flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 ${
              activeTab === "capsules"
                ? "bg-navy text-white shadow-lg shadow-navy/20 scale-[1.02]"
                : "text-slate-600 hover:text-navy hover:bg-slate-50"
            }`}
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-lg text-xs font-bold ${
                activeTab === "capsules" ? "bg-cyan text-navy" : "bg-slate-100 text-slate-500"
              }`}
            >
              CP
            </span>
            Capsules Formulation
          </button>
        </div>
      </div>

      {/* Dynamic Content Panel */}
      <div
        key={activeTab}
        className="mt-10 animate-rise rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 lg:p-12"
      >
        {/* Header Bar */}
        <div className="flex flex-col gap-6 border-b border-slate-100 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-3 py-1 text-[.7rem] font-bold uppercase tracking-wider text-petrol">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                {activeData.badge}
              </span>
              <span className="text-xs font-semibold text-slate-400">Code: {activeData.code}</span>
            </div>
            <h3 className="display-face mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              {activeData.headline}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              {activeData.summary}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href={`/contact?interest=${encodeURIComponent(activeData.name + " Contract Manufacturing")}`}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-petrol"
            >
              Enquire for {activeData.name} <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Simple Tablet Capacity Counter (Numbers counting towards 453454234) */}
        {activeTab === "tablets" && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Monthly Tablet Capacity
            </p>
            <div className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tabular-nums font-mono tracking-tight">
              {tabletCount.toLocaleString("en-US")}
            </div>
            <p className="mt-1.5 text-xs text-slate-500">
              Tablets produced per month (Target: 453,454,234)
            </p>
          </div>
        )}

        {/* Formulation Subtypes Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-[.14em] text-petrol">
              Supported {activeData.name} Types & Formats
            </h4>
            <span className="text-xs text-slate-400">6 Specialized Variations</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeData.formTypes.map((type, idx) => (
              <div
                key={type.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-mist/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white hover:shadow-lg hover:shadow-cyan/5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-petrol shadow-sm border border-slate-100 transition-colors group-hover:bg-cyan/10 group-hover:text-petrol">
                    <Icon name={type.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-slate-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h5 className="mt-4 font-bold text-navy transition-colors group-hover:text-petrol">
                  {type.title}
                </h5>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs & Packaging Split */}
        <div className="mt-10 grid gap-8 rounded-2xl bg-mist/60 p-6 sm:p-8 lg:grid-cols-2">
          {/* Technical Specifications */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-navy">
              <Icon name="settings" className="h-4 w-4 text-cyan" />
              Technical & Machine Specifications
            </h4>
            <div className="mt-5 space-y-3">
              {activeData.technicalSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col justify-between rounded-xl bg-white p-3.5 text-xs sm:flex-row sm:items-center border border-slate-200/70"
                >
                  <span className="font-semibold text-slate-500">{spec.label}</span>
                  <span className="font-bold text-navy sm:text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging & Applications */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-navy">
                <Icon name="box" className="h-4 w-4 text-cyan" />
                Approved Packaging Formats
              </h4>
              <ul className="mt-5 space-y-2.5">
                {activeData.packagingOptions.map((pack) => (
                  <li
                    key={pack}
                    className="flex items-start gap-2.5 text-xs font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-200/70"
                  >
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-petrol text-white text-[10px]">
                      ✓
                    </span>
                    <span>{pack}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-slate-200/80 pt-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[.68rem] font-bold uppercase tracking-wider text-slate-400">
                  Target Therapies:
                </span>
                {activeData.sampleApplications.slice(0, 3).map((app) => (
                  <span
                    key={app}
                    className="inline-block rounded-md bg-white px-2.5 py-1 text-[.72rem] font-semibold text-slate-700 border border-slate-200"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DosageExplorer;
