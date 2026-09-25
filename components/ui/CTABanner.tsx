import Link from "next/link";
import { Icon } from "./Icon";

export function CTABanner({
  kicker = "Ready to partner?",
  title = "Start a focused conversation with our team.",
  body = "Tell us about your product, manufacturing, packaging, or partnership requirement.",
  buttonText = "Enquire Now",
  buttonHref = "/contact",
  secondaryButtonText = "Our Capabilities",
  secondaryButtonHref = "/contract-manufacturing",
  variant = "petrol",
}: {
  kicker?: string;
  title?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "petrol" | "navy";
}) {
  const bg = variant === "navy"
    ? "bg-navy"
    : "bg-petrol";

  return (
    <section className={`relative overflow-hidden ${bg} py-20 text-white sm:py-28`}>
      <div className="absolute inset-0 opacity-25 grid-pattern" aria-hidden="true" />
      <div className="glow-orb -top-24 -left-24 h-96 w-96 bg-cyan/20" aria-hidden="true" />
      <div className="glow-orb -bottom-24 -right-24 h-96 w-96 bg-petrol/30" aria-hidden="true" />
      <div className="container-shell relative text-center">
        <span className="section-kicker on-dark mx-auto">{kicker}</span>
        <h2 className="display-face mx-auto mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
          {body}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
          <Link
            href={buttonHref}
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-navy shadow-lg shadow-black/10 transition hover:bg-mist"
          >
            {buttonText} <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryButtonHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/15"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
