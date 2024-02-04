/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
         'rustBackGround': "url(../public/images/background4.jpg)",
      }, colors: {
        'card_popup_gray': '#83644C',
        'darkTransparent': 'rgba(0, 0, 0, 0.72)',
      }
    },
    fontFamily: {
      cinzel: ["cinzel"],
      bitterBold: ["bitterBold"],
      bitterItalic: ["bitterItalic"],
      bitterRegular: ["bitterRegular"],
      bitterThin: ["bitterThin"],
      bitterThinItalic: ["bitterThinItalic"],
      bitterLight: ["bitterLight"],
      bitterRegular: ["bitterLightItalic"],
      bitterRegular: ["bitterExtraLight"],
      bitterRegular: ["bitterExtraLightItalic"],
    },
  
  },
  plugins: [],
};
