/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan-400": "hsl(180, 66%, 49%)",
        "blue-900": "hsl(255, 11%, 22%)",
        "violet-700": "hsl(257, 27%, 26%)",
        "violet-900": "hsl(260, 8%, 14%)",
        "red-400": "hsl(0, 87%, 67%)",
        "gray-100": "#f0f1f6",
        "gray-400": "hsl(0, 0%, 75%)",
        "violet-gray": "hsl(257, 7%, 63%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage:{
        "cta-desktop": "url('./assets/bg-boost-desktop.svg')",
        "cta-mobile": "url('./assets/bg-boost-mobile.svg')",
        "shorten-desktop": "url('./assets/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('./assets/bg-shorten-mobile.svg')",
        "hero-image": "url('./src/assets/illustration-working.svg')",
      },
    },
  },
  plugins: [],
}