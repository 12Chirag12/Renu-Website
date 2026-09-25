import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false, size = "default" }: { inverse?: boolean; size?: "default" | "large" }) {
  const isLarge = size === "large";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Renumed Pharmaceutical Labs home">
      <span className={`relative block shrink-0 overflow-hidden rounded-lg border ${isLarge ? "h-12 w-[3.3rem]" : "h-10 w-11"} ${inverse ? "border-white/20" : "border-navy/10"}`}>
        <Image src="/images/rpl-logo.jpg" alt="" width={63} height={57} className="h-full w-full object-cover" />
      </span>
      <span className="leading-none">
        <span className={`block font-bold tracking-[-.02em] ${isLarge ? "text-[1.25rem]" : "text-[1.08rem]"} ${inverse ? "text-white" : "text-navy"}`}>
          REN<span className="text-cyan">U</span>MED
        </span>
        <span className={`mt-1 block font-semibold uppercase ${isLarge ? "text-[.64rem] tracking-[.2em]" : "text-[.57rem] tracking-[.19em]"} ${inverse ? "text-white/60" : "text-slate-500"}`}>
          Pharmaceutical Labs
        </span>
      </span>
    </Link>
  );
}
