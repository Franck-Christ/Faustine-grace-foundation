/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5a4d9b',
          light: '#7a6fb3',
          dark: '#3a3162',
          hover: '#4a3f7c',
        },
        secondary: {
          DEFAULT: '#2792d1',
          light: '#52a8d9',
          dark: '#1e7bb3',
          hover: '#1e7bb3',
        },
        gray: {
          DEFAULT: '#616161',
          light: '#8e8e8e',
          dark: '#424242',
          hover: '#757575',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-colors': {
          'transition-property': 'color, background-color, border-color, text-decoration-color, fill, stroke',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'transition-duration': '200ms',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
