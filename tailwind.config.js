/** @type {import('tailwindcss').Config} */

import { transparent, white } from "tailwindcss/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary:"#D0D6F9",
        white,
        transparent,
      },
    },
    fontFamily: {
      bellefair: ["var(--bellefair-font)", "sans-serif"],
      barlow_condensed: ["var(--barlow-condensed-font)", "sans-serif"],
    },
  },
  plugins: [],
};
