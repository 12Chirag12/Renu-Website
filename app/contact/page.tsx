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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact & Enquiry" }]}
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

          {/* Map placeholder */}
          <div className="mt-8 grid min-h-64 place-items-center rounded-3xl border border-dashed border-slate-300 bg-mist text-center">
            <div>
              <Icon name="pin" className="mx-auto h-7 w-7 text-petrol" />
              <p className="mt-3 font-bold text-navy">Map location pending confirmation</p>
              <p className="mt-1 text-xs text-slate-500">
                A verified map embed can be added once the company address is supplied.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
