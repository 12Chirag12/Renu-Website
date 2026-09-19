import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Product Disclaimer", description: "Product and regulatory disclaimer for Renumed Pharmaceutical Labs." };

export default function DisclaimerPage() {
  return <LegalPage eyebrow="Important information" title="Product Disclaimer" updated="20 September 2026">
    <section><h2 className="text-xl font-bold text-navy">Availability</h2><p className="mt-2">Product availability and regulatory status may vary by market. A business enquiry does not confirm supply, approval, registration, or suitability.</p></section>
    <section><h2 className="text-xl font-bold text-navy">No medical claims</h2><p className="mt-2">Nothing on this website is intended to diagnose, treat, cure, or prevent a disease, and no website content should be interpreted as medical or prescribing advice.</p></section>
    <section><h2 className="text-xl font-bold text-navy">Verification required</h2><p className="mt-2">Only company-approved product names, dosage forms, strengths, pack sizes, therapeutic categories, markets, and regulatory statements should be published in the product catalogue.</p></section>
  </LegalPage>;
}

