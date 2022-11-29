/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./nonPageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customWhite": "#F1F1F1",
        "customBlue": "#1C6E8C",
        "customBlack": "#051014",
        "customOrange": "#EE6352",
      },
      fontFamily: {
        "Roboto" : ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}