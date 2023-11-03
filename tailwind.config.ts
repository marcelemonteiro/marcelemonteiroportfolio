import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('/assets/images/flower.webp')",
      }
    }
  },
  plugins: [],
  darkMode: ["class", '[data-mode="dark"]'],
};
export default config;
