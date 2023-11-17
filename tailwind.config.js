/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/*.html'],
  theme: {
    extend: {
      fontFamily: {
				Vazir: "Vazir",
				Vazir_Light: "Vazir-Light",
				Vazir_Bold: "Vazir-Bold",
				Vazir_Black: "Vazir-Black",
				Vazir_Medium: "Vazir-Medium",
				Aktiv: "Aktiv",
			},
  },
  screens: {
    small: {'max':"479px"},
    mobile: "480px ",
    laptop: "991px",
    desktop: "1366px",
    large: {'min':'1920px'},
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
}

