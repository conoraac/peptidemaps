/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9f4",
          100: "#dcf0e3",
          200: "#bbe0ca",
          300: "#8dc9a8",
          400: "#5aab82",
          500: "#3a8e64",
          600: "#2b724f",
          700: "#245b41",
          800: "#1f4836",
          900: "#1a3c2e",
        },
        ink: {
          DEFAULT: "#0e1a14",
          soft: "#2c3a32",
          muted: "#6a7a70",
        },
        cream: "#faf8f3",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["\"Fraunces\"", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 28, 22, 0.04), 0 8px 24px -12px rgba(15, 28, 22, 0.08)",
      },
    },
  },
  plugins: [],
};
