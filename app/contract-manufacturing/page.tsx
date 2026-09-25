import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CTABanner } from "@/components/ui/CTABanner";
import type { IconName } from "@/components/ui/Icon";
import { capabilityPlaceholders, servicePlaceholders } from "@/data/company";

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description:
    "Renumed Pharmaceutical Labs provides pharmaceutical contract manufacturing, third-party production, packaging, and documentation services with a quality-focused approach.",
};

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "chart", title: "Reduce Capital Investment", text: "Leverage our manufacturing infrastructure without the overhead of building your own production facility." },
  { icon: "target", title: "Focus on Core Business", text: "Concentrate on marketing, distribution, and brand building while we handle production." },
  { icon: "shield", title: "Quality Assurance", text: "Benefit from documented quality processes, in-process checks, and structured release procedures." },
  { icon: "clock", title: "Faster Time to Market", text: "Established production capabilities help reduce your product development and launch timelines." },
  { icon: "layers", title: "Flexible Capacity", text: "Scale production up or down based on demand without managing fixed manufacturing costs." },
  { icon: "document", title: "Regulatory Documentation", text: "Receive comprehensive batch records, testing certificates, and regulatory documentation support." },
];

const engagementSteps = [
  "Enquiry",
  "Requirement Review",
  "Development / Approval",
  "Manufacturing",
  "Quality Control",
  "Packaging",
  "Dispatch",
];

const suitableFor = [
  "Pharmaceutical companies seeking manufacturing partners",
  "Healthcare businesses expanding their product portfolio",
  "Established brands exploring contract production",
  "Companies requiring specialised dosage form manufacturing",
  "Organisations needing flexible production capacity",
  "Businesses looking for documentation and quality support",
];

export default function ContractManufacturingPage() {
  return (
    <>
      <PageHero
        title="Pharmaceutical Contract Manufacturing"
        description="Reliable, quality-focused manufacturing partnerships designed around your product requirements and business objectives."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contract Manufacturing" }]}
      />

      {/* Introduction */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell grid gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              kicker="Contract manufacturing"
              title="Your product, our production expertise."
              body="Renumed Pharmaceutical Labs provides pharmaceutical contract manufacturing services through a structured, quality-oriented approach. We support businesses looking for reliable production partnerships — from formulation development through to final dispatch."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                Our contract manufacturing model is built on clear communication, documented processes, and responsive business support. We work with pharmaceutical companies, healthcare businesses, and organisations looking to leverage established manufacturing capabilities.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white transition hover:bg-petrol"
              >
                Request a Quote <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/facilities"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/15 px-5 py-3.5 text-sm font-bold text-navy transition hover:border-petrol/40 hover:text-petrol"
              >
                View Facilities
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {benefits.slice(0, 3).map((b) => (
              <div key={b.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-petrol/25 hover:shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-petrol">
                  <Icon name={b.icon} />
                </span>
                <div>
                  <h3 className="font-bold text-navy">{b.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Client benefits"
            title="Why contract manufacturing makes business sense."
            centered
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <article key={b.title} className="reveal-card rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan/10 text-petrol">
                    <Icon name={b.icon} />
                  </span>
                  <span className="text-xs font-semibold text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
        <div className="container-shell relative">
          <SectionHeading
            kicker="Engagement process"
            title="A clear path from enquiry to delivery."
            body="Our structured engagement process ensures transparency, accountability, and quality at every stage of the manufacturing relationship."
            dark
          />
          <div className="mt-14">
            <ProcessTimeline steps={engagementSteps} dark />
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-mist"
            >
              Start the Process <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Solid Oral Capabilities"
              title="Dedicated Tablets & Capsules Infrastructure."
              body="Our contract manufacturing operations are purpose-built for solid oral dosage forms — ensuring high compression speed, tight weight tolerances, and controlled dissolution."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-petrol transition hover:text-navy"
            >
              Inspect technical specs <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {capabilityPlaceholders.map((item) => (
              <article
                key={item.name}
                className="reveal-card group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-mist/40 p-8 shadow-sm transition hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-xs font-extrabold tracking-[.15em] text-cyan shadow-md shadow-navy/20 transition-transform group-hover:scale-105">
                      {item.code}
                    </span>
                    <span className="rounded-full bg-cyan/15 px-3 py-1 text-[.7rem] font-bold uppercase tracking-wider text-petrol">
                      Primary Form
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Validated Production</span>
                  <Link
                    href={`/contact?interest=${encodeURIComponent(item.name + " Manufacturing")}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol transition group-hover:translate-x-1"
                  >
                    Request Quote <Icon name="arrow" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Services"
            title="Flexible support for pharmaceutical business needs."
            centered
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePlaceholders.map((service, i) => (
              <article key={service} className="reveal-card flex min-h-[11rem] flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol">
                  <Icon name={i % 2 === 0 ? "layers" : "document"} />
                </span>
                <h3 className="mt-auto pt-6 text-lg font-bold text-navy">{service}</h3>
                <Link href="/contact" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-petrol transition hover:text-navy">
                  Discuss this service <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            kicker="Suitable for"
            title="Who benefits from our contract manufacturing?"
            body="Our services are designed for pharmaceutical businesses and organisations that need reliable, documented production support."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {suitableFor.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-petrol/25 hover:shadow-card">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-petrol text-white">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-medium text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        kicker="Start your project"
        title="Let's discuss your manufacturing requirement."
        body="Share your product details and business needs. Our team will provide a structured response within one working day."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
