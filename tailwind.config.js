/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(1turn, #fafffe -8.47%, #ebf4f2 40%, #e7f4f0)',
        'custom-cgradient': 'linear-gradient(0deg, #dff0fd -43.94%, #faf3ea 45.65%)',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

