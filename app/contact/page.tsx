import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { company } from "@/data/company";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact & Enquiry",
  description:
    "Contact Renumed Pharmaceutical Labs for contract manufacturing, product development, packaging, and business partnership enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Enquiry"
        description="Start a focused conversation about your pharmaceutical manufacturing requirement. We respond to every enquiry promptly."
      />

      {/* Enquiry Section */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <SectionHeading
              kicker="Business enquiry"
              title="Tell us about your requirement."
              body="Share your product, manufacturing, packaging, or partnership details. We use this information only to understand and respond to your enquiry."
            />
            <div className="mt-10 space-y-5">
              {[
                "Structured requirement capture",
                "Server-side input validation",
                "Response within one working day",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-petrol/10 text-petrol">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-sm border-l-2 border-petrol pl-4 text-xs leading-5 text-slate-500">
              Form delivery requires an approved secure endpoint before launch. Until configured, the site will display a service status message.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading
            kicker="Contact information"
            title="Company contact details."
            body="All contact details below are marked for confirmation because verified company information was not provided."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["pin", "Registered Office", company.status.registeredOffice],
                ["pin", "Manufacturing Unit", company.status.manufacturingUnit],
                ["phone", "Phone & Email", `${company.status.phone} · ${company.status.email}`],
                ["clock", "Business Hours", company.status.businessHours],
              ] as [IconName, string, string][]
            ).map(([icon, title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-petrol/25 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol">
                  <Icon name={icon} />
                </span>
                <h3 className="mt-6 text-sm font-bold text-navy">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </article>
            ))}
          </div>

          {/* Verified Google Maps Location */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift">
            <div className="flex flex-col gap-2 border-b border-slate-100 bg-mist/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy text-cyan text-xs">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">Renumed Pharmaceutical Labs</h3>
                  <p className="text-[.72rem] text-slate-500">Manufacturing Facility & Works</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Renumed+pharmaceutical+labs/@19.6857319,72.7593648,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol transition hover:text-navy"
              >
                Open in Google Maps <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="relative aspect-[16/9] w-full min-h-[380px] sm:min-h-[440px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.6312380295267!2d72.75936477498101!3d19.68573188164846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d4e08832b97%3A0xe4c0392c9d1ce6db!2sRenumed%20pharmaceutical%20labs!5e0!3m2!1sen!2sin!4v1790333823163!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Renumed Pharmaceutical Labs Location Map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
