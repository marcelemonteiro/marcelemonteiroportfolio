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
        "greenish-gray": "#1c2d36",
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-mode="dark"]'],
};
export default config;
