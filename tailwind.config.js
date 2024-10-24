/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      appear: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      appear: "appear 0.5s linear forwards",
    },
  },
  darkMode: ["class", '[class="dark"]', "selector"],
  plugins: [],
};
