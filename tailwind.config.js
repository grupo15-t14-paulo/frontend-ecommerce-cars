/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      colors: {
        colorFeedbackAlert1: "rgba(var(--colorFeedbackAlert1), <alpha-value>)",
        colorFeedbackAlert2: "rgba(var(--colorFeedbackAlert2), <alpha-value>)",
        colorFeedbackAlert3: "rgba(var(--colorFeedbackAlert3), <alpha-value>)",
        colorFeedbackSucess1: "rgba(var(--colorFeedbackSucess1), <alpha-value>)",
        colorFeedbackSucess2: "rgba(var(--colorFeedbackSucess2), <alpha-value>)",
        colorFeedbackSucess3: "rgba(var(--colorFeedbackSucess3), <alpha-value>)",
        colorRandomRandom1: "rgba(var(--colorRandomRandom1), <alpha-value>)",
        colorRandomRandom2: "rgba(var(--colorRandomRandom2), <alpha-value>)",
        colorRandomRandom3: "rgba(var(--colorRandomRandom3), <alpha-value>)",
        colorRandomRandom4: "rgba(var(--colorRandomRandom4), <alpha-value>)",
        colorRandomRandom5: "rgba(var(--colorRandomRandom5), <alpha-value>)",
        colorRandomRandom6: "rgba(var(--colorRandomRandom6), <alpha-value>)",
        colorRandomRandom7: "rgba(var(--colorRandomRandom7), <alpha-value>)",
        colorRandomRandom8: "rgba(var(--colorRandomRandom8), <alpha-value>)",
        colorRandomRandom9: "rgba(var(--colorRandomRandom9), <alpha-value>)",
        colorRandomRandom10: "rgba(var(--colorRandomRandom10), <alpha-value>)",
        colorRandomRandom11: "rgba(var(--colorRandomRandom11), <alpha-value>)",
        colorRandomRandom12: "rgba(var(--colorRandomRandom12), <alpha-value>)",
        colorBrandBrand1: "rgba(var(--colorBrandBrand1), <alpha-value>)",
        colorBrandBrand2: "rgba(var(--colorBrandBrand2), <alpha-value>)",
        colorBrandBrand3: "rgba(var(--colorBrandBrand3), <alpha-value>)",
        colorBrandBrand4: "rgba(var(--colorBrandBrand4), <alpha-value>)",
        colorGreyScaleGrey0: "rgba(var(--colorGreyScaleGrey0), <alpha-value>)",
        colorGreyScaleGrey1: "rgba(var(--colorGreyScaleGrey1), <alpha-value>)",
        colorGreyScaleGrey2: "rgba(var(--colorGreyScaleGrey2), <alpha-value>)",
        colorGreyScaleGrey3: "rgba(var(--colorGreyScaleGrey3), <alpha-value>)",
        colorGreyScaleGrey4: "rgba(var(--colorGreyScaleGrey4), <alpha-value>)",
        colorGreyScaleGrey5: "rgba(var(--colorGreyScaleGrey5), <alpha-value>)",
        colorGreyScaleGrey6: "rgba(var(--colorGreyScaleGrey6), <alpha-value>)",
        colorGreyScaleGrey7: "rgba(var(--colorGreyScaleGrey7), <alpha-value>)",
        colorGreyScaleGrey8: "rgba(var(--colorGreyScaleGrey8), <alpha-value>)",
        colorGreyScaleGrey9: "rgba(var(--colorGreyScaleGrey9), <alpha-value>)",
        colorGreyScaleGrey10: "rgba(var(--colorGreyScaleGrey10), <alpha-value>)",
        colorColorsFixedWhiteFixed: "rgba(var(--colorColorsFixedWhiteFixed), <alpha-value>)",
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
