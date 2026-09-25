import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CTABanner } from "@/components/ui/CTABanner";
import { capabilityPlaceholders } from "@/data/company";

export const metadata: Metadata = {
  title: "Facilities & Capabilities",
  description:
    "Explore Renumed Pharmaceutical Labs' manufacturing facilities, quality laboratory, packaging lines, and operational capabilities.",
};

const areas = [
  { name: "Manufacturing Areas", desc: "Controlled production zones designed for pharmaceutical manufacturing" },
  { name: "QC Laboratory", desc: "Analytical and testing laboratory for quality control procedures" },
  { name: "Warehousing", desc: "Organised storage areas with appropriate environmental controls" },
  { name: "Packaging Lines", desc: "Primary and secondary packaging equipment and stations" },
  { name: "Utility Systems", desc: "Supporting infrastructure for water, power, and environmental control" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Facilities & Capabilities"
        description="Purpose-built spaces for controlled pharmaceutical manufacturing, quality testing, and packaging operations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities & Capabilities" }]}
      />

      {/* Facility Images */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Our facilities"
              title="Purposeful spaces for controlled work."
              body="A visual framework for presenting manufacturing, laboratory, warehousing, packaging, utility, and support areas."
            />
            <p className="max-w-sm text-xs leading-5 text-slate-500">
              Images are illustrative visuals. They should be replaced with verified photographs of the actual facility.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <figure className="group relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/images/quality-laboratory.png"
                alt="Illustrative view of a quality-control laboratory with analytical equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur">
                <span className="text-[.65rem] font-bold uppercase tracking-[.15em] text-cyan">Illustrative image</span>
                <p className="mt-1 font-bold">Quality-Control Laboratory</p>
                <p className="mt-1 text-xs text-white/60">Actual laboratory details to be confirmed.</p>
              </figcaption>
            </figure>
            <figure className="group relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/images/packaging-line.png"
                alt="Illustrative view of a pharmaceutical packaging line with automated equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur">
                <span className="text-[.65rem] font-bold uppercase tracking-[.15em] text-cyan">Illustrative image</span>
                <p className="mt-1 font-bold">Packaging Facilities</p>
                <p className="mt-1 text-xs text-white/60">Line configuration and equipment details to be confirmed.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Infrastructure Areas */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Infrastructure"
            title="Dedicated areas for every stage of production."
            centered
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((item) => (
              <div
                key={item.name}
                className="reveal-card rounded-2xl border border-slate-200 bg-white p-5 text-center"
              >
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-cyan/10 text-petrol">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy">{item.name}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
        <div className="container-shell relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Manufacturing capabilities"
              title="Production scope across dosage forms."
              body="The categories below represent editable placeholders — not claims. Each capability is confirmed during the enquiry process."
              dark
            />
            <PlaceholderTag />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {capabilityPlaceholders.map((item) => (
              <article
                key={item.name}
                className="group rounded-3xl border border-white/15 bg-white/[.06] backdrop-blur-md p-8 transition duration-300 hover:-translate-y-1.5 hover:border-cyan/50 hover:bg-white/[.1] hover:shadow-2xl hover:shadow-cyan/10"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan/30 bg-cyan/15 text-sm font-bold tracking-[.15em] text-cyan shadow-sm">
                    {item.code}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[.7rem] font-bold uppercase tracking-wider text-cyan">
                    Solid Oral Facility
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.note}</p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40">Controlled Humidity Area</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan transition group-hover:translate-x-1">
                    Enquire Facility <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Placeholder */}
      <section className="bg-white py-16">
        <div className="container-shell">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-bold text-navy">Equipment and capacity details require confirmation</p>
              <p className="mt-1 text-sm text-slate-600">
                Specific machinery, production capacity numbers, and equipment specifications have not been provided and are not claimed on this page.
              </p>
            </div>
            <div className="mt-4 shrink-0 sm:mt-0">
              <PlaceholderTag />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        kicker="See it in action"
        title="Discuss a facility visit or capability review."
        body="We welcome enquiries about our manufacturing capabilities and facility details."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="navy"
      />
    </>
  );
}
