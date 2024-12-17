/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      xs: '320px', // extra small devices, phones
      sm: '640px', // small devices, tablets
      md: '768px', // medium devices, small laptops
      lg: '1024px', // large devices, laptops
      xl: '1280px', // extra large devices, large laptops, desktops
      xxl: '1440px', // xxl devices, large desktops
      '2xl': '1920px', // Full HD screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '13px',
        xl: '30px',
        xxl: '0px',
      },
      screens: {
        xl: '1280px',
        xxl: '1794px',
      },
    },
    fontSize: {
      titleH1: ['22px', '115%'],
    },
    extend: {
      colors: {
        bgHero: '#000000',
      },
      backgroundImage: {
        // bgHero: "url('images/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};
