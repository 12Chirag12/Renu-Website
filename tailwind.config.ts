import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071a2b",
        navy: { DEFAULT: "#082d4f", light: "#0e3d6b" },
        petrol: { DEFAULT: "#086b78", light: "#0a8a9a" },
        cyan: { DEFAULT: "#19b6cf", light: "#7fe4ed", muted: "rgba(25,182,207,.12)" },
        mist: "#f2f7f9",
        slate: {
          50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1",
          400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155",
          800: "#1e293b", 900: "#0f172a",
        },
      },
      fontFamily: {
        display: ['"Segoe UI Variable Display"', '"Segoe UI"', 'Inter', 'Arial', 'sans-serif'],
        body: ['"Segoe UI Variable Text"', '"Segoe UI"', 'Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        lift: "0 20px 50px -30px rgba(7, 42, 68, .32)",
        "lift-lg": "0 28px 70px -30px rgba(7, 42, 68, .45)",
        card: "0 4px 24px -8px rgba(7, 42, 68, .12)",
        glow: "0 0 40px -12px rgba(25, 182, 207, .35)",
      },
      animation: {
        rise: "rise .7s cubic-bezier(.22,1,.36,1) both",
        "rise-delay": "rise .7s .12s cubic-bezier(.22,1,.36,1) both",
        "fade-in": "fadeIn .5s ease both",
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
    },
  },
  plugins: [],
} satisfies Config;
