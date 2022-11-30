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
        "customWhite": "#D9D9D9",
        "customBlue": "#345160",
        "customBlack": "#051014",
        "customPurple": "#624768",
        "customGreen": "#00B188",
        "skyBlue":"#0B3F64",
        "waterBlue":"#057B9F",
        "towerBlue":"#003992",
      },
      fontFamily: {
        "Roboto" : ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}