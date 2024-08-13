/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
      display: ["Montseratt", ...defaultTheme.fontFamily.sans],
      body: ["Lato", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "mingo-green": "#26C35E",
        "mingo-lime": "#B0F127",
        "mingo-text": "#c0c0c0",
        "mingo-text-nav": "#D9D9D9",
        "mingo-dark": "#060606",
        "mingo-mint": "#B7E6C8",
        "mingo-mint-dark": "#49B05E",
        "mingo-grey": "#262626"
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/hero-bg.png')",
        'shadow-bg': "url('./src/assets/shadow.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
