/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        /* Citrus & Forest palette */
        cream: "#FFFAF5",
        peach: "#FFDFC0",
        apricot: "#F1AA6A",
        forest: {
          50: "#F3F8F3",
          100: "#E4EFE6",
          200: "#C8DFCC",
          300: "#9DC3A5",
          400: "#6C9F78",
          500: "#447D52",
          600: "#2E6339",
          700: "#24522E",
          800: "#1F4A28",
          900: "#1A4122",
          950: "#10291A",
        },
        citrus: {
          50: "#FFF6EC",
          100: "#FFEBD6",
          200: "#FFDFC0",
          300: "#F1AA6A",
          400: "#F99B2A",
          500: "#F78D06",
          600: "#DB7A00",
          700: "#B46400",
        },
        ink: {
          900: "#16261A",
          700: "#3D4D41",
          500: "#6A786D",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26, 65, 34, 0.06), 0 8px 24px -8px rgba(26, 65, 34, 0.12)",
        lift: "0 2px 4px rgba(26, 65, 34, 0.06), 0 24px 48px -16px rgba(26, 65, 34, 0.25)",
        cta: "0 10px 30px -10px rgba(247, 141, 6, 0.65)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
