/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4fd1c5',
          DEFAULT: '#38b2ac',
          dark: '#319795',
        },
        secondary: {
          light: '#f7fafc',
          DEFAULT: '#edf2f7',
          dark: '#e2e8f0',
        },
        dark: {
          light: '#2d3748',
          DEFAULT: '#1a202c',
          dark: '#171923',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}