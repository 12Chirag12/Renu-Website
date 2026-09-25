"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../ui/Logo";
import { Icon, type IconName } from "../ui/Icon";

type NavItem = {
  label: string;
  href: string;
  icon: IconName;
  description: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: "factory",
    description: "Corporate overview & manufacturing scope",
  },
  {
    label: "About Us",
    href: "/about",
    icon: "shield",
    description: "Quality philosophy, values & operational discipline",
  },
  {
    label: "Contract Manufacturing",
    href: "/contract-manufacturing",
    icon: "box",
    description: "Custom solid oral formulation partnerships",
  },
  {
    label: "Products",
    href: "/products",
    icon: "layers",
    description: "Tablets & capsules specifications and coating",
  },
  {
    label: "Quality",
    href: "/quality",
    icon: "award",
    description: "Batch testing, analytical checks & compliance",
  },
  {
    label: "Facilities",
    href: "/facilities",
    icon: "settings",
    description: "29 verified production & packaging machines",
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: "pin",
    description: "Technical feasibility review & factory enquiry",
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Close on Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Prevent background body scrolling when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 relative border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm transition-all duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <div className="container-shell flex h-[76px] items-center justify-between gap-5">
          <Logo />

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden items-stretch self-stretch lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative flex h-full items-center px-3.5 text-[.82rem] font-semibold transition-colors duration-200 xl:px-4 ${
                    isActive
                      ? "text-petrol font-bold"
                      : "text-slate-600 hover:text-petrol focus:text-petrol"
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

          {/* Desktop Right CTA */}
          <Link
            href="/contact"
            className="btn-primary hidden items-center gap-2 rounded-xl bg-navy px-5 py-3 text-xs font-bold text-white shadow-md shadow-navy/15 transition hover:bg-petrol lg:flex"
          >
            Enquire Now <Icon name="arrow" className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`relative grid h-10 w-10 place-items-center rounded-lg border transition-colors lg:hidden active:scale-95 ${
              mobileOpen
                ? "border-petrol bg-petrol/10 text-petrol"
                : "border-slate-200 bg-white text-navy hover:bg-slate-50"
            }`}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon
              name={mobileOpen ? "close" : "menu"}
              className="h-5 w-5 transition-transform duration-200"
            />
          </button>
        </div>

        {/* ── Classic Professional Mobile Dropdown Menubar ── */}
        <div
          className={`absolute top-full left-0 right-0 z-50 border-b border-slate-200 bg-white shadow-xl transition-all duration-200 ease-in-out lg:hidden ${
            mobileOpen
              ? "opacity-100 pointer-events-auto translate-y-0 visible"
              : "opacity-0 pointer-events-none -translate-y-1 invisible"
          }`}
        >
          <div className="container-shell py-2 sm:py-3">
            <nav className="divide-y divide-slate-100" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-2.5 text-sm transition-colors ${
                      isActive
                        ? "font-semibold text-petrol"
                        : "font-normal text-slate-700 hover:text-petrol"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    ) : (
                      <Icon name="arrow" className="h-3 w-3 text-slate-300" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 pb-1 mt-1 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy py-2.5 px-4 text-xs font-semibold text-white shadow-sm hover:bg-petrol transition"
              >
                <span>Enquire Now</span>
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay below header - leaves background visible and dismisses on tap */}
      <div
        className={`fixed inset-0 top-[76px] z-40 bg-slate-900/30 backdrop-blur-[1px] transition-opacity duration-200 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}

export default Header;
