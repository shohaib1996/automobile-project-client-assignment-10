/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/banner/img-2.jpg')",
        
      }
    },
  },
  plugins: [require("daisyui")],
}

