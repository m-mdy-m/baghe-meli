/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/*.html","./src/*.js"],
  theme: {
    extend: {
      fontFamily: {
        vazir: "vazir",
        vazir_Light: "vazir-Light",
        vazir_Bold: "vazir-Bold",
        vazir_Black: "vazir-Black",
        vazir_Medium: "vazir-Medium",
      },
    },
    screens: {
      small: { max: "479px" },
      mobile: "480px ",
      laptop: "991px",
      desktop: "1366px",
      large: { min: "1920px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        small: ".5rem",
        mobile: ".75rem",
        laptop: "1rem",
        desktop: "2rem",
        large: "3rem",
      },
    },
  },
  plugins: [],
};
