/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fffbf5",
        "paper-dim": "#f5ebd8",
        card: "#F4EFE2",
        ink: {
          navy: "#1E3350",
          red: "#A8342A",
        },
        charcoal: "#262220",
        brass: "#8E6E28",
        line: "rgba(38,34,32,0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(38,34,32,0.05) 1px, transparent 0)",
      },
      backgroundSize: {
        grain: "22px 22px",
      },
      boxShadow: {
        stamp: "3px 3px 0 #262220",
        panel: "0 18px 40px -20px rgba(38,34,32,0.4)",
      },
      keyframes: {
        thump: {
          "0%": { opacity: 0, transform: "scale(2.6) rotate(-18deg)" },
          "55%": { opacity: 1, transform: "scale(0.85) rotate(-9deg)" },
          "75%": { transform: "scale(1.06) rotate(-11deg)" },
          "100%": { opacity: 1, transform: "scale(1) rotate(-10deg)" },
        },
      },
      animation: {
        thump: "thump .34s cubic-bezier(.2,1.4,.4,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
