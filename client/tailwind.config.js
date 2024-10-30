/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BD838', 
        secondary: '#69AF1E',
        primarytext: '#333',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

