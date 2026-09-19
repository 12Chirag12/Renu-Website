import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#071a2b", navy: "#082d4f", petrol: "#086b78", cyan: "#19b6cf", mist: "#f2f7f9" },
      boxShadow: { lift: "0 20px 50px -30px rgba(7, 42, 68, .32)" },
    },
  },
  plugins: [],
} satisfies Config;
