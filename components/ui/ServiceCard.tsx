import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export function ServiceCard({
  icon,
  title,
  description,
  index,
  href = "/contact",
  linkText = "Enquire",
}: {
  icon: IconName;
  title: string;
  description: string;
  index?: number;
  href?: string;
  linkText?: string;
}) {
  return (
    <article className="reveal-card group flex min-h-[13rem] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-petrol transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan/15 group-hover:text-petrol">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        {index !== undefined && (
          <span className="text-xs font-semibold text-slate-300 transition-colors group-hover:text-cyan">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-auto pt-6 text-lg font-bold text-navy transition-colors group-hover:text-petrol">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <Link href={href} className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-petrol transition group-hover:translate-x-1 group-hover:text-navy">
        {linkText} <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </article>
  );
}
