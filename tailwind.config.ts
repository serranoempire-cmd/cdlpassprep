import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#16233A",
        "navy-deep": "#0E1626",
        amber: "#F59E0B",
        teal: "#0EA5E9",
        green: "#16A34A",
        red: "#DC2626",
        slate: {
          DEFAULT: "#64748B",
          700: "#334155",
          300: "#CBD5E1",
        },
        soft: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        cta: "0 8px 24px -6px rgba(245, 158, 11, 0.45)",
        card: "0 10px 30px -10px rgba(14, 22, 38, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
