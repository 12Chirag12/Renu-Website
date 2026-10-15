import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { GallerySection } from "@/components/ui/GallerySection";
import { CTABanner } from "@/components/ui/CTABanner";
import { Icon } from "@/components/ui/Icon";
import { totalMachineryCount } from "@/data/machinery";

export const metadata: Metadata = {
  title: "Manufacturing & Facility Gallery — Renumed Pharma",
  description:
    "View inside Renumed Pharmaceutical Labs: high-speed rotary tablet compression, automated auto-coaters, Alu-Alu blister lines, and certified cGMP cleanrooms.",
};

const facilityHighlights = [
  {
    title: "ISO Class 8 Cleanrooms",
    desc: "Controlled environment suites equipped with dedicated Air Handling Units (AHUs), HEPA filtration, and strict differential pressure barriers.",
    icon: "shield" as const,
  },
  {
    title: "High-Speed Blister Suites",
    desc: "Rotary thermoforming and Alu-Alu cold-form blister machines providing tropical moisture-barrier security for sensitive active pharmaceutical ingredients.",
    icon: "box" as const,
  },
  {
    title: "Precision Tablet Compression",
    desc: "Multi-station high-speed rotary compression machines with automated force feeding and real-time hardness and weight control.",
    icon: "layers" as const,
  },
  {
    title: "Perforated Pan Auto-Coating",
    desc: "Aqueous and solvent-based film and sugar coating installations with automated atomized spray regulation for uniform tablet finishes.",
    icon: "settings" as const,
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <PageHero
        kicker="Inside Renumed Labs"
        title="Manufacturing Facility & Machinery Gallery"
        description="A firsthand photographic tour of our pharmaceutical manufacturing suites, rotary compression presses, automated coating pans, and sterile packaging lines."
        breadcrumbs={[{ label: "Gallery" }]}
        highlights={[
          { label: "cGMP Cleanrooms & Air Handling", icon: "shield" },
          { label: `${totalMachineryCount} Verified Production & Packaging Machines`, icon: "settings" },
          { label: "2.16B+ Combined Annual Solid Oral Scale", icon: "chart" },
        ]}
      />

      {/* ── Main Interactive Gallery Section ──────────────────── */}
      <GallerySection />

      {/* ── Facility Standards & Infrastructure Overview ─────── */}
      <section className="bg-mist py-20 sm:py-28 border-t border-slate-200/80">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="section-kicker">Manufacturing Standards</span>
            <h2 className="display-face mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Engineered for Compliance, Speed, and Zero-Defect Delivery
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every production suite shown in this gallery follows rigorous Current Good Manufacturing Practice (cGMP) regulations. Our facility in Indore is designed with unidirectional material flow, dedicated line clearance protocols, and separate air handling zones to eliminate cross-contamination.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((feat) => (
              <div
                key={feat.title}
                className="reveal-card rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol/10 text-petrol">
                  <Icon name={feat.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{feat.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Nav to full machinery inventory */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
            <div>
              <h3 className="text-base font-bold text-navy sm:text-lg">
                Need detailed machinery technical parameters?
              </h3>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Explore our complete inventory of 29 machines across compression, coating, granulation, packaging, and laboratory testing.
              </p>
            </div>
            <Link
              href="/facilities"
              className="btn-primary shrink-0 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-petrol"
            >
              <span>View All 29 Machinery Specs</span>
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Call to Action Banner ────────────────────────────── */}
      <CTABanner
        kicker="Audit Our Facility"
        title="Schedule an On-Site Manufacturing Audit"
        body="Experience our cleanrooms, rotary compression suites, and quality testing labs firsthand. Contact our technical team to plan an on-site visit."
        buttonText="Request Facility Visit"
        buttonHref="/contact"
        variant="navy"
      />
    </>
  );
}
