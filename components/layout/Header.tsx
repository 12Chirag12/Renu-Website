"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contract Manufacturing", href: "/contract-manufacturing" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact Us", href: "/contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/40"
          : "border-b border-transparent bg-white/85 backdrop-blur-md"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Logo />

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden items-stretch self-stretch lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative flex h-full items-center px-3.5 text-[.82rem] font-semibold transition-colors duration-200 xl:px-4 ${
                  isActive ? "text-petrol" : "text-slate-600 hover:text-petrol focus:text-petrol"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-cyan transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="btn-primary hidden items-center gap-2 rounded-xl bg-navy px-5 py-3 text-xs font-bold text-white shadow-md shadow-navy/15 transition hover:bg-petrol lg:flex"
        >
          Enquire Now <Icon name="arrow" className="h-4 w-4" />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy lg:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto bg-white px-5 pb-6 pt-3 lg:hidden">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block border-b border-slate-100 py-3.5 text-sm font-semibold ${
                    isActive ? "text-petrol" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white"
          >
            Enquire Now <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
