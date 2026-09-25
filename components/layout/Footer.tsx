import Link from "next/link";
import { Logo } from "../ui/Logo";
import { company } from "@/data/company";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contract Manufacturing", href: "/contract-manufacturing" },
  { label: "Products", href: "/products" },
];

const businessLinks = [
  { label: "Quality & Compliance", href: "/quality" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact & Enquiry", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white">
      <div className="container-shell grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.8fr_1fr]">
        {/* Brand */}
        <div>
          <Logo inverse />
          <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
            {company.description}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">Navigate</p>
          <div className="mt-5 space-y-3">
            {quickLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="block text-sm text-white/55 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Business links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">Business</p>
          <div className="mt-5 space-y-3">
            {businessLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="block text-sm text-white/55 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact status */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">Contact</p>
          <p className="mt-5 text-sm leading-6 text-white/55">
            Address, phone, email, and business hours are awaiting company confirmation.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-6 text-[.68rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Renumed Pharmaceutical Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms of Use</Link>
            <Link href="/disclaimer" className="transition hover:text-white">Product Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
