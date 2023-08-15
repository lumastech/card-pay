/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {

        xs: '4px',
        md:'12px',
        lg:'16px',
        xl:'24px',
        '2xl':'40',
        '3xl':'60'

      }
    },
  },
  plugins: [],
}
=======
  content: ["./index.html", "./index.css", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "4px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "60px",
      },

      colors: {
        color1: "#63DC00",
        color2: "#FF6600",
        grayCard: "#FFFFFF06"
      },
    },
  },
  plugins: [],
};
>>>>>>> aa18ed0a0ad1cf0d4ed9e209befce2e5a5c1d060
