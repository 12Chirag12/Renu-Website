import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-mist px-4 py-24 text-center">
      <div className="container-narrow">
        <span className="inline-block rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-petrol">
          404 Error
        </span>
        <h1 className="display-face mt-4 text-4xl font-bold text-navy sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-petrol"
          >
            Return Home <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-navy hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
