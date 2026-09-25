export type IconName =
  | "arrow" | "chevron" | "menu" | "close" | "check"
  | "shield" | "document" | "flask" | "box" | "layers"
  | "search" | "mail" | "pin" | "clock" | "phone" | "spark"
  | "factory" | "beaker" | "truck" | "users" | "chart"
  | "globe" | "target" | "award" | "clipboard" | "settings";

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      {name === "arrow" && <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>}
      {name === "chevron" && <path d="m8 10 4 4 4-4" />}
      {name === "menu" && <><path d="M4 7h16M4 12h16M4 17h16" /></>}
      {name === "close" && <path d="m6 6 12 12M18 6 6 18" />}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
      {name === "shield" && <><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>}
      {name === "document" && <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>}
      {name === "flask" && <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M8 15h8" /></>}
      {name === "box" && <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>}
      {name === "layers" && <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>}
      {name === "search" && <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>}
      {name === "mail" && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>}
      {name === "pin" && <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
      {name === "clock" && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
      {name === "phone" && <path d="M6.5 3h3L11 7l-2 1.5a15 15 0 0 0 6.5 6.5L17 13l4 1.5v3c0 1.9-1.6 3.5-3.5 3.5A14.5 14.5 0 0 1 3 6.5C3 4.6 4.6 3 6.5 3Z" />}
      {name === "spark" && <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm6 12 .7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15Z" />}
      {name === "factory" && <><path d="M2 20V8l5 3V8l5 3V8l5 3V4h5v16z" /><path d="M6 16h2M11 16h2M16 16h2" /></>}
      {name === "beaker" && <><path d="M8 2h8M9 2v7L4 20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1L15 9V2" /><path d="M7 15h10" /></>}
      {name === "truck" && <><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 4v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>}
      {name === "users" && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>}
      {name === "chart" && <><path d="M18 20V10M12 20V4M6 20v-6" /></>}
      {name === "globe" && <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></>}
      {name === "target" && <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>}
      {name === "award" && <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>}
      {name === "clipboard" && <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /></>}
      {name === "settings" && <><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>}
    </svg>
  );
}
