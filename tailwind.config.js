/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light-primary": "#4997fc",
        "blue-dark-primary": "#346bf0",
      },
    },
  },
  plugins: [],
};
