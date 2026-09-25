import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renumedpharma.com"),
  title: {
    default: "Renumed Pharmaceutical Labs | Pharmaceutical Contract Manufacturing",
    template: "%s | Renumed Pharmaceutical Labs",
  },
  description:
    "Renumed Pharmaceutical Labs provides quality-focused pharmaceutical contract manufacturing, third-party production, and packaging services through disciplined, documented operations.",
  openGraph: {
    title: "Renumed Pharmaceutical Labs",
    description: "Quality-focused pharmaceutical contract manufacturing and business support.",
    type: "website",
    locale: "en_IN",
    siteName: "Renumed Pharmaceutical Labs",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Renumed Pharmaceutical Labs",
    url: "https://www.renumedpharma.com",
    description:
      "A pharmaceutical manufacturing organization focused on disciplined processes, documented operations, and responsive business support.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Enquiry",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
