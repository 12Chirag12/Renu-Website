import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export interface PageHeroHighlight {
  label: string;
  icon?: IconName;
}

export interface PageHeroProps {
  title: string;
  description?: string;
  kicker?: string;
  breadcrumbs?: { label: string; href?: string }[];
  highlights?: PageHeroHighlight[];
  theme?: "light" | "navy";
  children?: React.ReactNode;
}

export function PageHero({
  title,
  description,
  kicker,
  breadcrumbs,
  highlights,
  theme = "light",
  children,
}: PageHeroProps) {
  const isNavy = theme === "navy";

  return (
    <section
      className={`relative overflow-hidden border-b transition-colors duration-300 ${isNavy
          ? "border-navy-light/40 bg-gradient-to-r from-navy via-[#072542] to-petrol/90 text-white py-9 sm:py-12"
          : "border-slate-200/80 bg-gradient-to-b from-mist via-white to-mist/50 text-ink py-9 sm:py-12"
        }`}
    >
      {/* Ambient background glows */}
      <div
        className={`glow-orb -top-24 -left-20 h-72 w-72 ${isNavy ? "bg-cyan/10" : "bg-cyan/15"
          }`}
        aria-hidden="true"
      />
      <div
        className={`glow-orb -bottom-20 right-0 h-72 w-72 ${isNavy ? "bg-petrol/20" : "bg-petrol/10"
          }`}
        aria-hidden="true"
      />
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-shell relative">
        {/* Breadcrumb row */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs">
          <Link
            href="/"
            className={`transition-colors hover:underline ${isNavy ? "text-cyan-light/80 hover:text-white" : "text-slate-500 hover:text-petrol"
              }`}
          >
            Home
          </Link>
          <span className={isNavy ? "text-white/30" : "text-slate-300"} aria-hidden="true">
            /
          </span>
          {breadcrumbs && breadcrumbs.length > 0 ? (
            breadcrumbs.map((crumb, idx) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`transition-colors hover:underline ${isNavy ? "text-cyan-light/80 hover:text-white" : "text-slate-500 hover:text-petrol"
                      }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={`font-semibold ${isNavy ? "text-white/90" : "text-navy"
                      }`}
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className={isNavy ? "text-white/30" : "text-slate-300"} aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))
          ) : (
            <span
              className={`font-semibold ${isNavy ? "text-white/90" : "text-navy"}`}
              aria-current="page"
            >
              {title}
            </span>
          )}
        </nav>

        {/* Main Content Grid: Balanced Left + Right Layout */}
        <div
          className={`grid items-center gap-8 ${highlights && highlights.length > 0 ? "lg:grid-cols-[1.1fr_.9fr] lg:gap-12" : ""
            }`}
        >
          {/* Left Column: Kicker, Title, Description */}
          <div>
            {kicker && (
              <div
                className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider backdrop-blur-md ${isNavy
                    ? "border border-cyan/30 bg-white/10 text-cyan-light"
                    : "border border-petrol/20 bg-white/90 text-petrol shadow-sm"
                  }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${isNavy ? "bg-cyan" : "bg-cyan"
                    } animate-pulse`}
                />
                {kicker}
              </div>
            )}

            <h1
              className={`display-face text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] ${isNavy ? "text-white" : "text-navy"
                }`}
            >
              {title}
            </h1>

            {description && (
              <p
                className={`mt-3 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 ${isNavy ? "text-white/75" : "text-slate-600"
                  }`}
              >
                {description}
              </p>
            )}

            {children}
          </div>

          {/* Right Column: High-value trust & capability highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:items-end">
              <div className="w-full max-w-md space-y-2.5">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 rounded-xl p-2.5 px-3.5 text-xs font-semibold backdrop-blur-md transition-all duration-200 ${isNavy
                        ? "border border-white/10 bg-white/[0.06] text-white/90 shadow-sm hover:border-cyan/40 hover:bg-white/[0.1]"
                        : "border border-slate-200/80 bg-white/90 text-slate-800 shadow-sm hover:border-petrol/30 hover:bg-white hover:shadow-md"
                      }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${isNavy ? "bg-cyan/15 text-cyan-light" : "bg-petrol/10 text-petrol"
                        }`}
                    >
                      <Icon name={item.icon || "check"} className="h-4 w-4" />
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
