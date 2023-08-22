/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    "sm:h-[calc(100vh-3.5rem)]",
    "h-[calc(100vh-3.5rem)]",
    {
      pattern: /grid-cols-.+/,
      variants: ["xs", "md", "lg"],
    },
    {
      pattern: /col-span-.+/,
      variants: ["md"],
    },
    {
      pattern: /max-w-.+/,
      variants: ["md"],
    },
    {
      pattern: /h-.+/,
      variants: ["xs", "sm"],
    },
  ],

  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      textColor: {
        nav: {
          base: "var(--color-nav-primary)",
          hover: "var(--color-nav-hover)",
        },
      },
    },
  },
  plugins: [],
};
