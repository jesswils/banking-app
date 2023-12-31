import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#4E46E8',
        'neutral-dark': '#1D1C31',
        'neutral-light': '#FFFFFF',
        'neutral-purple': '#B6B3EB',
        'transparent': '#FFFFFF10',
        'white' : '#FFF',
        'transparent-purple' : '#B6B3EB',
        'deep-purple' : '#110C64',
        'credit-card' : '#0E0A5F99',
        'ellipses' : '#6158ffcc'
      },
      fontFamily: {
        display: ['var(--font-jakarta)'],
        sans: ['var(--font-poppins)'],
      },
      letterSpacing: {
        wider: '-0.07rem',
      },
      lineHeight: {
        'extra-loose': ' 4.375rem',
      }
    },
  },
  plugins: [],
}
export default config
