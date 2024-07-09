/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997ff",
        gold: "#94928d",
        "theme-gray": "#86868b",
        "theme-gray-dark": "#101010",
        "theme-gray-button": "#262627",
        "theme-gray-icon": "#afafaf",
      },
    },
  },
  plugins: [],
};
