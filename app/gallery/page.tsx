import type { Metadata } from "next";
import { GallerySection } from "@/components/ui/GallerySection";

export const metadata: Metadata = {
  title: "Manufacturing & Facility Gallery — Renumed Pharma",
  description:
    "View inside Renumed Pharmaceutical Labs: high-speed rotary tablet compression, automated auto-coaters, Alu-Alu blister lines, and certified cGMP cleanrooms.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GallerySection />
    </main>
  );
}
