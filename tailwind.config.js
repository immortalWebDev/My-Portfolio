/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '350px', //custom breakpoint (check)
      },
      fontFamily: {
        playwrite: ['Playwrite IN', 'sans-serif'], //custom font
        monospace:['monospace'],
        
      },
    },
    plugins: [],
  },
};
