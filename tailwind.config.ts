import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sora: ["var(--font-sora)", "sans-serif"],
          inter: ["var(--font-inter)", "sans-serif"],
          space: ["var(--font-space)", "sans-serif"],
          jakarta: ["var(--font-jakarta)", "sans-serif"],
          manrope: ["var(--font-manrope)", "sans-serif"],
          outfit: ["var(--font-outfit)", "sans-serif"],
        },
      colors: {
        background:  "#04091A",
        surface:     "#080F28",
        "surface-2": "#0E1A3A",
        border:      "#1A2850",
        "border-2":  "#243464",
        teal: {
          DEFAULT: "#00C8E8",
          dark:    "#0099B4",
          light:   "#33D8F0",
        },
        violet: {
          DEFAULT: "#5B8AF0",
          dark:    "#3A65C8",
          light:   "#8BAAF5",
        },
        text: {
          primary:   "#EEF2FF",
          secondary: "#7A9CC8",
          muted:     "#3A5480",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0, 200, 232, 0.18), transparent)",
      },
      animation: {
        float:        "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer:      "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
    },
  },
  plugins: [],
};
export default config;