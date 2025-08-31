import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      colors: {
        // Primary Palette
        clay: "#C27B58",        // Earthen Clay
        terracotta: "#9B5F43",  // Warm Terracotta
        sand: "#E5D5C6",        // Neutral Sand
        soil: "#3B2A25",        // Deep Soil
        olive: "#6E8B3D",       // Olive Leaf

        // Secondary Palette
        gold: "#C9A464",        // Luminous Gold
        amethyst: "#7A6DAF",    // Calm Amethyst

        // UI neutrals
        divider: "#E6E0DA",
        badge: "#F5EFE8",
      },
      borderRadius: {
        lg: "12px",   // buttons
        xl: "16px",   // cards
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)", // soft shadow
        button: "0 2px 6px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
