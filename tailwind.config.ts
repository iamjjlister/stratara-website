/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stratara: {
          navy: '#1B365D',
          platinum: '#E5E4E2',
          bronze: '#CD7F32',
          'capital-green': '#1E4D2B',
          'advisors-blue': '#1F4690',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        stratara: '0.2em',
      },
    },
  },
  plugins: [],
}