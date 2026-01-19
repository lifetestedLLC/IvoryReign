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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: {
          50: "#FDFCF8",
          100: "#FBF8F0",
          200: "#F5EFE0",
          300: "#EFE5CF",
          400: "#E9DCBF",
          500: "#E3D3AE",
          600: "#B8A68C",
          700: "#8C7A69",
          800: "#615147",
          900: "#352924",
        },
        graffiti: {
          pink: "#FF006E",
          blue: "#8338EC",
          yellow: "#FFBE0B",
          green: "#06FFA5",
          purple: "#B185FF",
        },
      },
      fontFamily: {
        graffiti: ["var(--font-graffiti)", "Impact", "sans-serif"],
        urban: ["var(--font-urban)", "Arial Black", "sans-serif"],
      },
      backgroundImage: {
        "spray-paint": "url('/spray-paint.svg')",
        "graffiti-texture": "url('/graffiti-texture.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
