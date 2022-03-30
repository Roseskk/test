module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration : {
        '500' : '500ms',
      },
      translate : {
        '50' : '-50%',
      },
      width : {
        '700' : '700px',
      },
      zIndex : {
        '9000' : '9000'
      }
    },
  },
  plugins: [],
}