import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { InteractiveMetrics } from "@/components/ui/InteractiveMetrics";
import type { IconName } from "@/components/ui/Icon";

/* ── Hero ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-mist">
      {/* Decorative ambient background glows */}
      <div className="glow-orb -top-20 -left-20 h-96 w-96 bg-cyan/20" aria-hidden="true" />
      <div className="glow-orb top-1/2 -right-24 h-[450px] w-[450px] bg-petrol/15" aria-hidden="true" />
      <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="container-shell relative grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[.94fr_1.06fr] lg:py-24">
        <div className="relative z-10 animate-rise">
          {/* Animated interactive badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-petrol/20 bg-white/95 px-3.5 py-1.5 text-[.72rem] font-bold uppercase tracking-[.15em] text-petrol shadow-md shadow-petrol/5 backdrop-blur-md transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Tablets & Capsules Contract Manufacturing
          </div>

          <h1 className="display-face mt-7 max-w-3xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[.94] text-navy">
            <span className="block">Renumed</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol via-cyan to-petrol">
              Pharmaceutical
            </span>
            <span className="block">Labs</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Precision solid oral dosage manufacturing. Specialized in{" "}
            <strong className="text-navy font-bold">Tablets</strong> and{" "}
            <strong className="text-navy font-bold">Capsules</strong> through disciplined processes, full batch traceability, and dependable client support.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-7 py-4 text-sm font-bold text-white shadow-xl shadow-navy/20 transition hover:bg-petrol"
            >
              Request a Quote <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white/80 backdrop-blur-md px-7 py-4 text-sm font-bold text-navy shadow-sm transition hover:border-petrol/50 hover:bg-white hover:text-petrol hover:shadow-md"
            >
              Explore Formulations (TB & CP)
            </Link>
          </div>

          {/* Quick pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-navy">Specialized Formats:</span>
            <span className="rounded-md bg-white/90 border border-slate-200 px-2.5 py-1 text-slate-700 font-medium">
              Coated & Sustained Tablets
            </span>
            <span className="rounded-md bg-white/90 border border-slate-200 px-2.5 py-1 text-slate-700 font-medium">
              Gelatin & HPMC Capsules
            </span>
            <span className="rounded-md bg-white/90 border border-slate-200 px-2.5 py-1 text-slate-700 font-medium">
              Alu-Alu & Blister Packaging
            </span>
          </div>
        </div>

        {/* Hero Visual Area with Floating Cards */}
        <div className="relative animate-rise-delay lg:h-[580px]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] border border-white/60 bg-slate-200 shadow-2xl shadow-navy/20 lg:h-full lg:aspect-auto">
            <Image
              src="/images/hero-manufacturing.png"
              alt="Indian pharmaceutical chemist conducting quality testing and analytical HPLC operation in cleanroom facility"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-[75%_center] sm:object-center transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
          </div>

          {/* Floating Pill Card 1: Top Right */}
          <div className="animate-float absolute -top-4 -right-2 hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan/15 text-petrol">
              <span className="text-xs font-bold">TB</span>
            </span>
            <div>
              <p className="text-xs font-bold text-navy">Tablet Compression</p>
              <p className="text-[.7rem] text-slate-500">Film, Enteric & Sustained</p>
            </div>
          </div>

          {/* Floating Pill Card 2: Bottom Left (positioned left to keep the Indian chemist fully visible on right) */}
          <div className="animate-float-delayed absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:left-6 sm:right-auto sm:w-80">
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-cyan">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-petrol">Documented Operations</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Strict batch manufacturing records and in-process testing for every run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-y border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="container-shell grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Tablets & Capsules Focus", "Dedicated solid oral dosage infrastructure"],
            ["Quality-First Assurance", "Documented verification at every stage"],
            ["Responsive Partnership", "Direct quotes and requirement reviews in 24h"],
          ].map(([a, b]) => (
            <div key={a} className="px-5 py-5 first:pl-0 last:pr-0 sm:px-7">
              <p className="text-xs font-bold uppercase tracking-[.13em] text-navy">{a}</p>
              <p className="mt-1 text-xs text-slate-500">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Interactive Metrics Banner ─────────────────────── */
function MetricsSection() {
  return (
    <section className="bg-white py-14 border-b border-slate-100">
      <div className="container-shell">
        <InteractiveMetrics />
      </div>
    </section>
  );
}

/* ── Services Overview ──────────────────────────────── */
const services: { icon: IconName; title: string; description: string }[] = [
  { icon: "factory", title: "Contract Manufacturing", description: "Complete tablet and capsule manufacturing from raw API blending to finished packaged products." },
  { icon: "layers", title: "Third-Party Manufacturing", description: "Scalable production partnerships for pharmaceutical companies seeking reliable capacity." },
  { icon: "flask", title: "Formulation Optimization", description: "Technical support for tablet coating, modified release profiles, and capsule filling consistency." },
  { icon: "box", title: "Blister & Bottle Packaging", description: "Alu-Alu, PVC/PVDC blister packing, and automated induction-sealed bottle packaging." },
  { icon: "document", title: "Batch Documentation", description: "Comprehensive batch manufacturing records (BMR), certificates of analysis, and stability data." },
  { icon: "shield", title: "Quality Control Testing", description: "Analytical testing for dissolution, assay, friability, hardness, and disintegration." },
];

function ServicesOverview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Our services"
            title="Comprehensive solid oral manufacturing support."
            body="From formula granulation and compression to encapsulation, packaging, and regulatory documentation, we handle the entire production lifecycle."
          />
          <Link
            href="/contract-manufacturing"
            className="inline-flex items-center gap-2 text-sm font-bold text-petrol transition hover:text-navy hover:translate-x-1"
          >
            Explore contract manufacturing <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Dedicated Dosage Forms Spotlight (Tablets & Capsules) ─── */
function DosageSpotlight() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="glow-orb -top-24 right-0 h-80 w-80 bg-cyan/15" aria-hidden="true" />
      <div className="container-shell relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Primary Formulations"
            title="Specialized in Tablets & Capsules."
            body="Our manufacturing capabilities are focused exclusively on solid oral dosage forms to deliver high precision, uniform potency, and batch-to-batch consistency."
          />
          <Link
            href="/products"
            className="btn-primary inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-petrol"
          >
            Detailed Specifications <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        {/* 2-Column Spotlight Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Tablets Card */}
          <div className="reveal-card group relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10">
            <div className="flex items-start justify-between">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-navy text-base font-extrabold tracking-widest text-cyan shadow-md shadow-navy/20 transition-transform group-hover:scale-110">
                TB
              </span>
              <span className="rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-petrol">
                Solid Oral Dosage
              </span>
            </div>

            <h3 className="display-face mt-6 text-2xl font-bold text-navy sm:text-3xl">
              Tablet Formulations
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              High-speed rotary compression with advanced aqueous and organic film coating, enteric protection, and controlled extended-release matrices.
            </p>

            <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
              {[
                "Film-Coated & Enteric-Coated Tablets",
                "Sustained, Modified & Extended Release",
                "Fast-Dispersible & Chewable Formulations",
                "Bilayer & Multilayer Incompatibility Separation",
                "Alu-Alu Cold Form & PVC/PVDC Blister Packing",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-cyan/20 text-petrol text-[10px] font-bold">
                    ✓
                  </span>
                  {feat}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Tooling: 5mm to 22mm</span>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol transition group-hover:translate-x-1"
              >
                View Tablet Specs <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Capsules Card */}
          <div className="reveal-card group relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10">
            <div className="flex items-start justify-between">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-petrol text-base font-extrabold tracking-widest text-white shadow-md shadow-petrol/20 transition-transform group-hover:scale-110">
                CP
              </span>
              <span className="rounded-full bg-petrol/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                Encapsulation
              </span>
            </div>

            <h3 className="display-face mt-6 text-2xl font-bold text-navy sm:text-3xl">
              Capsule Formulations
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              High-precision automatic encapsulation for powders, granules, controlled-release pellets, and combination fills with weight control.
            </p>

            <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
              {[
                "Hard Gelatin Capsules (HGC) Size 00 to 4",
                "Vegetarian (HPMC) Capsules for Hygroscopic APIs",
                "Pellets-in-Capsule (MUPS & Enteric Coated)",
                "Banded & Tamper-Evident Capsule Enclosures",
                "Moisture-Barrier Alu-Alu & Desiccant Bottle Packs",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-petrol/15 text-petrol text-[10px] font-bold">
                    ✓
                  </span>
                  {feat}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Sizes: 00, 0, 1, 2, 3, 4</span>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol transition group-hover:translate-x-1"
              >
                View Capsule Specs <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose Renumed ─────────────────────────────── */
const principles = [
  { icon: "shield" as IconName, title: "Quality-Focused Processes", text: "A clear framework for inspection, controlled activity, review, and documented release decisions." },
  { icon: "layers" as IconName, title: "Reliable Manufacturing", text: "A process-led approach designed around consistency, coordination, and practical production controls." },
  { icon: "spark" as IconName, title: "Customer-Oriented Service", text: "Clear communication and business support shaped around confirmed partner requirements." },
  { icon: "document" as IconName, title: "Documented Operations", text: "Structured records help support visibility, review, traceability, and responsible follow-through." },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          kicker="Why Renumed"
          title="Built around process. Focused on trust."
          body="Renumed Pharmaceutical Labs is a manufacturing organisation focused on disciplined, quality-oriented operations serving pharmaceutical business requirements."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((item, index) => (
            <article key={item.title} className="reveal-card rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan/10 text-petrol">
                  <Icon name={item.icon} />
                </span>
                <span className="text-xs font-semibold text-slate-300">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process Timeline ───────────────────────────────── */
const processSteps = [
  "Enquiry",
  "Requirement Review",
  "Development / Approval",
  "Manufacturing",
  "Quality Control",
  "Packaging",
  "Dispatch",
];

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="glow-orb top-0 right-0 h-96 w-96 bg-cyan/15" aria-hidden="true" />
      <div className="container-shell relative">
        <SectionHeading
          kicker="Engagement process"
          title="From enquiry to dispatch — a clear path."
          body="Our structured manufacturing process ensures transparency, quality, and timely delivery at every stage."
          dark
        />
        <div className="mt-14">
          <ProcessTimeline steps={processSteps} dark />
        </div>
      </div>
    </section>
  );
}

/* ── Quality Preview ────────────────────────────────── */
function QualityPreview() {
  const items = [
    ["Raw-material inspection", "Review of incoming API and excipients against defined requirements before use."],
    ["In-process checks", "Planned observations, friability, hardness, and disintegration checks during compression & filling."],
    ["Finished-product evaluation", "Review against applicable, approved release specifications."],
    ["Batch documentation", "Structured batch manufacturing records supporting full review and accountable decisions."],
  ];

  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            kicker="Quality approach"
            title="Quality is a system of connected decisions."
            body="Our quality approach is built on systematic inspection, complete batch documentation, and strict traceability."
          />
          <Link
            href="/quality"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-petrol transition hover:text-navy hover:translate-x-1"
          >
            Learn about our quality standards <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([title, text], index) => (
            <div key={title} className="marquee-line bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <div className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan/15 text-xs font-bold text-petrol">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page Export ─────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsSection />
      <DosageSpotlight />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <QualityPreview />
      <CTABanner
        kicker="Ready to partner?"
        title="Start a focused conversation with our team."
        body="Tell us about your tablet or capsule contract manufacturing requirement. We respond to every enquiry promptly."
        buttonText="Request a Quote"
        buttonHref="/contact"
        variant="navy"
      />
    </>
  );
}
