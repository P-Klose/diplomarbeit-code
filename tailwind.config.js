/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
