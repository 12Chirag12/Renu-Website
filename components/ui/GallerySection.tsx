"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "packaging" | "manufacturing" | "cleanroom";
  categoryLabel: string;
  tag: string;
  description: string;
  specs?: string;
  featured?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "sterile-packaging-team",
    src: "/images/gallery/pic7.jpeg",
    title: "cGMP Cleanroom Secondary Packaging & Quality Inspection",
    category: "cleanroom",
    categoryLabel: "Cleanroom Operations",
    tag: "Visual Inspection & Packaging",
    description:
      "Trained technical personnel in full cGMP-compliant cleanroom PPE conducting 100% manual quality inspection, vial cartoning, and secondary packaging verification.",
    specs: "ISO Class 8 Cleanroom · 100% Line Clearance",
    featured: true,
  },
  {
    id: "rotary-compression-press",
    src: "/images/gallery/pic4.jpeg",
    title: "Multi-Station Rotary Tablet Compression Press",
    category: "manufacturing",
    categoryLabel: "Tablet Manufacturing",
    tag: "Rotary Compression",
    description:
      "High-speed rotary tablet press with precision punch dies, automated force feeding, and dynamic real-time monitoring of tablet thickness, hardness, and weight variation.",
    specs: "Multi-Station Tooling · 1.2 Billion Tablets/Year",
    featured: true,
  },
  {
    id: "automated-coating-drum",
    src: "/images/gallery/pic5.jpeg",
    title: "Precision Auto-Coating Pan for Film & Enteric Coats",
    category: "manufacturing",
    categoryLabel: "Tablet Manufacturing",
    tag: "Film & Enteric Coating",
    description:
      "Perforated drum auto-coater with multi-angle atomizing spray nozzles, peristaltic pump delivery, and precise thermal exhaust for uniform, streak-free tablet coatings.",
    specs: "Aqueous & Solvent Systems · Controlled Dehumidification",
  },
  {
    id: "blister-sealing-line",
    src: "/images/gallery/pic1.jpeg",
    title: "High-Speed Automated Blister Sealing & Inspection Line",
    category: "packaging",
    categoryLabel: "Blister & Packaging",
    tag: "Blister Sealing",
    description:
      "Continuous high-speed blister packing machine with digital thermal regulation, automated pinhole detection, and precision inline batch coding.",
    specs: "Digital Heat Sealing · Inline Batch Embossing",
  },
  {
    id: "infeed-conveyor",
    src: "/images/gallery/pic2.jpeg",
    title: "High-Capacity In-Line Blister Infeed & Conveyor",
    category: "cleanroom",
    categoryLabel: "Cleanroom Operations",
    tag: "Automated Feeding",
    description:
      "Vibratory track feeding system transporting solid oral doses smoothly into thermoformed cavities with laminar airflow and zero tablet abrasion.",
    specs: "Continuous Infeed · Frictionless Conveyor Track",
  },
  {
    id: "alu-alu-cold-form",
    src: "/images/gallery/pic3.jpeg",
    title: "Alu-Alu Cold Form High-Barrier Blister Punching",
    category: "packaging",
    categoryLabel: "Blister & Packaging",
    tag: "Alu-Alu Punching",
    description:
      "Heavy-duty pneumatic cold-forming and punch die station engineered for moisture-sensitive formulations requiring absolute environmental barrier protection.",
    specs: "Tropical Moisture Barrier · Pneumatic Precision Tooling",
  },
  {
    id: "thermoforming-cavity",
    src: "/images/gallery/pic6.jpeg",
    title: "Continuous PVC/PVDC Web Thermoforming Line",
    category: "packaging",
    categoryLabel: "Blister & Packaging",
    tag: "Cavity Thermoforming",
    description:
      "Multi-lane thermal cavity forming station ensuring uniform pocket depth and crystal-clear blister pockets for high-speed pharmaceutical packaging lines.",
    specs: "Calibrated Heat Plates · Multi-Lane Forming",
  },
];

type CategoryFilter = "all" | "packaging" | "manufacturing" | "cleanroom";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.addEventListener("keydown", onKeyDown);
    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-white via-mist/50 to-white py-24 sm:py-32"
      aria-label="Manufacturing Facility and Operations Gallery"
    >
      {/* Ambient background glows */}
      <div
        className="glow-orb -top-24 right-1/4 h-80 w-80 bg-cyan/15 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="glow-orb bottom-10 left-10 h-96 w-96 bg-petrol/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-shell relative z-10">
        {/* Header + Action Bar */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionHeading
              kicker="Inside Our Facility"
              title="Manufacturing & Cleanroom Infrastructure"
              body="A firsthand look inside our cGMP-compliant manufacturing facility in Indore — showcasing precision compression presses, auto-coaters, sterile packaging lines, and dedicated cleanrooms."
            />
          </div>

          {/* Quick link to machinery catalog */}
          <div className="shrink-0">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 rounded-xl border border-petrol/20 bg-white/90 px-5 py-3 text-xs font-bold text-navy shadow-sm backdrop-blur-sm transition hover:border-petrol hover:bg-white hover:text-petrol hover:shadow-md"
            >
              <span>Explore All 29 Production Machines</span>
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-200/80 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 sm:mr-2">
            Filter View:
          </span>
          {[
            { key: "all", label: "All Facilities", count: GALLERY_ITEMS.length },
            {
              key: "manufacturing",
              label: "Compression & Coating",
              count: GALLERY_ITEMS.filter((i) => i.category === "manufacturing").length,
            },
            {
              key: "packaging",
              label: "Blister & Alu-Alu",
              count: GALLERY_ITEMS.filter((i) => i.category === "packaging").length,
            },
            {
              key: "cleanroom",
              label: "Cleanroom & Operations",
              count: GALLERY_ITEMS.filter((i) => i.category === "cleanroom").length,
            },
          ].map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.key as CategoryFilter);
                  setLightboxIndex(null);
                }}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "bg-white/80 text-slate-600 border border-slate-200/80 hover:border-petrol/40 hover:bg-white hover:text-navy"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-cyan text-navy"
                      : "bg-slate-100 text-slate-500 group-hover:bg-cyan/15 group-hover:text-petrol"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Responsive Image Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {filteredItems.map((item, index) => {
            // Asymmetrical layout styling
            const isFeatured = item.featured && activeFilter === "all";
            const colSpan = isFeatured ? "lg:col-span-6" : "lg:col-span-4";

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-petrol/40 hover:shadow-2xl ${colSpan}`}
              >
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-900 ${
                    isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    priority={index < 2}
                  />

                  {/* High-end gradient overlays */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                    aria-hidden="true"
                  />

                  {/* Top Badges */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                      {item.tag}
                    </span>

                    {/* Expand icon pill */}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan group-hover:text-navy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 13.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H4.56l3.22 3.22a.75.75 0 11-1.06 1.06L3.5 15.06v2.69a.75.75 0 01-1.5 0v-4.5z" />
                      </svg>
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-light/90">
                      {item.categoryLabel}
                    </p>
                    <h3 className="mt-1 text-base sm:text-lg font-bold leading-snug tracking-tight text-white group-hover:text-cyan transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/80">
                      {item.description}
                    </p>

                    {item.specs && (
                      <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                        <span className="h-1 w-1 rounded-full bg-cyan" />
                        <span>{item.specs}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facility Trust Stats Bar */}
        <div className="mt-14 rounded-3xl border border-petrol/20 bg-gradient-to-r from-navy via-navy-light to-petrol p-6 sm:p-8 text-white shadow-xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
            <div className="border-b sm:border-b-0 sm:border-r border-white/15 pb-4 sm:pb-0 sm:pr-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan">
                Installed Capacity
              </span>
              <p className="mt-1 text-2xl font-extrabold text-white">2.16 Billion+</p>
              <p className="text-xs text-white/70">Tablets & Capsules / Year</p>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-white/15 pb-4 sm:pb-0 sm:pr-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan">
                Machinery Scope
              </span>
              <p className="mt-1 text-2xl font-extrabold text-white">29 Machines</p>
              <p className="text-xs text-white/70">cGMP Granulation to Blister Lines</p>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-white/15 pb-4 sm:pb-0 sm:pr-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan">
                Cleanroom Standard
              </span>
              <p className="mt-1 text-2xl font-extrabold text-white">ISO Class 8</p>
              <p className="text-xs text-white/70">Class 100,000 Air Handling</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan">
                Schedule a Site Visit
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-2.5 text-xs font-bold text-navy shadow-md transition hover:bg-white"
              >
                <span>Request Facility Audit</span>
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive Full-Screen Lightbox Modal ── */}
      {lightboxIndex !== null && activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4 backdrop-blur-xl animate-fade-in"
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/20 border border-cyan/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-xs font-semibold text-white/50">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close image preview"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-navy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative aspect-[16/10] max-h-[62vh] w-full bg-black/60">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-navy/80 border border-white/20 text-white shadow-lg backdrop-blur-md transition hover:bg-cyan hover:text-navy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-navy/80 border border-white/20 text-white shadow-lg backdrop-blur-md transition hover:bg-cyan hover:text-navy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Modal Bottom Details */}
            <div className="border-t border-white/10 bg-navy/95 p-6 text-white">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white">{activeItem.title}</h4>
                  <p className="mt-1 text-sm text-white/75">{activeItem.description}</p>
                </div>
                {activeItem.specs && (
                  <div className="shrink-0 rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-semibold text-cyan-light">
                    {activeItem.specs}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
