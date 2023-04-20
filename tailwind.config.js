/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        90: "95%",
      },
      backgroundImage: {
        "hero-bg": "url('../../assets/images/home/hero.webp')",
        "disposal-bg": "url('../../assets/images/home/impact.webp')",
      },
    },
    colors: {
      orange: "#ff8d00",
      primary: "#78b54e",
      primary_light: "#99cb64",
      primary_dark: "#0e8345",
      semi_white: "#f2f2f2",
      semi_white_two: "#efece7",
      white: "#fff",
      black: "#111",
      semi_black: "#2d2d2d",
      border_color: "#e4e4e4",
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
