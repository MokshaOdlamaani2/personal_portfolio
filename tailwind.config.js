/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // for React components
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0D1B2A',
        'cream': '#F0F2BD',
        'sage': '#B2CD9C',
        'earth-orange': '#CA7842',
        'deep-brown': '#4B352A',
      },
      animation: {
        splitFadeLeft: 'splitFadeLeft 1.5s forwards',
        splitFadeRight: 'splitFadeRight 1.5s forwards 0.75s',
        fadeIn: 'fadeIn 1s forwards',
      },
      keyframes: {
        splitFadeLeft: {
          '0%': { width: '50%', opacity: '1' },
          '100%': { width: '0%', opacity: '0' },
        },
        splitFadeRight: {
          '0%': { width: '50%', opacity: '1' },
          '100%': { width: '0%', opacity: '0' },
        },
        fadeIn: {
          'to': { opacity: '1' },
        },
      },
      animationDelay: {
        750: '0.75s',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(90deg, #F0F2BD, #B2CD9C, #CA7842, #4B352A)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent', // fallback
        },
      });
    },
  ],
};
