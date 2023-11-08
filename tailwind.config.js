module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
      secondary: ['Playfair', 'serif'],
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#282828',
        secondary: '#f2f2f2',
      },
      backgroundImage: {
        hero: "url('./img/woman_hero.jpg')",
        about: "url('./img/aboutus.jpg')",
      },
      backgroundSize: {
        'cover': 'cover', 
        'contain': 'contain',
      },
    },
  },
  plugins: [],
};
