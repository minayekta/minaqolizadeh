module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.jpeg')",
        'footer-texture': "url('/img/footer-texture.jpg')",
      }
    },
  },
  plugins: [],
}
