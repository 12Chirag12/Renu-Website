export function SectionHeading({
  kicker,
  title,
  body,
  dark = false,
  centered = false,
}: {
  kicker: string;
  title: string;
  body?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className={`section-kicker ${dark ? "on-dark" : ""}`}>{kicker}</span>
      <h2 className={`display-face mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-base leading-7 ${dark ? "text-white/65" : "text-slate-600"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
