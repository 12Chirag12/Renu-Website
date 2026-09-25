export function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="absolute inset-0 opacity-40 grid-pattern" aria-hidden="true" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-petrol/15 blur-3xl" aria-hidden="true" />
      <div className="container-shell relative">
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
