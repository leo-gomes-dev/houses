/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans":["Poppins", "sans-serif"]
      },
      backgroundImage:{
        "tenis":"url('./../assets/bg.png')"
      },
      keyframes:{
        floatRight:{
          "0%":{ transform: "translatex(0px)" },
          "50%":{ transform: "translatex(8px)" },
          "100%":{ transform: "translatex(0px)" },
        },
        opacityPulse:{
          "0%":{ opacity: 1 },
          "50%":{ opacity: 0.2 },
          "100%":{ opacity: 1 },
        }
      },
      animation:{
        floatRight:"floatRight 2.5s infinite",
        opacityPulse: "opacityPulse 2.5s infinite"
      }
    },
  },
  plugins: [],
}