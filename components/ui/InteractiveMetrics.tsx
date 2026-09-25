import { Icon } from "./Icon";

const metrics = [
  {
    value: "2 Core",
    label: "Dosage Forms",
    subtext: "Specialized in Tablets & Capsules manufacturing",
    icon: "layers" as const,
  },
  {
    value: "100%",
    label: "Batch Traceability",
    subtext: "End-to-end documentation from API receipt to dispatch",
    icon: "document" as const,
  },
  {
    value: "7 Stage",
    label: "Quality Workflow",
    subtext: "Controlled checkpoints at every manufacturing phase",
    icon: "shield" as const,
  },
  {
    value: "<24h",
    label: "Response Commitment",
    subtext: "Dedicated technical review for contract manufacturing enquiries",
    icon: "clock" as const,
  },
];

export function InteractiveMetrics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item, idx) => (
        <div
          key={item.label}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-cyan/50 hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan/10"
        >
          {/* Ambient radial glow on hover */}
          <div
            className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan/15 blur-2xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100"
            aria-hidden="true"
          />

          <div className="flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol transition-colors duration-300 group-hover:bg-navy group-hover:text-cyan">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <span className="text-[.68rem] font-bold uppercase tracking-wider text-slate-400">
              0{idx + 1}
            </span>
          </div>

          <div className="mt-6">
            <p className="display-face text-3xl font-extrabold text-navy tracking-tight sm:text-4xl transition-colors group-hover:text-petrol">
              {item.value}
            </p>
            <h4 className="mt-1 text-sm font-bold text-navy">{item.label}</h4>
            <p className="mt-2 text-xs leading-5 text-slate-500">{item.subtext}</p>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-slate-100 overflow-hidden opacity-60 transition-opacity group-hover:opacity-100">
            <div className="h-full w-1/3 bg-gradient-to-r from-cyan to-petrol transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
