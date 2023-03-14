/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 2s ease infinite',
        smoothBounce: 'smoothBounce 2s ease-in-out infinite alternate-reverse',
        opacity: 'opacity 0.2s ease',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        smoothBounce: {
          from: {
            transform: 'translateY(0px)',
          },
          to: {
            transform: 'translateY(10px)',
          },
        },
        opacity: {
          from: {
            opacity: 0,
            transform: 'translateY(2px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
