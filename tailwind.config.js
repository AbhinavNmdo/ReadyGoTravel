module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 8px 0px rgba(0, 0, 0, 0.2);',
        '4xl': '0 1px 20px 3px rgba(0, 0, 0, 0.2);'
      }
    },
  },
  plugins: [],
}
