/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        violet: '#5964e0',
        lightViolet: '#939BF4',
        veryDarkBlue: '#19202D',
        veryDarkGray: '#121721',
        veryLightGray: '#F4F6F8',
        lightGray: '#9DAEC2',
        gray: '#6E8098',
      },
    },
  },
  plugins: [],
}
