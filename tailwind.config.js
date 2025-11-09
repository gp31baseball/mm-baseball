/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2351",
        gold: "#FDB827",
        sky: "#5DC1E9",
        sand: "#F8F7F2",
        textgold: "#F2CB70",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Bebas Neue", "Anton", "Impact", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        goldglow: "0 0 20px rgba(253, 184, 39, 0.5)",
      },
    },
  },
  plugins: [],
};
