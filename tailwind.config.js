/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "newsletter": "url('../../public/images/fondos/newsletter.png')",
        "el": "url('../../public/images/fondos/el.png')",
        "ella": "url('../../public/images/fondos/ella.png')",
        "chicos": "url('../../public/images/fondos/chicos.png')",
        "portada": "url('../../public/images/banner_home.png')",
      },
    },
  },
  plugins: [],
};
