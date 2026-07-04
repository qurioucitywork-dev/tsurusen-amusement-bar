import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        obsidian: "#080807",
        ink: "#FFF7EA",
        mist: "#CFC3B0",
        graphite: "#11100F",
        smoke: "#211C1A",
        line: "rgba(255,247,234,0.16)",
        coral: "#D8334A",
        cyan: "#23D6B5",
        amber: "#D8B46A",
        royal: "#7A5CFF",
      },
      fontFamily: {
        sans: ["var(--font-zen)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        neon: "0 0 36px rgba(0,231,101,0.25)",
        cyan: "0 0 36px rgba(255,93,184,0.22)",
      },
    },
  },
};

export default config;
