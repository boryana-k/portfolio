/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text-color': '#E9E9EB',
        'primary-color': '#42506B',
        'secondary-color': '#72829f',
        'border-color': '#EF4B4C',
        'grad-color1': 'rgba(239,75,76,0.2) 0%',
        'grad-color2': 'rgba(66,80,107,0.1) 50%',
        'grad-color3': 'rgba(62,97,155,0.1) 100%'
      },
      fontFamily: {
        'synco': ["'Syncopate', 'sans-serif'"],
        'exo': ["'Exo 2', 'sans-serif'"],
      },
      backgroundImage: {
        'code':"url('/src/assets/background.png')"
      }
  },
  plugins: [],
}
}
