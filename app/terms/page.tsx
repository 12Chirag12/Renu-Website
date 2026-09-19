import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Use", description: "Draft terms governing use of the Renumed Pharmaceutical Labs website." };

export default function TermsPage() {
  return <LegalPage eyebrow="Website policy" title="Terms of Use" updated="20 September 2026">
    <section><h2 className="text-xl font-bold text-navy">Informational purpose</h2><p className="mt-2">Website content is provided for general corporate and business-enquiry purposes. It is not medical advice, a product approval, an offer for sale, or a guarantee of product or service availability.</p></section>
    <section><h2 className="text-xl font-bold text-navy">Accuracy and updates</h2><p className="mt-2">Renumed Pharmaceutical Labs should review all company, capability, product, quality, contact, and regulatory information before publication and may update approved content when necessary.</p></section>
    <section><h2 className="text-xl font-bold text-navy">Acceptable use</h2><p className="mt-2">Visitors should use the website lawfully and must not attempt to disrupt, misuse, copy deceptively, or gain unauthorized access to the website or its supporting systems.</p></section>
    <section><h2 className="text-xl font-bold text-navy">Governing terms</h2><p className="mt-2">Applicable law, jurisdiction, limitation language, and verified company contact details must be supplied by an authorized company representative.</p></section>
  </LegalPage>;
}

