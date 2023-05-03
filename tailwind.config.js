/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      width: {
        90: "95%",
      },
      backgroundImage: {
        "hero-bg": "url('../../src/assets/images/home/hero.webp')",
        "disposal-bg": "url('../../src/assets/images/home/impact.webp')",
      },
    },
    colors: {
      orange: "#ff8d00",
      primary: "#78b54e",
      primary_light: "#99cb64",
      primary_light_dark: "#0e8345",
      primary_dark: "#006649",
      semi_white: "#f2f2f2",
      semi_white_two: "#efece7",
      white: "#fff",
      black: "#111",
      semi_black: "#2D2D2D",
      semi_black_two: "#525660",
      border_color: "#e4e4e4",
      border_color_two: "#d3ccbd",
      color_modal: "#0081ff",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      roboto: ["Roboto"],
    },
    container: {
      center: true,
    },
  },

  plugins: [],
};
