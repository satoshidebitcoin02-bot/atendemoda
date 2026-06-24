import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201B",
        moss: "#4F6F52",
        coral: "#D96C4B",
        linen: "#F7F1E8",
        clay: "#B66A50"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 27, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
