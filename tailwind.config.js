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
    {
      pattern: /border-.+/,
    },
    {
      pattern: /bg-.+/,
    },
  ],

  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "it-medientechnik": "#86B5D7",
        "informatik-sse": "#0A529A",
        "informatik-ddp": "#243c5a",
        "informatik-csi": "#0A529A",
        elektronik: "#A2122A",
        medizintechnik: "#DC931A",
        allgemein: "#846b6d",
      },
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
