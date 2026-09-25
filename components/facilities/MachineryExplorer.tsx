"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import {
  machineryData,
  totalMachineryCount,
  productionMachineryCount,
  packingMachineryCount,
  type SectionGroup,
} from "@/data/machinery";

type FilterId =
  | "all"
  | "production"
  | "packing"
  | "coating"
  | "compression"
  | "granulation"
  | "lubrication"
  | "blister"
  | "pouching"
  | "striping";

const filters: { id: FilterId; label: string; count?: number }[] = [
  { id: "all", label: "All Machinery", count: totalMachineryCount },
  { id: "production", label: "Production", count: productionMachineryCount },
  { id: "packing", label: "Packing", count: packingMachineryCount },
  { id: "coating", label: "Coating", count: 5 },
  { id: "compression", label: "Compression", count: 9 },
  { id: "granulation", label: "Granulation", count: 2 },
  { id: "lubrication", label: "Lubrication", count: 2 },
  { id: "blister", label: "Blister", count: 5 },
  { id: "pouching", label: "Pouching", count: 3 },
  { id: "striping", label: "Striping", count: 3 },
];

export function MachineryExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    return machineryData
      .map((section) => {
        if (activeFilter === "production" && section.department !== "Production") {
          return null;
        }
        if (activeFilter === "packing" && section.department !== "Packing") {
          return null;
        }
        if (
          activeFilter !== "all" &&
          activeFilter !== "production" &&
          activeFilter !== "packing" &&
          section.sectionKey !== activeFilter
        ) {
          return null;
        }

        const query = searchQuery.trim().toLowerCase();
        const matchedMachines = query
          ? section.machines.filter(
              (m) =>
                m.name.toLowerCase().includes(query) ||
                m.purpose.toLowerCase().includes(query) ||
                m.section.toLowerCase().includes(query)
            )
          : section.machines;

        if (matchedMachines.length === 0) return null;

        return {
          ...section,
          machines: matchedMachines,
        };
      })
      .filter((s): s is SectionGroup => s !== null);
  }, [activeFilter, searchQuery]);

  const totalVisibleMachines = useMemo(() => {
    return filteredSections.reduce((acc, s) => acc + s.machines.length, 0);
  }, [filteredSections]);

  return (
    <div className="space-y-12">
      {/* ── Department Cards ── */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Production Department Card */}
        <div
          onClick={() => setActiveFilter("production")}
          className={`cursor-pointer group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
            activeFilter === "production"
              ? "border-cyan bg-white shadow-xl shadow-cyan/10 ring-2 ring-cyan/40"
              : "border-slate-200/90 bg-white/95 hover:border-petrol/40 hover:shadow-lg"
          }`}
        >
          <div className="flex items-start justify-between">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-cyan shadow-md shadow-navy/15 transition-transform group-hover:scale-105">
              <Icon name="factory" className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-petrol">
              {productionMachineryCount} Machines Installed
            </span>
          </div>

          <h3 className="display-face mt-6 text-2xl font-bold text-navy">
            Production Department
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Granulation, blending, high-speed rotary compression, and precision aqueous/organic tablet coating operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-slate-100">
            {["Coating (5)", "Compression (9)", "Granulation-I (1)", "Granulation-II (1)", "Lubrication-I (1)", "Lubrication-II (1)"].map(
              (sec) => (
                <span
                  key={sec}
                  className="rounded-lg bg-mist px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/70"
                >
                  {sec}
                </span>
              )
            )}
          </div>

          <div className="mt-5 flex items-center justify-between text-xs font-bold text-petrol">
            <span>Filter Production Machinery</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* Packing Department Card */}
        <div
          onClick={() => setActiveFilter("packing")}
          className={`cursor-pointer group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
            activeFilter === "packing"
              ? "border-cyan bg-white shadow-xl shadow-cyan/10 ring-2 ring-cyan/40"
              : "border-slate-200/90 bg-white/95 hover:border-petrol/40 hover:shadow-lg"
          }`}
        >
          <div className="flex items-start justify-between">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-petrol text-white shadow-md shadow-petrol/15 transition-transform group-hover:scale-105">
              <Icon name="box" className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-petrol/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              {packingMachineryCount} Machines Installed
            </span>
          </div>

          <h3 className="display-face mt-6 text-2xl font-bold text-navy">
            Packing Department
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Cold-form Alu-Alu blister packaging, thermoform PVC/PVDC blisters, unit-dose pouching, and protective multi-tablet striping.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-slate-100">
            {["Blister Packaging (5)", "Pouch Filling (3)", "Strip Packaging (3)"].map((sec) => (
              <span
                key={sec}
                className="rounded-lg bg-mist px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/70"
              >
                {sec}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between text-xs font-bold text-petrol">
            <span>Filter Packing Machinery</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>

      {/* ── Filter & Search Controls ── */}
      <div id="machinery" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-navy sm:text-2xl">
              Machinery Inventory by Section
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Showing {totalVisibleMachines} of {totalMachineryCount} verified operational machines
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-sm">
            <Icon
              name="search"
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by machine name or function..."
              className="field pl-10 text-xs sm:text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-navy"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`interactive-pill inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-navy text-white shadow-md shadow-navy/20 scale-[1.03]"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-petrol/40 hover:text-navy hover:bg-slate-50"
                }`}
              >
                <span>{f.label}</span>
                {f.count !== undefined && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                      isActive ? "bg-cyan text-navy" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {f.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Sections & Machine Cards Display ── */}
      {filteredSections.length > 0 ? (
        <div className="space-y-12">
          {filteredSections.map((sec) => (
            <div
              key={sec.name}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
            >
              {/* Section Header */}
              <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-navy px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan">
                      {sec.department}
                    </span>
                    <h4 className="display-face text-xl font-bold text-navy sm:text-2xl">
                      Section: {sec.name}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                    {sec.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-xs font-bold text-petrol border border-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {sec.machines.length} {sec.machines.length === 1 ? "Machine" : "Machines"}
                  </span>
                </div>
              </div>

              {/* Machine Cards Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sec.machines.map((m) => (
                  <div
                    key={m.name}
                    className="reveal-card group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-mist/30 p-5 transition-all duration-300 hover:border-cyan/50 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol shadow-sm border border-slate-100 transition-colors group-hover:bg-cyan/15 group-hover:text-petrol">
                          <Icon name={m.icon} className="h-5 w-5" />
                        </span>
                        <span className="text-[.68rem] font-bold uppercase tracking-wider text-slate-400">
                          {m.section}
                        </span>
                      </div>

                      <h5 className="mt-4 text-base font-bold text-navy transition-colors group-hover:text-petrol">
                        {m.name}
                      </h5>

                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {m.purpose}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[.7rem]">
                      <span className="font-semibold text-slate-400">Operational Unit</span>
                      <span className="font-bold text-petrol flex items-center gap-1">
                        Active <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-mist/60 p-12 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-petrol shadow-sm">
            <Icon name="search" className="h-6 w-6" />
          </span>
          <h4 className="mt-4 text-lg font-bold text-navy">No machinery found</h4>
          <p className="mt-1 text-xs text-slate-500">
            No equipment matches &quot;{searchQuery}&quot; under the selected filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveFilter("all");
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white transition hover:bg-petrol"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default MachineryExplorer;
