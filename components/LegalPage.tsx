import Link from "next/link";

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-mist">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-shell flex h-20 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-navy">REN<span className="text-cyan">U</span>MED <span className="ml-1 text-[.58rem] uppercase tracking-[.16em] text-slate-400">Pharmaceutical Labs</span></Link>
          <Link href="/" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-navy hover:text-petrol">Back to website</Link>
        </div>
      </header>
      <article className="container-shell py-20 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-7 shadow-lift sm:p-12">
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="display-face mt-6 text-4xl font-semibold text-navy sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: {updated}</p>
          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">{children}</div>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-slate-600">This draft must be reviewed and approved by the company&apos;s authorized legal or compliance representative before publication.</div>
        </div>
      </article>
    </main>
  );
}

