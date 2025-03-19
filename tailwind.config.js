/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#E5005D',
        customPink2: '#A10243',
        customPurple: '#20053D',
        customBlack: '#11111A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        appearstart: 'appearstart 2s ease-in-out',
      },
      keyframes: {
        appearstart: {
          'from': { opacity: '0', filter: 'blur(5px)', transform: 'translateY(-60%)' },
          'to': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #222222 0%, #101010 50%)'
      },
      boxShadow: {
        'custom-shadow': '0px 0px 60px -12px rgba(50, 50, 93, 0.1), 0px 0px 36px -18px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

