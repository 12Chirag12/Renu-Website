import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { CTABanner } from "@/components/ui/CTABanner";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "Discover Renumed Pharmaceutical Labs' quality approach — raw-material inspection, in-process checks, batch documentation, traceability, and structured quality systems.",
};

const qualityItems: [string, string, IconName][] = [
  ["Raw-Material Inspection", "Review of incoming material against defined requirements before use.", "search"],
  ["In-Process Checks", "Planned observations and checks during relevant production stages.", "clipboard"],
  ["Finished-Product Evaluation", "Review against applicable, approved product specifications.", "check"],
  ["Batch Documentation", "Structured records supporting review and accountable decisions.", "document"],
  ["Storage & Inventory Controls", "Organised handling practices appropriate to material status.", "box"],
  ["Traceability", "Clear movement and record links across relevant process stages.", "layers"],
  ["Packaging Inspection", "Checks focused on identity, presentation, and pack integrity.", "shield"],
  ["Staff Training", "Role-relevant instruction with appropriate documentation.", "users"],
];

const docPractices = [
  "Batch manufacturing records maintained for every production run",
  "Raw material certificates reviewed and filed systematically",
  "In-process testing documented with date, time, and operator details",
  "Deviation reporting with root cause analysis and corrective actions",
  "Standard operating procedures for all critical manufacturing steps",
  "Change control documentation for process and equipment modifications",
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="Quality & Compliance"
        description="Quality is a system of connected decisions. Our approach is built on inspection, documentation, and structured process controls."
      />

      {/* Quality Approach */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              kicker="Quality approach"
              title="Every step documented. Every decision accountable."
              body="Our quality content describes an operating approach without asserting certifications, approvals, or specifications that have not been provided."
            />
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-navy">Certification status</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                GMP, WHO-GMP, ISO, and regulatory approval names are intentionally omitted pending verified documentation.
              </p>
            </div>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {qualityItems.map(([title, text, icon], index) => (
              <article key={title} className="marquee-line py-7">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center gap-2">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-petrol">
                      <Icon name={icon} className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-xs font-bold text-cyan">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Practices */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Documentation"
            title="Structured records at every stage."
            body="Documentation is the backbone of pharmaceutical quality. Our practices ensure complete traceability and accountability."
            centered
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
            {docPractices.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-petrol text-white">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-medium leading-6 text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
        <div className="container-shell relative">
          <SectionHeading
            kicker="Quality workflow"
            title="Quality checks integrated at every production stage."
            dark
            centered
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Incoming Material", "Raw materials tested and approved before entering production"],
              ["In-Process Control", "Critical parameters monitored during manufacturing"],
              ["Finished Product", "Final products tested against approved specifications"],
              ["Release & Dispatch", "Documented release decision before any product leaves the facility"],
            ].map(([title, text], i) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[.055] p-6 transition hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[.08]">
                <span className="text-[.65rem] font-bold text-cyan">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        kicker="Quality assurance matters"
        title="Discuss your quality requirements with our team."
        body="We welcome conversations about quality standards, documentation needs, and compliance expectations."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
