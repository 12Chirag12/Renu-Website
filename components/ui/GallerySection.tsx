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
  featured?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "cleanroom-packaging",
    src: "/images/gallery/pic7.jpeg",
    title: "Cleanroom Packaging & Visual Inspection Line",
    category: "cleanroom",
    categoryLabel: "Cleanroom Operations",
    featured: true,
  },
  {
    id: "rotary-compression",
    src: "/images/gallery/pic4.jpeg",
    title: "Rotary Tablet Compression Press",
    category: "manufacturing",
    categoryLabel: "Compression",
    featured: true,
  },
  {
    id: "auto-coater",
    src: "/images/gallery/pic5.jpeg",
    title: "Automated Tablet Coating Pan",
    category: "manufacturing",
    categoryLabel: "Coating",
  },
  {
    id: "blister-sealing",
    src: "/images/gallery/pic1.jpeg",
    title: "Blister Sealing & Packaging Line",
    category: "packaging",
    categoryLabel: "Packaging Line",
  },
  {
    id: "infeed-conveyor",
    src: "/images/gallery/pic2.jpeg",
    title: "Tablet Infeed & Conveyor System",
    category: "cleanroom",
    categoryLabel: "Feeding System",
  },
  {
    id: "alu-alu-forming",
    src: "/images/gallery/pic3.jpeg",
    title: "Alu-Alu Cold Form Blister Machine",
    category: "packaging",
    categoryLabel: "Blister Forming",
  },
  {
    id: "thermoforming-line",
    src: "/images/gallery/pic6.jpeg",
    title: "PVC/PVDC Thermoforming Blister Line",
    category: "packaging",
    categoryLabel: "Thermoforming",
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
      className="relative overflow-hidden bg-white py-16 sm:py-24"
      aria-label="Manufacturing Facility Gallery"
    >
      <div className="container-shell relative z-10">
        {/* Header + Action Link */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionHeading
              kicker="Plant & Facilities"
              title="Operational Infrastructure Gallery"
              body="Photographic documentation of our manufacturing plant, tablet compression suites, coating pans, and sterile packaging lines."
            />
          </div>

          <div className="shrink-0">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 rounded-xl border border-petrol/20 bg-mist/60 px-5 py-3 text-xs font-bold text-navy transition hover:border-petrol hover:bg-white hover:text-petrol hover:shadow-md"
            >
              <span>View Machinery Specifications</span>
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-200/80 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Filter:
          </span>
          {[
            { key: "all", label: "All Photos", count: GALLERY_ITEMS.length },
            {
              key: "manufacturing",
              label: "Compression & Coating",
              count: GALLERY_ITEMS.filter((i) => i.category === "manufacturing").length,
            },
            {
              key: "packaging",
              label: "Blister & Packaging",
              count: GALLERY_ITEMS.filter((i) => i.category === "packaging").length,
            },
            {
              key: "cleanroom",
              label: "Cleanroom Operations",
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
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-navy text-white shadow-md shadow-navy/15"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-navy"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                    isActive ? "bg-cyan text-navy" : "bg-white text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean, Unobstructed Image Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-petrol/40 hover:shadow-xl"
            >
              {/* Pure, Unobstructed Image Area — ZERO text overlay */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={index < 2}
                />

                {/* Subtle Expand Indicator on Hover Only */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-navy/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 13.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H4.56l3.22 3.22a.75.75 0 11-1.06 1.06L3.5 15.06v2.69a.75.75 0 01-1.5 0v-4.5z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Clean Caption BELOW Image */}
              <div className="p-4 sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-petrol">
                  {item.categoryLabel}
                </p>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-navy group-hover:text-petrol transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxIndex !== null && activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-4 backdrop-blur-md animate-fade-in"
          onClick={handleClose}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-white">
              <span className="text-xs font-semibold text-white/60">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-navy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Clear, Unobstructed Lightbox Photo */}
            <div className="relative aspect-[16/10] max-h-[68vh] w-full bg-black/40">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 border border-white/20 text-white shadow-lg backdrop-blur-sm transition hover:bg-cyan hover:text-navy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 border border-white/20 text-white shadow-lg backdrop-blur-sm transition hover:bg-cyan hover:text-navy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Clean, Simple Modal Caption Below */}
            <div className="border-t border-white/10 bg-navy px-5 py-3 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan">
                {activeItem.categoryLabel}
              </span>
              <h4 className="mt-0.5 text-base font-bold text-white">{activeItem.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
