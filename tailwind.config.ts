import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0B14",
        paper: "#FBF8FF",
        night: "#0c0a14",
        rule: "rgba(255,255,255,0.08)",
        accent: "#A78BFA",
        accentInk: "#15121C",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#0E0B14",
            "--tw-prose-headings": "#0E0B14",
            fontFamily: "var(--font-newsreader), Georgia, serif",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
