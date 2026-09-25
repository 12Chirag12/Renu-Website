import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CTABanner } from "@/components/ui/CTABanner";
import { MachineryExplorer } from "./MachineryExplorer";
import { totalMachineryCount } from "@/data/machinery";

export const metadata: Metadata = {
  title: "Manufacturing Facilities & Machinery — Renumed Pharma",
  description:
    "Explore Renumed Pharma's advanced pharmaceutical manufacturing facilities, rotary compression machinery, automated coating pans, and blister packaging infrastructure.",
};

const infrastructureAreas = [
  { name: "Compression Suites", desc: "Dedicated cubicles housing 9 rotary tablet punching presses with controlled differential pressures." },
  { name: "Coating Section", desc: "Automated perforated autocoater and pan coating installations for aqueous and film applications." },
  { name: "Granulation & Mixing", desc: "Rapid mixer granulator (RMG) and powder blender suites for uniform granulation preparation." },
  { name: "Packaging Department", desc: "Alu-Alu cold form, PVC/PVDC blister lines, vertical pouching, and high-speed striping machinery." },
  { name: "Quality Testing Lab", desc: "Analytical testing suites equipped for disintegration, friability, dissolution, and hardness tests." },
  { name: "Material Warehousing", desc: "Controlled quarantine, active raw material, excipient, and finished goods storage zones." },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* ── 1. Facilities Hero ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-mist py-16 sm:py-24">
        <div className="glow-orb -top-20 -left-20 h-96 w-96 bg-cyan/20" aria-hidden="true" />
        <div className="glow-orb top-1/2 -right-24 h-96 w-96 bg-petrol/15" aria-hidden="true" />
        <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden="true" />

        <div className="container-shell relative">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-petrol/20 bg-white/95 px-3.5 py-1.5 text-[.72rem] font-bold uppercase tracking-[.15em] text-petrol shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                Infrastructure & Technology
              </div>

              <h1 className="display-face mt-6 text-3xl font-extrabold leading-[1.05] text-navy sm:text-4xl lg:text-5xl">
                Advanced Pharmaceutical Manufacturing Facilities
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Modern production and packaging infrastructure designed to support reliable pharmaceutical manufacturing.
              </p>

              {/* Total Machinery Highlight Banner */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-cyan/30 bg-white/90 px-4 py-3 shadow-md shadow-cyan/5 backdrop-blur-sm sm:px-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-cyan text-sm font-bold">
                  {totalMachineryCount}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-navy">
                    {totalMachineryCount} Manufacturing & Packaging Machines
                  </p>
                  <p className="text-[.72rem] text-slate-500">
                    Production & Packing Departments · 9 Operational Sections
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href="#machinery"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-navy/20 transition hover:bg-petrol"
                >
                  Explore Our Machinery <Icon name="arrow" className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white/80 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-petrol/50 hover:bg-white hover:text-petrol"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* High-quality Pharmaceutical Manufacturing Visual */}
            <div className="relative animate-rise-delay">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] border border-white/80 bg-slate-200 shadow-2xl shadow-navy/20 lg:aspect-[1.15/1]">
                <Image
                  src="/images/quality-laboratory.png"
                  alt="Modern pharmaceutical laboratory with analytical inspection equipment and clean workstations"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-navy/90 p-4 text-white backdrop-blur-md border border-white/10 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[.68rem] font-bold uppercase tracking-[.15em] text-cyan">
                      Illustrative Facility Visual
                    </span>
                    <span className="text-[.68rem] text-white/50">Controlled Environment</span>
                  </div>
                  <p className="mt-1 font-bold text-sm sm:text-base">
                    Controlled Tablet Compression & Packaging Suites
                  </p>
                  <p className="mt-0.5 text-xs text-white/60">
                    Photographs are representative illustrative visuals pending verified site photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 & 3. Facilities Overview & Machinery by Section ──── */}
      <section className="bg-white py-20 sm:py-28 border-y border-slate-100">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Installed Infrastructure"
              title="Approved Machinery Inventory by Department & Section."
              body="Explore our verified manufacturing and packaging machinery inventory. Grouped by department and operational section to provide clear visibility into our processing equipment."
            />
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 rounded-xl bg-mist px-4 py-2 text-xs font-bold text-navy border border-slate-200">
                <Icon name="clipboard" className="h-4 w-4 text-petrol" />
                Verified Operational Equipment
              </span>
            </div>
          </div>

          <div className="mt-12">
            <MachineryExplorer />
          </div>
        </div>
      </section>

      {/* ── Controlled Facility Areas ───────────────────────── */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            kicker="Zoned Production Suites"
            title="Controlled Areas for Every Manufacturing Stage."
            body="From raw-material sampling to final tertiary dispatch, all equipment is arranged in isolated, dedicated suites with controlled air handling."
            centered
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructureAreas.map((area, idx) => (
              <div
                key={area.name}
                className="reveal-card rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan/15 text-petrol">
                    <Icon name="factory" className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-slate-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mt-5 text-base font-bold text-navy">{area.name}</h4>
                <p className="mt-2 text-xs leading-5 text-slate-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment Verification Status Notice ────────────── */}
      <section className="bg-white py-14 border-t border-slate-100">
        <div className="container-shell">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-bold text-navy">Equipment specifications and capacity details</p>
              <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                Make, model numbers, and exact batch capacity ratings are omitted pending verified documentation. Equipment names match the approved plant installation register.
              </p>
            </div>
            <div className="mt-4 shrink-0 sm:mt-0">
              <PlaceholderTag />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Quality and Contact CTA ───────────────────────── */}
      <CTABanner
        kicker="Facility Partnerships"
        title="Discuss Your Contract Manufacturing Requirement"
        body="Connect directly with our technical team to evaluate equipment compatibility, production scheduling, packaging formats, and formulation batch feasibility."
        buttonText="Contact Renumed Pharma"
        buttonHref="/contact"
        secondaryButtonText="Explore Our Capabilities"
        secondaryButtonHref="/contract-manufacturing"
        variant="navy"
      />
    </>
  );
}
