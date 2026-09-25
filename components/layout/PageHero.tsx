import Link from "next/link";

export function PageHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="absolute inset-0 opacity-40 grid-pattern" aria-hidden="true" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-petrol/15 blur-3xl" aria-hidden="true" />
      <div className="container-shell relative">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80 font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display-face max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
