import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GallerySection } from "@/components/ui/GallerySection";
import { totalMachineryCount } from "@/data/machinery";

export const metadata: Metadata = {
  title: "Manufacturing & Facility Gallery — Renumed Pharma",
  description:
    "View inside Renumed Pharmaceutical Labs: high-speed rotary tablet compression, automated auto-coaters, Alu-Alu blister lines, and certified cGMP cleanrooms.",
};

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
    </>
  );
}
