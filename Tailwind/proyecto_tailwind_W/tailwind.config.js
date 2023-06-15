/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        "softOrange": "hsl(35, 77%, 62%)sl",
        "softRed": "hsl(5, 85%, 63%)",
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
      },

      fontFamily: {
        "Inter": ["'Inter', 'sans-serif'"]
      },

      screens: {
        'small': '375px',
        'big' : '1440px',
      },

      backgroundImage: {
        "menu-open": "url('../images/icon-menu.svg')",
        "menu-close": "url('../images/icon-menu-close.svg')",
        "hero-desktop": "url('../images/image-web-3-desktop.jpg')",
        "hero-mobile" : "url(../images/image-web-3-mobile.jpg)",
      },
    },
  },
  plugins: [],
}

