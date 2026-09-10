import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FAF7F2",
          100: "#F5EFE6",
          200: "#E8E0D4",
          300: "#D6CABA",
          card: "#FFFFFF",
          dark: "#151311",
          darkCard: "#211E1B",
          darkLine: "#2B2621",
        },
        ink: {
          primary: "#2C2520",
          secondary: "#6B5E54",
          muted: "#96887B",
          light: "#F6F0EB",
          lightMuted: "#A99F94",
        },
        selah: {
          green: "#3A7D3A",
          greenLight: "#EAF3EA",
          greenDark: "#2B5E2B",
          terracotta: "#C46246",
          terracottaLight: "#FBECE8",
          sage: "#5B8C5A",
          sageLight: "#EEF4EE",
          gold: "#D4A84B",
          goldLight: "#FAF3E4",
          steel: "#4A7C9B",
          steelLight: "#EBF2F6",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        paper: "0 1px 3px rgba(44, 37, 32, 0.05), 0 4px 12px rgba(44, 37, 32, 0.04)",
        "paper-lift": "0 10px 25px -3px rgba(44, 37, 32, 0.08), 0 4px 10px -2px rgba(44, 37, 32, 0.04)",
        "paper-deep": "0 20px 40px -8px rgba(44, 37, 32, 0.12), 0 8px 16px -4px rgba(44, 37, 32, 0.06)",
        card: "0 2px 8px -1px rgba(44, 37, 32, 0.06), 0 1px 3px -1px rgba(44, 37, 32, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
