"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { capabilityPlaceholders, company, servicePlaceholders } from "@/data/company";
import productData from "@/data/products.json";

type IconName = "arrow" | "chevron" | "menu" | "close" | "check" | "shield" | "document" | "flask" | "box" | "layers" | "search" | "mail" | "pin" | "clock" | "phone" | "spark";
type Product = { name: string; dosageForm: string; strength: string; packSize: string; category: string };

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      {name === "arrow" && <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>}
      {name === "chevron" && <path d="m8 10 4 4 4-4"/>}
      {name === "menu" && <><path d="M4 7h16M4 12h16M4 17h16"/></>}
      {name === "close" && <path d="m6 6 12 12M18 6 6 18"/>}
      {name === "check" && <path d="m5 12 4 4L19 6"/>}
      {name === "shield" && <><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>}
      {name === "document" && <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></>}
      {name === "flask" && <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8 15h8"/></>}
      {name === "box" && <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>}
      {name === "layers" && <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>}
      {name === "search" && <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>}
      {name === "mail" && <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>}
      {name === "pin" && <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>}
      {name === "clock" && <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>}
      {name === "phone" && <path d="M6.5 3h3L11 7l-2 1.5a15 15 0 0 0 6.5 6.5L17 13l4 1.5v3c0 1.9-1.6 3.5-3.5 3.5A14.5 14.5 0 0 1 3 6.5C3 4.6 4.6 3 6.5 3Z"/>}
      {name === "spark" && <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm6 12 .7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15Z"/>}
    </svg>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Renumed Pharmaceutical Labs home">
      <span className={`relative block h-10 w-11 shrink-0 overflow-hidden rounded-lg border ${inverse ? "border-white/20" : "border-navy/10"}`}>
        <Image src="/images/rpl-logo.jpg" alt="" width={63} height={57} className="h-full w-full object-cover" />
      </span>
      <span className="leading-none">
        <span className={`block text-[1.08rem] font-bold tracking-[-.02em] ${inverse ? "text-white" : "text-navy"}`}>REN<span className="text-cyan">U</span>MED</span>
        <span className={`mt-1 block text-[.57rem] font-semibold uppercase tracking-[.19em] ${inverse ? "text-white/60" : "text-slate-500"}`}>Pharmaceutical Labs</span>
      </span>
    </a>
  );
}

type MenuItem = { label: string; href: string; children?: ReadonlyArray<{ label: string; href: string }> };

const menuItems: ReadonlyArray<MenuItem> = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about", children: [
    { label: "Company Profile", href: "#about" },
    { label: "Mission & Vision", href: "#purpose" },
    { label: "Core Values", href: "#principles" },
    { label: "Company Information", href: "#company-information" },
  ]},
  { label: "Capabilities", href: "#capabilities", children: [
    { label: "Manufacturing Overview", href: "#capabilities" },
    { label: "Process Workflow", href: "#workflow" },
    { label: "Infrastructure", href: "#infrastructure" },
  ]},
  { label: "Products", href: "#products", children: [
    { label: "Product Catalogue", href: "#products" },
  ]},
  { label: "Quality", href: "#quality", children: [
    { label: "Quality Approach", href: "#quality" },
    { label: "Documentation & Traceability", href: "#quality-systems" },
  ]},
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact", children: [
    { label: "Business Enquiry", href: "#enquiry" },
    { label: "Contact Information", href: "#contact" },
  ]},
];

function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpenMenu(null); setMobileOpen(false); }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, []);

  const go = () => { setMobileOpen(false); setOpenMenu(null); };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Logo />
        <nav ref={navRef} className="hidden items-stretch self-stretch lg:flex" aria-label="Primary navigation">
          {menuItems.map((item) => (
            <div key={item.label} className="relative flex items-center" onMouseEnter={() => item.children && setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
              <a
                href={item.href}
                className="group flex h-full items-center gap-1.5 px-3 text-[.79rem] font-semibold text-slate-600 transition hover:text-petrol focus:text-petrol xl:px-4"
                aria-haspopup={item.children ? "menu" : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                onFocus={() => item.children && setOpenMenu(item.label)}
              >
                {item.label}
                {item.children && <Icon name="chevron" className={`h-3.5 w-3.5 transition ${openMenu === item.label ? "rotate-180" : ""}`} />}
                <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-cyan transition group-hover:scale-x-100" />
              </a>
              {item.children && openMenu === item.label && (
                <div role="menu" className="absolute left-2 top-[66px] w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-navy/10">
                  <div className="mb-1 px-3 py-2 text-[.62rem] font-bold uppercase tracking-[.16em] text-slate-400">{item.label}</div>
                  {item.children.map((child) => (
                    <a role="menuitem" key={child.label} href={child.href} onClick={() => setOpenMenu(null)} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-mist hover:text-petrol">
                      {child.label}<Icon name="arrow" className="h-4 w-4 text-cyan" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href="#enquiry" className="hidden items-center gap-2 rounded-xl bg-navy px-4 py-3 text-xs font-bold text-white transition hover:bg-petrol lg:flex">Business Enquiry <Icon name="arrow" className="h-4 w-4" /></a>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy lg:hidden" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>
      {mobileOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-200 bg-white px-5 pb-6 pt-3 lg:hidden">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-slate-100">
              <div className="flex items-center">
                <a href={item.href} onClick={go} className="flex-1 py-3.5 text-sm font-semibold text-navy">{item.label}</a>
                {item.children && <button type="button" className="p-3 text-petrol" aria-label={`Toggle ${item.label} menu`} aria-expanded={expanded.includes(item.label)} onClick={() => setExpanded((value) => value.includes(item.label) ? value.filter((x) => x !== item.label) : [...value, item.label])}><Icon name="chevron" className={`h-4 w-4 transition ${expanded.includes(item.label) ? "rotate-180" : ""}`} /></button>}
              </div>
              {item.children && expanded.includes(item.label) && <div className="mb-3 rounded-xl bg-mist p-2">{item.children.map((child) => <a key={child.label} href={child.href} onClick={go} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-white">{child.label}</a>)}</div>}
            </div>
          ))}
          <a href="#enquiry" onClick={go} className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white">Business Enquiry <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ kicker, title, body, dark = false }: { kicker: string; title: string; body?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <span className={`section-kicker ${dark ? "on-dark" : ""}`}>{kicker}</span>
      <h2 className={`display-face mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {body && <p className={`mt-5 text-base leading-7 ${dark ? "text-white/65" : "text-slate-600"}`}>{body}</p>}
    </div>
  );
}

function PlaceholderTag() {
  return <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-[.12em] text-amber-800">Confirmation pending</span>;
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-mist">
      <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
        <div className="relative z-10 animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-petrol/15 bg-white px-3 py-1.5 text-[.7rem] font-bold uppercase tracking-[.14em] text-petrol shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Purpose built for dependable partnerships</span>
          <h1 className="display-face mt-7 max-w-3xl text-[clamp(3.15rem,6vw,5.8rem)] font-semibold leading-[.94] text-navy">Quality-focused <span className="text-petrol">pharmaceutical</span> manufacturing.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Renumed Pharmaceutical Labs provides pharmaceutical manufacturing and related business services through a structured, quality-oriented approach.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#capabilities" className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white transition hover:bg-petrol">Explore our capabilities <Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-5 py-3.5 text-sm font-bold text-navy transition hover:border-petrol/40 hover:text-petrol">Contact our team</a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs text-slate-500"><Icon name="shield" className="h-5 w-5 text-petrol" /><span>No certification or regulatory claim is shown without verification.</span></div>
        </div>
        <div className="relative animate-rise-delay lg:h-[560px]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl shadow-navy/15 lg:h-full lg:aspect-auto">
            <Image src="/images/hero-manufacturing.png" alt="Technicians inspecting a pharmaceutical manufacturing line in a clean production area" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:right-6 sm:w-72">
            <div className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-petrol text-white"><Icon name="document" /></span><div><p className="text-xs font-bold uppercase tracking-[.12em] text-petrol">Documented approach</p><p className="mt-1 text-sm leading-5 text-slate-600">Clear process stages from incoming material to final review.</p></div></div>
          </div>
        </div>
      </div>
      <div className="border-y border-slate-200 bg-white/90">
        <div className="container-shell grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[['Company profile','Information pending confirmation'],['Certifications','Displayed only when verified'],['Business enquiries','Structured response process']].map(([a,b]) => <div key={a} className="px-5 py-5 first:pl-0 last:pr-0 sm:px-7"><p className="text-xs font-bold uppercase tracking-[.13em] text-navy">{a}</p><p className="mt-1 text-xs text-slate-500">{b}</p></div>)}
        </div>
      </div>
    </section>
  );
}

const principles = [
  { icon: "shield" as IconName, title: "Quality-focused processes", text: "A clear framework for inspection, controlled activity, review, and documented release decisions." },
  { icon: "layers" as IconName, title: "Reliable manufacturing", text: "A process-led approach designed around consistency, coordination, and practical production controls." },
  { icon: "spark" as IconName, title: "Customer-oriented service", text: "Clear communication and business support shaped around confirmed partner requirements." },
  { icon: "document" as IconName, title: "Documented operations", text: "Structured records help support visibility, review, traceability, and responsible follow-through." },
];

function About() {
  return (
    <>
      <section id="about" className="bg-white py-24 sm:py-32">
        <div className="container-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading kicker="Company overview" title="Built around process. Focused on trust." body="Renumed Pharmaceutical Labs is presented as a pharmaceutical manufacturing organization serving business and institutional requirements. Specific company history, leadership, locations, approvals, and operating credentials remain clearly marked until verified." />
          <div id="principles" className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => <article key={item.title} className="reveal-card rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol"><Icon name={item.icon} /></span><span className="text-xs font-semibold text-slate-300">0{index + 1}</span></div><h3 className="mt-6 text-lg font-bold text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article>)}
          </div>
        </div>
      </section>
      <section id="purpose" className="bg-mist py-24">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["Our mission", "To support pharmaceutical business needs through disciplined, transparent, and quality-oriented manufacturing practices."],
            ["Our vision", "To build trusted, long-term relationships through responsible operations and dependable business support."],
            ["Our values", "Quality awareness, accountability, documentation, responsiveness, and continuous improvement."],
          ].map(([title,text], index) => <article key={title} className={`rounded-3xl p-8 ${index === 0 ? "bg-navy text-white" : "border border-slate-200 bg-white text-navy"}`}><span className={`text-xs font-bold uppercase tracking-[.15em] ${index === 0 ? "text-cyan" : "text-petrol"}`}>0{index + 1}</span><h3 className="display-face mt-14 text-3xl font-semibold">{title}</h3><p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/65" : "text-slate-600"}`}>{text}</p></article>)}
        </div>
        <div id="company-information" className="container-shell mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div><p className="font-bold text-navy">Company profile details require confirmation</p><p className="mt-1 text-sm text-slate-600">Establishment year, location, leadership, management message, and verified milestones have not been supplied.</p></div><div className="mt-4 shrink-0 sm:mt-0"><PlaceholderTag /></div>
        </div>
      </section>
    </>
  );
}

const workflow = ["Raw-material receipt", "Quality inspection", "Production", "In-process checks", "Packing", "Final quality review", "Dispatch"];

function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <div className="container-shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Manufacturing capabilities" title="A structured view of potential production scope." body="The categories below are editable placeholders—not claims. Publish them only after the company confirms the relevant manufacturing capability." dark />
          <PlaceholderTag />
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityPlaceholders.map((item) => <article key={item.name} className="group rounded-2xl border border-white/10 bg-white/[.055] p-6 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[.08]"><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10 text-xs font-bold tracking-[.12em] text-cyan">{item.code}</span><Icon name="arrow" className="h-5 w-5 text-white/25 transition group-hover:text-cyan" /></div><h3 className="mt-8 text-xl font-bold">{item.name}</h3><p className="mt-2 text-xs leading-5 text-white/50">{item.note}</p></article>)}
        </div>
        <div id="workflow" className="mt-20 border-t border-white/10 pt-14">
          <p className="section-kicker on-dark">General workflow</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {workflow.map((step,index) => <div key={step} className="relative rounded-xl border border-white/10 bg-white/[.045] p-4"><span className="text-[.65rem] font-bold text-cyan">{String(index + 1).padStart(2,"0")}</span><p className="mt-8 text-sm font-semibold leading-5 text-white/85">{step}</p>{index < workflow.length - 1 && <span className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 place-items-center rounded-full bg-cyan text-navy lg:grid">›</span>}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-white py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Infrastructure" title="Purposeful spaces for controlled work." body="A visual framework for presenting manufacturing, laboratory, warehousing, packaging, utility, and support areas once each facility detail is confirmed." />
          <p className="max-w-sm text-xs leading-5 text-slate-500">Images are original illustrative visuals and should be replaced with verified photographs if they do not depict the company&apos;s actual facility.</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <figure className="group relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-200">
            <Image src="/images/quality-laboratory.png" alt="Illustrative view of an analyst operating equipment in a pharmaceutical quality-control laboratory" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur"><span className="text-[.65rem] font-bold uppercase tracking-[.15em] text-cyan">Illustrative image</span><p className="mt-1 font-bold">Quality-control laboratory</p><p className="mt-1 text-xs text-white/60">Actual laboratory details to be confirmed.</p></figcaption>
          </figure>
          <figure className="group relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-200">
            <Image src="/images/packaging-line.png" alt="Illustrative view of a clean pharmaceutical packaging line with unbranded cartons" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur"><span className="text-[.65rem] font-bold uppercase tracking-[.15em] text-cyan">Illustrative image</span><p className="mt-1 font-bold">Packaging facilities</p><p className="mt-1 text-xs text-white/60">Line configuration and equipment details to be confirmed.</p></figcaption>
          </figure>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{["Manufacturing areas", "QC laboratory", "Warehousing", "Packaging lines", "Utility systems"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-4 text-sm font-semibold text-navy"><span className="h-2 w-2 rounded-full bg-cyan" />{item}</div>)}</div>
      </div>
    </section>
  );
}

function Products() {
  const products = productData as Product[];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const categories = useMemo(() => ["All categories", ...Array.from(new Set(products.map((p) => p.category)))], [products]);
  const filtered = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All categories" || product.category === category;
    const haystack = Object.values(product).join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [products, category, query]);

  return (
    <section id="products" className="bg-mist py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading kicker="Product catalogue" title="Approved product data, presented clearly." body="The catalogue reads from a separate editable JSON file. It will remain in a professional empty state until verified product information is supplied." />
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-5 shadow-lift sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1"><span className="sr-only">Search products</span><Icon name="search" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"/><input value={query} onChange={(e) => setQuery(e.target.value)} className="field pl-12" placeholder="Search approved products" /></label>
            <label><span className="sr-only">Filter by category</span><select className="field min-w-56" value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          {filtered.length > 0 ? <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <article key={`${product.name}-${product.strength}`} className="rounded-2xl border border-slate-200 p-5"><span className="text-xs font-bold uppercase tracking-wider text-petrol">{product.category}</span><h3 className="mt-3 text-lg font-bold text-navy">{product.name}</h3><dl className="mt-4 space-y-2 text-sm text-slate-600"><div className="flex justify-between"><dt>Dosage form</dt><dd className="font-semibold text-navy">{product.dosageForm}</dd></div><div className="flex justify-between"><dt>Strength</dt><dd className="font-semibold text-navy">{product.strength}</dd></div><div className="flex justify-between"><dt>Pack size</dt><dd className="font-semibold text-navy">{product.packSize}</dd></div></dl><a href="#enquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-petrol">Enquire <Icon name="arrow" className="h-4 w-4" /></a></article>)}</div> : <div className="mt-6 grid min-h-[330px] place-items-center rounded-2xl border border-dashed border-slate-300 bg-mist/60 p-8 text-center"><div><span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-petrol shadow-sm"><Icon name="box" className="h-7 w-7" /></span><h3 className="mt-5 text-xl font-bold text-navy">Approved catalogue coming soon</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">No verified product records are available yet. Add approved information to the product data file to activate search, filters, and product cards.</p><a href="#enquiry" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white">Discuss a requirement <Icon name="arrow" className="h-4 w-4"/></a></div></div>}
        </div>
        <p className="mt-5 text-xs text-slate-500">Product availability and regulatory status may vary by market.</p>
      </div>
    </section>
  );
}

const qualityItems = [
  ["Raw-material inspection", "Review of incoming material against defined requirements before use."],
  ["In-process checks", "Planned observations and checks during relevant production stages."],
  ["Finished-product evaluation", "Review against applicable, approved product specifications."],
  ["Batch documentation", "Structured records supporting review and accountable decisions."],
  ["Storage & inventory controls", "Organized handling practices appropriate to material status."],
  ["Traceability", "Clear movement and record links across relevant process stages."],
  ["Packaging inspection", "Checks focused on identity, presentation, and pack integrity."],
  ["Staff training", "Role-relevant instruction with appropriate documentation."],
] as const;

function Quality() {
  return (
    <section id="quality" className="bg-white py-24 sm:py-32">
      <div className="container-shell grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeading kicker="Quality approach" title="Quality is a system of connected decisions." body="Our quality content describes an operating approach without asserting certifications, approvals, or specifications that have not been provided." /><div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="text-sm font-bold text-navy">Certification status</p><p className="mt-2 text-xs leading-5 text-slate-600">GMP, WHO-GMP, ISO, and regulatory approval names are intentionally omitted pending verified documentation.</p></div></div>
        <div id="quality-systems" className="grid gap-x-8 sm:grid-cols-2">
          {qualityItems.map(([title,text], index) => <article key={title} className="marquee-line py-7"><div className="flex gap-5"><span className="mt-1 text-xs font-bold text-cyan">{String(index + 1).padStart(2,"0")}</span><div><h3 className="font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></div></article>)}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-mist py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading kicker="Services" title="Flexible support for pharmaceutical business needs." body="The following service areas are editable placeholders. Each one should be validated internally before the final website is published." /><PlaceholderTag /></div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicePlaceholders.map((service,index) => <article key={service} className="reveal-card flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol"><Icon name={index % 2 === 0 ? "layers" : "document"}/></span><span className="text-[.62rem] font-bold uppercase tracking-[.12em] text-amber-700">Pending</span></div><h3 className="mt-auto pt-8 text-lg font-bold text-navy">{service}</h3><a href="#enquiry" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-petrol">Discuss this service <Icon name="arrow" className="h-4 w-4"/></a></article>)}
        </div>
      </div>
    </section>
  );
}

type FormStatus = { kind: "idle" | "loading" | "success" | "error"; message: string };

function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus({ kind: "loading", message: "Sending your enquiry…" });
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, consent: data.consent === "on" }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to send enquiry.");
      setStatus({ kind: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to send enquiry." });
    }
  }
  const input = "field mt-2";
  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-ink shadow-2xl shadow-black/10 sm:p-8" aria-label="Business enquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-bold text-navy">Full name *<input name="fullName" required maxLength={100} autoComplete="name" className={input} placeholder="Your full name" /></label>
        <label className="text-xs font-bold text-navy">Company name *<input name="companyName" required maxLength={120} autoComplete="organization" className={input} placeholder="Organization" /></label>
        <label className="text-xs font-bold text-navy">Business email *<input name="email" required type="email" maxLength={160} autoComplete="email" className={input} placeholder="name@company.com" /></label>
        <label className="text-xs font-bold text-navy">Phone number *<input name="phone" required type="tel" pattern="[+()0-9 -]{7,20}" autoComplete="tel" className={input} placeholder="+00 00000 00000" /></label>
        <label className="text-xs font-bold text-navy">Country / state *<input name="location" required maxLength={120} autoComplete="country-name" className={input} placeholder="Location" /></label>
        <label className="text-xs font-bold text-navy">Enquiry type *<select name="enquiryType" required defaultValue="" className={input}><option value="" disabled>Select enquiry type</option><option>Manufacturing enquiry</option><option>Product enquiry</option><option>Packaging enquiry</option><option>Partnership opportunity</option><option>General business enquiry</option></select></label>
        <label className="text-xs font-bold text-navy sm:col-span-2">Product or service of interest *<input name="interest" required maxLength={160} className={input} placeholder="Tell us what you are looking for" /></label>
        <label className="text-xs font-bold text-navy sm:col-span-2">Message *<textarea name="message" required minLength={20} maxLength={1500} rows={5} className={`${input} resize-y`} placeholder="Share your business requirement, target market, and expected next step." /></label>
        <label className="sr-only" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600"><input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-petrol" />I consent to Renumed Pharmaceutical Labs using this information to respond to my business enquiry. *</label>
      <button disabled={status.kind === "loading"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white transition hover:bg-petrol disabled:cursor-wait disabled:opacity-70">{status.kind === "loading" ? "Sending…" : "Submit business enquiry"}<Icon name="arrow" className="h-4 w-4" /></button>
      {status.kind !== "idle" && <div role="status" aria-live="polite" className={`mt-4 rounded-xl px-4 py-3 text-sm ${status.kind === "success" ? "bg-emerald-50 text-emerald-800" : status.kind === "error" ? "bg-rose-50 text-rose-800" : "bg-mist text-slate-600"}`}>{status.message}</div>}
      <p className="mt-4 text-center text-[.68rem] leading-5 text-slate-400">Protected by server-side validation, a spam honeypot, and request throttling.</p>
    </form>
  );
}

function Contact() {
  return (
    <>
      <section id="enquiry" className="relative overflow-hidden bg-petrol py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-30 grid-pattern" aria-hidden="true" />
        <div className="container-shell relative grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div><SectionHeading kicker="Business enquiry" title="Start a focused conversation with our team." body="Tell us about your product, manufacturing, packaging, or partnership requirement. We will use the details only to understand and respond to your enquiry." dark /><div className="mt-10 space-y-5">{["Structured requirement capture", "Server-side input validation", "No credentials exposed in the browser"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/75"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-cyan"><Icon name="check" className="h-4 w-4" /></span>{item}</div>)}</div><p className="mt-10 max-w-sm border-l-2 border-cyan pl-4 text-xs leading-5 text-white/55">Form delivery requires an approved secure endpoint before launch. Until configured, the site will not store or claim to send submitted information.</p></div>
          <EnquiryForm />
        </div>
      </section>
      <section id="contact" className="bg-white py-24 sm:py-32">
        <div className="container-shell">
          <SectionHeading kicker="Contact" title="Company contact information." body="All contact details below are deliberately marked for confirmation because verified company information was not provided." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["pin" as IconName, "Registered office", company.status.registeredOffice],
              ["pin" as IconName, "Manufacturing unit", company.status.manufacturingUnit],
              ["phone" as IconName, "Phone & email", `${company.status.phone} · ${company.status.email}`],
              ["clock" as IconName, "Business hours", company.status.businessHours],
            ].map(([icon,title,text]) => <article key={title} className="rounded-2xl border border-slate-200 p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol"><Icon name={icon as IconName}/></span><h3 className="mt-6 text-sm font-bold text-navy">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></article>)}
          </div>
          <div className="mt-6 grid min-h-64 place-items-center rounded-3xl border border-dashed border-slate-300 bg-mist text-center"><div><Icon name="pin" className="mx-auto h-7 w-7 text-petrol"/><p className="mt-3 font-bold text-navy">Map location pending confirmation</p><p className="mt-1 text-xs text-slate-500">A verified map embed can be added once the location is supplied.</p></div></div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white">
      <div className="container-shell grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.8fr_1fr]">
        <div><Logo inverse/><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">{company.description}</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">Navigate</p><div className="mt-5 space-y-3">{[["About","#about"],["Capabilities","#capabilities"],["Products","#products"],["Quality","#quality"]].map(([label,href]) => <a key={label} href={href} className="block text-sm text-white/55 hover:text-white">{label}</a>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">Business</p><div className="mt-5 space-y-3">{[["Services","#services"],["Infrastructure","#infrastructure"],["Business enquiry","#enquiry"],["Contact","#contact"]].map(([label,href]) => <a key={label} href={href} className="block text-sm text-white/55 hover:text-white">{label}</a>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">Contact status</p><p className="mt-5 text-sm leading-6 text-white/55">Address, phone, email, business hours, and official social profiles are awaiting company confirmation.</p></div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-6 text-[.68rem] text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Renumed Pharmaceutical Labs. All rights reserved.</p><div className="flex flex-wrap gap-5"><a href="/privacy" className="hover:text-white">Privacy Policy</a><a href="/terms" className="hover:text-white">Terms of Use</a><a href="/disclaimer" className="hover:text-white">Product Disclaimer</a></div></div>
      </div>
    </footer>
  );
}

export function CorporateSite() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Capabilities />
        <Infrastructure />
        <Products />
        <Quality />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
