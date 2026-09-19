import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", description: "Draft website privacy information for Renumed Pharmaceutical Labs." };

export default function PrivacyPage() {
  return <LegalPage eyebrow="Website policy" title="Privacy Policy" updated="20 September 2026">
    <section><h2 className="text-xl font-bold text-navy">Information collected</h2><p className="mt-2">The website may collect information submitted through the business enquiry form, including contact, company, location, and requirement details. The company should confirm the final collection scope before launch.</p></section>
    <section><h2 className="text-xl font-bold text-navy">How information may be used</h2><p className="mt-2">Submitted information is intended only for responding to business enquiries, assessing relevant requirements, and maintaining appropriate correspondence. It should not be used for unrelated purposes without an appropriate basis.</p></section>
    <section><h2 className="text-xl font-bold text-navy">Storage and sharing</h2><p className="mt-2">The final policy must identify the approved form-delivery provider, retention period, security measures, and any lawful sharing arrangements. No such provider is configured in this website package.</p></section>
    <section><h2 className="text-xl font-bold text-navy">Contact and rights</h2><p className="mt-2">A verified privacy contact and applicable rights procedure must be added after the company confirms its operating location and legal requirements.</p></section>
  </LegalPage>;
}

