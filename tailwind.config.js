/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Updated brand palette with exact hex codes
        brand: {
          "dark-blue": "#09031D",
          dark: "#0B0225",
          purple: "#7B5AFF",
          magenta: "#E64980",
          yellow: "#FFD166",
        },
        // Updated Neon palette
        neon: {
          purple: "#7B5AFF",
          blue: "#24D3FF",
          pink: "#FF71CE",
          green: "#05FAA1",
          yellow: "#FFFB96",
          orange: "#FF9E64",
        },
        // Synthwave colors
        sunset: {
          orange: "#FF714A",
          pink: "#FF3864",
        },
        // Keeping the nature colors for backward compatibility
        nature: {
          green: "#05FAA1",
          orange: "#FF714A",
          purple: "#7B5AFF",
        },
        "background-start": "rgb(var(--background-start-rgb))",
        "background-end": "rgb(var(--background-end-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
      },
      fontFamily: {
        sans: ["UbuntuSans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrainsMono NFP", "ui-monospace", "monospace"],
        legend: ["Legend", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
