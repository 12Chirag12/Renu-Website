"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { WORLD_PATHS } from "./worldPaths";

type View = [number, number, number, number];
type Tab = "world" | "focus";

interface City {
  n: string;
  x: number;
  y: number;
  c: string;
  side: number;
}

const CITIES: City[] = [
  { n: "Freetown", x: 463.7, y: 269.7, c: "Sierra Leone", side: -1 },
  { n: "Abuja", x: 520.6, y: 267.9, c: "Nigeria", side: -1 },
  { n: "N'Djamena", x: 541.2, y: 258.1, c: "Chad", side: 1 },
  { n: "Niamey", x: 505.8, y: 253.7, c: "Niger", side: -1 },
  { n: "Luanda", x: 536.3, y: 325, c: "Angola", side: -1 },
  { n: "Brazzaville", x: 542.1, y: 310.4, c: "Congo", side: 1 },
];

const ROUTES: [number, number][] = [
  [0, 3],
  [3, 1],
  [1, 2],
  [1, 5],
  [2, 5],
  [5, 4],
  [0, 1],
];

const HIGHLIGHTED: { name: string; d: string }[] = [
  {
    name: "Chad",
    d: "M564.5,234.3L565.1,247L562.7,246.7L561.5,249.1L560.9,251.1L561.5,251.8L560.6,252.8L560.9,254.1L560.2,255.4L560,256.6L561,256.4L561.6,257.7L561.6,259.5L562.7,260.5L562.6,261.2L560.9,261.8L559.5,263.1L557.6,266.6L555.1,268L552.4,267.8L551.6,268.1L551.9,269.3L550.5,270.4L549.4,271.6L545.9,272.8L545.2,272.1L544.8,272L544.3,272.9L542,273.1L542.4,272.2L541.5,270L541.1,268.7L539.9,268.2L538.3,266.3L538.9,264.8L540.1,265.1L540.9,264.9L542.4,264.9L540.9,262L541,259.9L540.8,257.8L539.6,255.8L539.9,254.2L538.1,254.2L538.1,252.1L537,250.9L538.1,246.7L541.5,243.7L541.5,239.5L542.4,233L543,231.7L541.8,230.6L541.7,229.5L540.7,228.7L539.9,223.7L542.6,222L553.5,228.1Z",
  },
  {
    name: "Niger",
    d: "M539.9,223.7L540.7,228.7L541.7,229.5L541.8,230.6L543,231.7L542.4,233L541.5,239.5L541.5,243.7L538.1,246.7L537,250.9L538.1,252.1L538.1,254.2L539.9,254.2L539.6,255.8L538.9,255.9L538.8,257L538.3,257L536.4,253.5L535.7,253.4L533.6,255.2L531.5,254.3L530,254.1L529.2,254.5L527.6,254.4L526,255.8L524.7,255.9L521.3,254.2L520,255L518.6,254.9L517.6,253.7L514.9,252.5L511.9,252.9L511.2,253.6L510.9,255.4L510.1,256.7L509.9,259.6L507.8,257.7L506.8,257.8L505.9,258.7L506,256.5L502.8,255.8L502.7,254.2L501.2,252.1L500.8,250.7L501,249.1L502.8,249L503.8,247.9L507.5,247.6L509.9,247.1L510.1,245.1L511.6,243L511.6,235.6L515.4,234.2L523.1,227.9L532.2,221.8L536.5,223.2L538,224.9Z",
  },
  {
    name: "Nigeria",
    d: "M507.4,276.8L507.6,271.7L507.5,269.6L508,267.6L508.8,266.7L510.2,264.7L509.9,263.8L510.4,262.5L509.8,260.6L509.9,259.6L510.1,256.7L510.9,255.4L511.2,253.6L511.9,252.9L514.9,252.5L517.6,253.7L518.6,254.9L520,255L521.3,254.2L524.7,255.9L526,255.8L527.6,254.4L529.2,254.5L530,254.1L531.5,254.3L533.6,255.2L535.7,253.4L536.4,253.5L538.3,257L538.8,257L539.9,258.2L539.6,258.8L539.5,259.9L537.2,262.3L536.5,264.4L536.1,266L535.5,266.7L535,269L533.6,270.3L533.2,271.9L532.5,273.2L532.3,274.5L530.4,275.6L528.9,274.3L527.8,274.3L526.2,276.2L525.4,276.2L524.1,279.3L523.4,281.6L520.5,282.7L519.5,282.5L518.4,283.3L516.2,283.2L514.8,281.2L513.9,278.9L511.9,276.8L509.8,276.8Z",
  },
  {
    name: "Sierra Leone",
    d: "M463.6,268.4L465.1,267L465.4,266.1L465.9,265.4L466.7,265.3L467.3,264.7L469.5,264.7L470.3,265.9L470.8,267.2L470.8,268.1L471.2,269L471.1,270.2L471.9,270L470.6,271.5L469.4,273.2L469.2,274.1L468.5,275.1L467.8,274.9L465.8,273.6L464.4,271.9L464,270.7Z",
  },
  {
    name: "Congo",
    d: "M550.8,285.6L550.7,287.5L549.8,289.2L549.3,291.2L549,294L549.1,295.9L548.7,297L548.6,298.1L548.3,299.1L546.5,300.7L545.2,302.3L544,305.4L544.1,308L543.4,309.1L541.8,310.6L540.1,312.6L539.1,312L538.9,311.1L537.4,311.1L536.5,312.3L535.8,312L534.7,310.9L533.9,311.5L532.8,312.8L530.5,309.5L532.7,307.7L531.6,305.6L532.6,304.8L534.4,304.4L534.6,303L536.1,304.5L538.5,304.6L539.4,303.1L539.7,301L539.4,298.5L538.1,296.6L539.3,293L538.6,292.3L536.6,292.6L535.8,290.9L536,289.5L539.5,289.7L541.7,290.5L543.9,291.3L544.1,289.5L545.5,286.6L547.2,284.9L549,285.4Z",
  },
  {
    name: "Angola",
    d: "M535.8,312L534.8,312.7L534.3,313.5L534.2,314.9L533.5,315.2L532.8,312.8L533.9,311.5L534.7,310.9ZM533.9,316.2L535,315.8L535.8,315.8L536.8,315.5L544.9,315.5L545.6,317.9L546.3,319.8L547,320.8L548,322.5L549.8,322.2L550.7,321.8L552.2,322.2L552.7,321.4L553.4,319.6L555.1,319.5L555.2,318.9L556.6,318.9L556.4,320L559.7,320L559.7,322L560.3,323.3L559.8,325.2L560,327.1L560.9,328.3L560.7,332.1L561.4,331.8L562.6,331.9L564.3,331.4L565.5,331.6L565.8,332.6L565.4,334.2L565.9,335.7L565.5,336.9L565.7,338L560,337.9L559.6,348.1L561.3,350.7L563,352.7L558,354L551.5,353.6L549.6,352L538.6,352.2L538.2,352.4L536.6,350.9L534.8,350.8L533.2,351.4L531.9,352L531.7,350L532.1,347.2L533.1,344.2L533.2,342.9L534.2,340L534.8,338.7L536.4,336.6L537.3,335.2L537.6,332.8L537.5,331L536.7,329.8L536,327.9L535.3,326L535.5,325.3L536.3,324.1L535.5,321L535,318.9L533.6,316.8Z",
  },
];

const UNIQUE_COUNTRIES = [...new Set(CITIES.map((c) => c.c))];
const WORLD_VIEW: View = [0, 0, 1000, 520];
const INITIAL_FOCUS_VIEW: View = [345.3, 199.8, 338.8, 176.2];
const DEFAULT_HI_BOX: View = [441.6, 199.8, 146.3, 176.2];

const CSS = `
.africa-map-scope {
  --blue: #2f6bf0;
  --blue-d: #1f4fc4;
  --ink: #0f1b3d;
  --ghost: #dce6f5;
  --ghost-line: #fff;
  --card-a: #fff;
  --card-b: #fff;
  --dot: #c4d4ee;
  --page: #fff;
  --chip: #fff;
  --muted: #5b6784;
  width: 100%;
}
.africa-map-scope * {
  box-sizing: border-box;
}
.africa-map-scope .wrap {
  width: 100%;
  max-width: 100%;
  margin: 0;
}
.africa-map-scope .card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(145deg, #f7faff 0%, #eef5ff 55%, #e8f1ff 100%);
  border: 1px solid #dfe9f8;
  aspect-ratio: 1000/580;
  box-shadow: 0 18px 40px -24px rgba(47, 107, 240, 0.35);
}
.africa-map-scope .card:before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--dot) 1.2px, transparent 1.3px);
  background-size: 26px 26px;
  opacity: 0.55;
  pointer-events: none;
}
.africa-map-scope svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.africa-map-scope .base path {
  fill: var(--ghost);
  stroke: var(--ghost-line);
  stroke-width: 0.5;
  vector-effect: non-scaling-stroke;
}
.africa-map-scope .c {
  filter: drop-shadow(0 2px 3px rgba(31, 79, 196, 0.25));
  fill: var(--blue);
  stroke: var(--ghost-line);
  stroke-width: 0.6;
  vector-effect: non-scaling-stroke;
  cursor: pointer;
  transition: fill 0.2s;
  transform-box: fill-box;
  transform-origin: center;
  animation: pop 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.africa-map-scope .c:hover,
.africa-map-scope .c.on {
  fill: #1639a0;
}
.africa-map-scope .pin.on text {
  fill: #030818;
}
.africa-map-scope .pin circle {
  transition: stroke 0.2s;
}
.africa-map-scope .pin.on circle {
  stroke: #030818;
}
@keyframes pop {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.africa-map-scope .arc {
  fill: none;
  stroke: var(--blue);
  stroke-opacity: 0.85;
  stroke-width: 1.8;
  stroke-dasharray: 3 4;
  vector-effect: non-scaling-stroke;
  animation: flow 2.4s linear infinite;
}
@keyframes flow {
  to {
    stroke-dashoffset: -14;
  }
}
.africa-map-scope .pin circle {
  fill: #fff;
  stroke: var(--ink);
  stroke-width: 1.6;
  vector-effect: non-scaling-stroke;
}
.africa-map-scope .pin text {
  font-weight: 700;
  fill: #4a6199;
  transition: fill 0.2s;
  paint-order: stroke;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linejoin: round;
  pointer-events: none;
}
.africa-map-scope .tip {
  position: absolute;
  pointer-events: none;
  background: var(--chip);
  color: var(--ink);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(15, 27, 61, 0.2);
  transform: translate(-50%, -130%);
  transition: opacity 0.15s;
  white-space: nowrap;
  z-index: 20;
}
.africa-map-scope .tabs {
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  gap: 4px;
  background: var(--chip);
  padding: 4px;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(15, 27, 61, 0.12);
  z-index: 10;
}
.africa-map-scope .tabs button {
  border: 0;
  background: none;
  font: 600 13px inherit;
  font-family: inherit;
  color: var(--muted);
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.africa-map-scope .tabs button[aria-pressed="true"] {
  background: var(--blue);
  color: #fff;
}
.africa-map-scope .tabs button:focus-visible {
  outline: 2px solid var(--blue-d);
  outline-offset: 2px;
}
.africa-map-scope .list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.africa-map-scope .list span {
  background: var(--chip);
  border: 1px solid var(--dot);
  padding: 6px 13px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;
}
.africa-map-scope .list span:before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--blue);
  margin-right: 8px;
  transition: transform 0.2s ease;
}
.africa-map-scope .list span:hover,
.africa-map-scope .list span.active-pill {
  border-color: var(--blue);
  background: #f0f5ff;
  color: var(--blue-d);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(47, 107, 240, 0.12);
}
.africa-map-scope .list span:hover:before,
.africa-map-scope .list span.active-pill:before {
  transform: scale(1.3);
}
@media (prefers-reduced-motion: reduce) {
  .africa-map-scope .c,
  .africa-map-scope .arc {
    animation: none;
  }
}
@media (max-width: 600px) {
  .africa-map-scope .card {
    aspect-ratio: 4/3;
  }
}
`;

export function AfricaMap() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hiRef = useRef<SVGGElement>(null);
  const rafRef = useRef<number>(0);
  const curRef = useRef<View>(INITIAL_FOCUS_VIEW);
  const hiBoxRef = useRef<View>(DEFAULT_HI_BOX);
  const tabRef = useRef<Tab>("focus");

  const [view, setView] = useState<View>(INITIAL_FOCUS_VIEW);
  const [tab, setTab] = useState<Tab>("focus");
  const [cardWidth, setCardWidth] = useState<number>(1000);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [tip, setTip] = useState({ text: "", left: 0, top: 0, opacity: 0 });

  const arcs = useMemo(
    () =>
      ROUTES.map(([a, b]) => {
        const A = CITIES[a];
        const B = CITIES[b];
        const mx = (A.x + B.x) / 2;
        const my = (A.y + B.y) / 2 - Math.hypot(B.x - A.x, B.y - A.y) * 0.25;
        return `M${A.x},${A.y} Q${mx},${my} ${B.x},${B.y}`;
      }),
    []
  );

  const fit = useCallback((v: View): View => {
    if (!cardRef.current) return v;
    const clientWidth = cardRef.current.clientWidth || 1000;
    const clientHeight = cardRef.current.clientHeight || 580;
    const r = clientWidth / clientHeight;
    let [x, y, w, h] = v;
    if (w / h < r) {
      const nw = h * r;
      x -= (nw - w) / 2;
      w = nw;
    } else {
      const nh = w / r;
      y -= (nh - h) / 2;
      h = nh;
    }
    return [x, y, w, h];
  }, []);

  const apply = useCallback((v: View) => {
    curRef.current = v;
    setView(v);
  }, []);

  const go = useCallback(
    (name: Tab) => {
      tabRef.current = name;
      setTab(name);
      if (cardRef.current) {
        setCardWidth(cardRef.current.clientWidth || 1000);
      }
      const to = name === "focus" ? fit(hiBoxRef.current) : fit(WORLD_VIEW);
      const from = curRef.current.slice() as View;
      const t0 = performance.now();
      const D = 900;
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion:reduce)").matches;
      cancelAnimationFrame(rafRef.current);
      const step = (t: number) => {
        let p = reduce ? 1 : Math.min(1, (t - t0) / D);
        p = 1 - Math.pow(1 - p, 3);
        const nextView = from.map((f, i) => f + (to[i] - f) * p) as View;
        apply(nextView);
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };
      step(t0);
    },
    [apply, fit]
  );

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth || 1000);
    }
    if (hiRef.current && cardRef.current) {
      try {
        const b = hiRef.current.getBBox();
        const pad = 22;
        hiBoxRef.current = [b.x - pad, b.y - pad, b.width + 2 * pad, b.height + 2 * pad];
        apply(fit(hiBoxRef.current));
      } catch {
        apply(fit(DEFAULT_HI_BOX));
      }
    }
    const onResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.clientWidth || 1000);
      }
      go(tabRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [apply, fit, go]);

  // scale factor for pins/labels
  const k = (view[2] / 1000) * (1000 / cardWidth);

  return (
    <div className="africa-map-scope">
      <style>{CSS}</style>
      <div className="wrap">
        <div className="card" id="card" ref={cardRef}>
          <svg
            id="svg"
            viewBox={view.join(" ")}
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Map with Congo, Angola, Sierra Leone, Chad, Niger and Nigeria highlighted"
          >
            <g className="base">
              {WORLD_PATHS.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
            <g id="arcs">
              {arcs.map((d, i) => (
                <path key={i} className="arc" d={d} />
              ))}
            </g>
            <g id="hi" ref={hiRef}>
              {HIGHLIGHTED.map((p) => (
                <path
                  key={p.name}
                  className={"c" + (activeCountry === p.name ? " on" : "")}
                  data-name={p.name}
                  d={p.d}
                  onMouseMove={(e) => {
                    if (!cardRef.current) return;
                    const r = cardRef.current.getBoundingClientRect();
                    setTip({
                      text: p.name,
                      left: e.clientX - r.left,
                      top: e.clientY - r.top,
                      opacity: 1,
                    });
                  }}
                  onMouseEnter={() => setActiveCountry(p.name)}
                  onMouseLeave={() => {
                    setTip((t) => ({ ...t, opacity: 0 }));
                    setActiveCountry(null);
                  }}
                />
              ))}
            </g>
            <g id="pins">
              {CITIES.map((c) => (
                <g
                  key={c.n}
                  className={"pin" + (activeCountry === c.c ? " on" : "")}
                  data-c={c.c}
                >
                  <circle cx={c.x} cy={c.y} r={5 * k} />
                  <text
                    x={c.x}
                    y={c.y}
                    dx={c.side * (10 * k)}
                    dy={c.side ? 5 * k : -11 * k}
                    textAnchor={c.side < 0 ? "end" : c.side > 0 ? "start" : "middle"}
                    style={{ fontSize: 14 * k + "px", strokeWidth: 5 * k + "px" }}
                  >
                    {c.c}
                  </text>
                </g>
              ))}
            </g>
          </svg>
          <div className="tabs">
            {(["world", "focus"] as Tab[]).map((v) => (
              <button
                key={v}
                data-v={v}
                aria-pressed={tab === v}
                onClick={() => go(v)}
              >
                {v === "world" ? "World" : "Focus"}
              </button>
            ))}
          </div>
          <div
            className="tip"
            id="tip"
            style={{
              left: tip.left,
              top: tip.top,
              opacity: tip.opacity,
              display: tip.opacity > 0 ? "block" : "none",
            }}
          >
            {tip.text}
          </div>
        </div>
        <div className="list" id="list">
          {UNIQUE_COUNTRIES.map((n) => (
            <span
              key={n}
              className={activeCountry === n ? "active-pill" : ""}
              onMouseEnter={() => setActiveCountry(n)}
              onMouseLeave={() => setActiveCountry(null)}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AfricaMap;
