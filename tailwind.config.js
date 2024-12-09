/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        Primary: "#ED2939",
        dark: "#0f172a",
        abu_abu: "#64748b",
      },
      screens: {
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
