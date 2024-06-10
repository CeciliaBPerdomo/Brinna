/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "portada": "url('../../public/images/banner_home.png')",
        "newsletter": "url('../../public/images/fondos/newsletter.png')",
        "el": "url('../../public/images/fondos/el.png')",
        "ella": "url('../../public/images/fondos/ella.png')",
        "chicos": "url('../../public/images/fondos/chicos.png')",
        "comprar": "url('../../public/images/fondos/FondoComprar.png')",
        "vender": "url('../../public/images/fondos/FondoVender.png')",
        "bannerella": "url('../../public/images/fondos/banner_para_ella_logo.jpg')",
        "bannerel": "url('../../public/images/fondos/banner_para_el_logo.jpg')",
        "bannerchicos": "url('../../public/images/fondos/banner_para_chicos_logo.jpg')",
        "bannernosotros": "url('../../public/images/fondos/banner_sobre_nosotros_con_logo.png')",
        "bannercontacto": "url('../../public/images/fondos/banner_contacto_con_logo.png')",
      },
      colors: {
        'brinna': '#CA4E3C',
        'muted-cyan': '#CCE0E1',
        'muted-blue': '#5D717C',
        'fondo_cards': '#CCE0E1',
        'ranking': "#FF7968", 
      },
    },
  },
  plugins: [],
});