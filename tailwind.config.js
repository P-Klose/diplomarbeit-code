/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    {
      pattern: /grid-cols-.+/,
      variants: ["md", "lg"],
    },
    {
      pattern: /col-span-.+/,
      variants: ["md"],
    },
    {
      pattern: /col-start-.+/,
      variants: ["md"],
    },
    {
      pattern: /max-w-.+/,
      variants: ["md"],
    },
  ],

  theme: {
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
