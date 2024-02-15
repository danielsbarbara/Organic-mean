/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'rustBackGround': "url(../public/images/background2.jpg)",
      }, colors: {
        'card_popup_gray': '#83644C',
        'darkTransparent': 'rgba(0, 0, 0, 0.72)',
      },
      keyframes: {
        opacityAnime: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        }
      },
      animation: {
        opacityA: 'opacityAnime 300ms ease-in-out'
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
