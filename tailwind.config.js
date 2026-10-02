/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f1e8",
        porcelain: "#fffaf3",
        oak: "#b99063",
        walnut: "#6f4a2f",
        umber: "#3c2b22",
        charcoal: "#171514",
        clay: "#9d7359",
        moss: "#68725b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(44, 31, 22, 0.12)",
      },
    },
  },
  plugins: [],
};
