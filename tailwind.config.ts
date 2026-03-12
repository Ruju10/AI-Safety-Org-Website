import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF8',
        'bg-2': '#F3F1EC',
        'bg-3': '#ECEAE4',
        white: '#FFFFFF',
        teal: {
          DEFAULT: '#0D7A6B',
          mid: '#0A6357',
          light: 'rgba(13,122,107,0.08)',
          border: 'rgba(13,122,107,0.18)',
        },
        ink: {
          DEFAULT: '#14130F',
          mid: '#4A4844',
          dim: '#8A8884',
        },
        border: {
          DEFAULT: '#DDD9D0',
          strong: '#C8C4BA',
        },
        'org-india': '#0D7A6B',
        'org-intl': '#3B6FD4',
        'org-academic': '#C47A1B',
        'org-policy': '#B0399A',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      fontSize: {
        '2xs': '10px',
        xs: '11px',
        sm: '12.5px',
        base: '14px',
        md: '15px',
        lg: '16px',
        xl: '18px',
      },
      spacing: {
        '13': '52px',
        '18': '72px',
        '22': '88px',
        '26': '104px',
      },
      borderRadius: {
        '2xl': '14px',
      },
      animation: {
        bob: 'bob 2s ease infinite',
        blink: 'blink 2.4s ease infinite',
        grow: 'grow 3s ease infinite alternate',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(3px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.15' },
        },
        grow: {
          from: { width: '20%' },
          to: { width: '45%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
