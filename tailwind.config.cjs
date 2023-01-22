/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryLight: "#67E5CE",
      primaryDefault: "#2FDBBC",
      primaryDark: "#1EAE94",
      secondaryLight: "#FAAC52",
      secondaryDefault: "#F99928",
      secondaryDark: "#DF7B07",
      alertSuccess: "#4FE178",
      alertWarning: "#F1C75D",
      alertError: "#F77272",
    },
  },
  plugins: [],
}
