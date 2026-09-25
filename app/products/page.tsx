import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { CTABanner } from "@/components/ui/CTABanner";
import { ProductCatalogue } from "./ProductCatalogue";
import { DosageExplorer } from "./DosageExplorer";

export const metadata: Metadata = {
  title: "Products & Formulations — Tablets & Capsules",
  description:
    "Explore Renumed Pharmaceutical Labs' solid oral dosage manufacturing capabilities — specialized in pharmaceutical tablets and capsules.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Solid Oral Formulations"
        description="Focused exclusively on Tablets and Capsules. Explore our coating technologies, encapsulation capabilities, and packaging solutions."
      />

      {/* Interactive Dosage Explorer Section */}
      <section className="bg-gradient-to-b from-mist via-white to-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Primary Dosage Forms"
            title="Tablets & Capsules Manufacturing Scope."
            body="Toggle between Tablets and Capsules below to inspect our coating methods, technical tooling, release profiles, and blister packaging configurations."
            centered
          />

          <div className="mt-14">
            <DosageExplorer />
          </div>
        </div>
      </section>

      {/* Comparison & Capability Highlights */}
      <section className="bg-white py-24 sm:py-32 border-y border-slate-100">
        <div className="container-shell">
          <SectionHeading
            kicker="Dosage Highlights"
            title="Engineered for stability, precision, and bioavailability."
            body="Our manufacturing facilities are optimized for solid oral dosage forms, ensuring tight weight tolerances and repeatable release profiles."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Tablets Feature Box */}
            <div className="reveal-card rounded-3xl border border-slate-200/90 bg-mist/30 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-xs font-bold tracking-widest text-cyan shadow-sm">
                  TB
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">Tablets Advantage</h3>
                  <p className="text-xs text-slate-500">Compression & Coating Science</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-cyan font-bold">•</span>
                  <span><strong>45 Cr+ Tablets / Month:</strong> High-speed rotary compression output with automated weight verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-cyan font-bold">•</span>
                  <span><strong>Film & Enteric Polymer Coating:</strong> Complete moisture, light, and acid protection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-cyan font-bold">•</span>
                  <span><strong>Modified Release Systems:</strong> Matrix tablets offering sustained 12h/24h therapeutic release.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-cyan font-bold">•</span>
                  <span><strong>Multilayer Formulation:</strong> Physical barrier separation for dual-action combinations.</span>
                </li>
              </ul>
              <div className="mt-8 pt-5 border-t border-slate-200/70">
                <Link
                  href="/contact?interest=Tablet%20Contract%20Manufacturing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-petrol transition hover:text-navy"
                >
                  Enquire for Tablet Formulations <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Capsules Feature Box */}
            <div className="reveal-card rounded-3xl border border-slate-200/90 bg-mist/30 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-petrol text-xs font-bold tracking-widest text-white shadow-sm">
                  CP
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">Capsules Advantage</h3>
                  <p className="text-xs text-slate-500">Encapsulation & Filling Technology</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-petrol font-bold">•</span>
                  <span><strong>HPMC & Gelatin Compatibility:</strong> Vegetarian and standard shells across all standard sizes (00 to 4).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-petrol font-bold">•</span>
                  <span><strong>Pellet & Granule Encapsulation:</strong> Enteric-coated micro-beads filled with high dosage accuracy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-petrol font-bold">•</span>
                  <span><strong>Sensitive API Protection:</strong> Low-moisture shells protecting moisture-labile actives from degradation.</span>
                </li>
              </ul>
              <div className="mt-8 pt-5 border-t border-slate-200/70">
                <Link
                  href="/contact?interest=Capsule%20Contract%20Manufacturing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-petrol transition hover:text-navy"
                >
                  Enquire for Capsule Formulations <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogue Section */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Approved Product Records"
            title="Tablets & Capsules Product Catalogue."
            body="Search and filter through approved product specifications. As new products are verified by our regulatory team, they appear directly in this catalogue."
          />
          <div className="mt-12">
            <ProductCatalogue />
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Product availability, registrations, and regulatory status may vary by territory.
          </p>
        </div>
      </section>

      <CTABanner
        kicker="Need a custom formulation?"
        title="Discuss your tablet or capsule specification."
        body="Share your active ingredient profile, target strength, batch scale, and packaging preferences. We provide technical feasibility feedback within 24 hours."
        buttonText="Request Feasibility Review"
        buttonHref="/contact"
        variant="navy"
      />
    </>
  );
}
