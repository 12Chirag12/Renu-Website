"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import productData from "@/data/products.json";

type Product = {
  name: string;
  dosageForm: string;
  strength: string;
  packSize: string;
  category: string;
};

export function ProductCatalogue() {
  const products = productData as Product[];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");

  const categories = useMemo(() => {
    const fromData = Array.from(new Set(products.map((p) => p.category)));
    const merged = Array.from(new Set(["Tablets", "Capsules", ...fromData]));
    return ["All categories", ...merged];
  }, [products]);

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = category === "All categories" || product.category === category;
        const haystack = Object.values(product).join(" ").toLowerCase();
        return matchesCategory && haystack.includes(query.toLowerCase());
      }),
    [products, category, query]
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lift sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search products</span>
          <Icon name="search" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="field pl-12"
            placeholder="Search approved products"
          />
        </label>
        <label>
          <span className="sr-only">Filter by category</span>
          <select
            className="field min-w-56"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <article
              key={`${product.name}-${product.strength}`}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-petrol">{product.category}</span>
              <h3 className="mt-3 text-lg font-bold text-navy">{product.name}</h3>
              <dl className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <dt>Dosage form</dt>
                  <dd className="font-semibold text-navy">{product.dosageForm}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Strength</dt>
                  <dd className="font-semibold text-navy">{product.strength}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Pack size</dt>
                  <dd className="font-semibold text-navy">{product.packSize}</dd>
                </div>
              </dl>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-petrol">
                Enquire <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid min-h-[330px] place-items-center rounded-2xl border border-dashed border-slate-300 bg-mist/60 p-8 text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-petrol shadow-sm">
              <Icon name="box" className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">Approved catalogue coming soon</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              No verified product records are available yet. Add approved information to the product data file to
              activate search, filters, and product cards.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white"
            >
              Discuss a requirement <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
