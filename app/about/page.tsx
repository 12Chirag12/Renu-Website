import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CTABanner } from "@/components/ui/CTABanner";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Renumed Pharmaceutical Labs — our mission, vision, values, and quality-focused approach to pharmaceutical manufacturing.",
};

const principles = [
  { icon: "shield" as IconName, title: "Quality-Focused Processes", text: "A clear framework for inspection, controlled activity, review, and documented release decisions." },
  { icon: "layers" as IconName, title: "Reliable Manufacturing", text: "A process-led approach designed around consistency, coordination, and practical production controls." },
  { icon: "spark" as IconName, title: "Customer-Oriented Service", text: "Clear communication and business support shaped around confirmed partner requirements." },
  { icon: "document" as IconName, title: "Documented Operations", text: "Structured records help support visibility, review, traceability, and responsible follow-through." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Renumed Pharmaceutical Labs"
        description="A pharmaceutical manufacturing organisation focused on disciplined processes, documented operations, and responsive business support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Company Overview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading
              kicker="Company overview"
              title="Built around process. Focused on trust."
            />
            <div className="mt-8 space-y-5 text-base leading-7 text-slate-600">
              <p>
                Renumed Pharmaceutical Labs is a pharmaceutical manufacturing organisation serving business and institutional requirements. We operate through a structured, quality-oriented approach that prioritises documentation, process control, and responsive client support.
              </p>
              <p>
                Our approach is built on the principle that reliable manufacturing comes from disciplined processes — clear procedures, documented decisions, and consistent follow-through at every stage from raw material receipt to final dispatch.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-lift lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/images/hero-manufacturing.png"
              alt="Illustrative view of a pharmaceutical production facility"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/90 p-4 text-white backdrop-blur">
              <span className="text-[.65rem] font-bold uppercase tracking-[.15em] text-cyan">Illustrative image</span>
              <p className="mt-1 text-sm font-bold">Manufacturing Facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Our strengths"
            title="Core principles that guide our operations."
            centered
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Mission, Vision, Values */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["Our Mission", "To support pharmaceutical business needs through disciplined, transparent, and quality-oriented manufacturing practices."],
            ["Our Vision", "To build trusted, long-term relationships through responsible operations and dependable business support."],
            ["Our Values", "Quality awareness, accountability, documentation, responsiveness, and continuous improvement."],
          ].map(([title, text], index) => (
            <article
              key={title}
              className={`rounded-3xl p-8 ${
                index === 0 ? "bg-navy text-white" : "border border-slate-200 bg-white text-navy"
              }`}
            >
              <span className={`text-xs font-bold uppercase tracking-[.15em] ${index === 0 ? "text-cyan" : "text-petrol"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display-face mt-14 text-3xl font-semibold">{title}</h3>
              <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/65" : "text-slate-600"}`}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Company Information Placeholder */}
      <section className="bg-mist py-16">
        <div className="container-shell">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-bold text-navy">Company profile details require confirmation</p>
              <p className="mt-1 text-sm text-slate-600">
                Establishment year, location, leadership, management message, and verified milestones have not been supplied.
              </p>
            </div>
            <div className="mt-4 shrink-0 sm:mt-0">
              <PlaceholderTag />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        kicker="Partner with us"
        title="Ready to discuss your manufacturing needs?"
        body="We welcome enquiries from pharmaceutical businesses looking for a reliable contract manufacturing partner."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="navy"
      />
    </>
  );
}
