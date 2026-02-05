/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2328",
        "ink-soft": "#4a4f55",
        accent: "#f08a00",
        paper: "#f7f3ea",
        "paper-strong": "#ffffff",
        line: "#c5c1b8",
      },
      boxShadow: {
        card: "0 6px 18px rgba(31, 35, 40, 0.12)",
        brand: "0 8px 24px rgba(31, 35, 40, 0.12)",
      },
      fontFamily: {
        sans: ["Libre Franklin", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
}
