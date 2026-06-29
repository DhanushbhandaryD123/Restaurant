/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        noir: "#0a0907",
        charcoal: "#13110d",
        ink: "#1c1813",
        gold: {
          DEFAULT: "#c9a45c",
          soft: "#e3c585",
          deep: "#a07b34",
        },
        cream: "#f4ecdd",
        warm: "#faf5ec",
        wine: "#6e2433",
        copper: "#b87333",
        forest: "#23362a",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Poppins"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.35em",
      },
      spacing: {
        "safe-b": "env(safe-area-inset-bottom)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glowpulse: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        glowpulse: "glowpulse 7s ease-in-out infinite",
        spinslow: "spinslow 18s linear infinite",
      },
    },
  },
  plugins: [],
};
