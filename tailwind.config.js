/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      firstTextHeading: "32px",
      secondTextHeading: "18px",
      thirdTextHeading: "18px",
      fourthTextHeading: "0.95rem",
      fiveTextHeading: "26px",
      SixTextHeading: "16px",
    },

    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
