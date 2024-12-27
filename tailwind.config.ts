import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        montserrat: ['var(--font-montserrat)'],
        chronicle: ['var(--font-chronicle)'],
      },
      letterSpacing: {
        stratara: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config;