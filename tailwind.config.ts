import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Accent
        primary: "#153C7E",
        secondary: "EE6C4D",

        // Neutral
        gray: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
export default config;
