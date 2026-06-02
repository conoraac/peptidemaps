/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary: navy from the logo wordmark
        brand: {
          50: "#f1f3f9",
          100: "#dde2ef",
          200: "#b8c2dc",
          300: "#8392b8",
          400: "#525e8a",
          500: "#2f3a64",
          600: "#1d2547",
          700: "#131a36",
          800: "#0e142a",
          900: "#080d1d",
        },
        // Accent: teal from the logo dot
        accent: {
          50: "#effaf8",
          100: "#d5f1ec",
          200: "#abe3d9",
          300: "#74cec0",
          400: "#46b6a6",
          500: "#2ea495",
          600: "#25867a",
          700: "#1f6b62",
          800: "#1b554e",
          900: "#173f3a",
        },
        ink: {
          DEFAULT: "#0e142a",
          soft: "#2a3046",
          muted: "#6a7088",
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
