/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      firstTextHeading: "32px",
      secondTextHeading: "18px",
      thirdTextHeading: "17.5px",
      fourthTextHeading: "0.95rem",
      fiveTextHeading: "25px",
      SixTextHeading: "16px",
      SevenTextHeading: "26px"
    },
    colors: {
      primaryWhite: "#fff",
      primaryDarkGreen: "#052926",
      primaryLightGreen: "#008F7C",
      primaryDarkGreenOne: "#032D29",
      secondaryGray7: "#121212",
      secondLightGray: "#C5D9D8",
      secondaryLightGray1: "#A5C1C2",
      secondaryLightGray2: "#E4F8F7",
      secondaryLightGrayWhite: "#C5D9D8",
      secondaryLightYellow: "#FDF5D1",
      secondLightPink: "#FEE2DF",
    },

    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
