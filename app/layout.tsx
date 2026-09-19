import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Renumed Pharmaceutical Labs | Pharmaceutical Manufacturing",
    template: "%s | Renumed Pharmaceutical Labs",
  },
  description: "Explore Renumed Pharmaceutical Labs' quality-oriented approach, manufacturing workflow, infrastructure, and business enquiry options.",
  openGraph: {
    title: "Renumed Pharmaceutical Labs",
    description: "Quality-focused pharmaceutical manufacturing and business support.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Renumed Pharmaceutical Labs",
    url: "https://www.example.com",
    description: "A pharmaceutical manufacturing organization focused on disciplined processes and business support.",
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}

