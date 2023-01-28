/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customLight: "#F4F4F4",
        customGray: "#A3A3A3",
        customDark: "#2D2D2D",
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
  },
  plugins: [],
};
