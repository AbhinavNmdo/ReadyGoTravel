module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 8px 0px rgba(0, 0, 0, 0.2);',
        '4xl': '0 1px 20px 3px rgba(0, 0, 0, 0.2);'
      },
      screens: {
        'max-2xl': {'max': '1535px'},
  
        'max-xl': {'max': '1279px'},
  
        'max-lg': {'max': '1023px'},
  
        'max-md': {'max': '767px'},
  
        'max-sm': {'max': '639px'},

        'max-xsm': {'max': '408px'},

        'nav-max-md': {'max': '1004px'},

        'nav-md': '1004px',
      }
    },
  },
  plugins: [],
}
