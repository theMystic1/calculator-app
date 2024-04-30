/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spatan: "League Spartan, sans-serif",
    },
    extend: {
      colors: {
        theme1: {
          themeMainBackground: "#162447",
          themeToggleKeypadBackground: "#0e1929",
          themeScreenBackground: "#071124",
          themeKeyBackground: "#1c4257",
          themeKeyShadow: "#3a8fa7",

          themeToggleEqH: "#d43f3f",
          themeToggleEq: "#8b2b2b",
          themeBtn: "#e5c7b7",
          themeBtnShadow: "#a47b65",
          text: "#304259",
          textScreen: "#ffffff",
          textEq: "#0000",
        },

        theme2: {
          themeMainBackground: "#e6e6e6",
          themeToggleKeypadBackground: "#ccb3b3",
          themeScreenBackground: "#ededed",
          themeKeyBackground: "#267984",
          themeKeyShadow: "#0e4d5e",

          themeToggleEqH: "#ff7f00",
          themeToggleEq: "#b26400",
          themeBtn: "#e0e0b3",
          themeBtnShadow: "#735d33",
          theme2TextDarkGrayishYellow: "#332b19",
          text: "#0d1a33",
          textScreen: "#0d1a33",
          textEq: "#0000",
        },

        theme3: {
          themeMainBackground: "#0e0322",
          themeToggleKeypadBackground: "#10062b",
          themeKeyBackground: "#3d0753",
          themeScreenBackground: "#10062b",
          themeKeyShadow: "#d5189e",

          themeToggleEq: "#00ffff",
          themeToggleEqH: "#b3ffff",
          themeBtn: "#120b30",
          themeBtnShadow: "#8c1d5f",
          text: "#ffec80",
          textScreen: "#ffec80",
          textEq: "#ffff",
        },
      },
    },
  },
  plugins: [],
};
