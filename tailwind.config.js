/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
      padding:"15rem",
      center:true
      },
      colors:{
        primary:"#007580",
        secondary:"#FFFFFF",
        base:"#F0F2F3",
        satus:"#F05C52",
        green:"#01AD5A",
        gary:"#272343"

      },
fontFamily:{
  sans:["Inter", 'sans-serif']
}
    },
  },
  plugins: [],
}
