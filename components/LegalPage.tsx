export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy py-12 text-white sm:py-16">
        <div className="container-shell">
          <span className="section-kicker on-dark">{eyebrow}</span>
          <h1 className="display-face mt-4 text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-white/50">Last updated: {updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-narrow">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lift sm:p-12">
            <div className="space-y-8 text-sm leading-7 text-slate-600">{children}</div>
            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-slate-600">
              This draft must be reviewed and approved by the company&apos;s authorised legal or compliance representative before publication.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
