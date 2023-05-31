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
      colors: {
        platinum: '#dbe3e4',
      },
      animation: {
        text: 'text 2s ease infinite',
        smoothBounce: 'smoothBounce 2s ease-in-out infinite alternate-reverse',
        appear: 'appear 1.5s',
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
        appear: {
          from: {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          to: {
            transform: 1,
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
