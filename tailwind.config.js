/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto mono, monospace',
    },
    extend: {
      height: {
        // If I wrote it in theme all height will be lost so extend just add this to the height list
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
