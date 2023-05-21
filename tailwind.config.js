/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:theme=>({
        'hero-pattern':"url('/restaurant1.png')"
      })
    },
  },
  plugins: [],
}

