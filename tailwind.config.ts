import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: {
        100: "#FFF",
      },

      gray: {
        100: "#595857",
        300: "#000000",
      },

      cosmic: {
        100: "#EEE1F0",
        200: "#961A88",
      },

      classic: {
        100: "#E9EEF6",
        200: "#191978",
      },

      atomic: {
        100: "#EAF9F7",
        200: "#00AEB1",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
