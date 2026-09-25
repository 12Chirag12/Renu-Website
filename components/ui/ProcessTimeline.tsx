export function ProcessTimeline({
  steps,
  dark = false,
}: {
  steps: string[];
  dark?: boolean;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`relative rounded-xl p-4 transition hover:-translate-y-1 ${
            dark
              ? "border border-white/10 bg-white/[.045] hover:border-cyan/30 hover:bg-white/[.08]"
              : "border border-slate-200 bg-white hover:border-petrol/25 hover:shadow-card"
          }`}
        >
          <span className={`text-[.65rem] font-bold ${dark ? "text-cyan" : "text-petrol"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className={`mt-8 text-sm font-semibold leading-5 ${dark ? "text-white/85" : "text-navy"}`}>
            {step}
          </p>
          {index < steps.length - 1 && (
            <span
              className={`absolute -right-2 top-1/2 z-10 hidden h-4 w-4 place-items-center rounded-full text-xs lg:grid ${
                dark ? "bg-cyan text-navy" : "bg-petrol text-white"
              }`}
              aria-hidden="true"
            >
              ›
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
