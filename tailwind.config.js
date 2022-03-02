module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bookMark-purple': '#5267D5',
        'bookMark-red': '#FA5959',
        'bookMark-blue': '#242A45',
        'bookMark-gray': '#9194A2',
        'bookMark-white': '#F7F7F7',
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container:{
      center: true,
      padding: '2rem',
      screens:{
        lg: '1124',
        xl: '1124',
        '2xl': '1124',
      },
    },
  },
  plugins: [],
}