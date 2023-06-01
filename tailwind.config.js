/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    // Path to the Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { 
      'bgmain': '#D1FAFF',
      'bgsecondary': '#54C6D5',
      'textmain': '#132448',
      'cascadeBorder': '#6FB0E0',
      'ecoBorder': '#5D9340',
      'wasteBorder': '#343333',
      'refundBorder': '#1847C0',
      'pillBgGreen': '#53C340',
      'pillBgRed': '#E25E5E',
      'pillTextGreen': '#2E602F',
      'pillTextRed': '#DF4834',
      'ecoActionBg': '#557445',
      'wasteBg': '#343333',
      'refundableBg': '#1847C0',
      'cascadeBg': '#54A4DF',
      'insightBtn': '#45A5B1'
    }, 
    extend: {},
  },
  plugins: [],
})

