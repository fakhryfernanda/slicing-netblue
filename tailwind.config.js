/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      screens: {
        xl: '1170px'
      },
    },
    extend: {
      colors: {
        netgradientblue: 'linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)',
        netblue: '#217BF4',
        netgrey: 'rgba(101, 100, 100)',
        netlightblue: '#F2F7FE'
      },
      fontFamily : {
        inter: ["Inter"],
      },
      backgroundImage : {
        'hero': 'linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)',
        'community' : 'linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%)'
      }
    }
  },
  plugins: [],
}
