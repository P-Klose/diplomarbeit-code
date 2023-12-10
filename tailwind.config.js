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
    "pr-[17%]",
    "pr-[24%]",
    "pr-[31%]",
    "pr-[38%]",
    "pr-[45%]",
    "pr-[12%]",
    "pr-[19%]",
    "pr-[26%]",
    "pr-[33%]",
    "pr-[40%]",
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
      screens: {
        tall: { raw: "(min-height: 768px)" },
      },
      colors: {
        "it-medientechnik": "#86B5D7",
        "informatik-sse": "#0A529A",
        "informatik-ddp": "#4380B6",
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
