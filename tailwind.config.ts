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
        ivory: {
          DEFAULT: '#FAF7F0',
          dark: '#F0EBE0',
        },
        cream: {
          DEFAULT: '#FFF5F0',
          dark: '#FFE8E0',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4AF37',
          bright: '#F0D060',
          dark: '#A07830',
          pale: '#E8D5A3',
        },
        crimson: {
          DEFAULT: '#5C0E0E',
          deep: '#2D0505',
          darker: '#1A0303',
          mid: '#7A1515',
          light: '#8B1A1A',
          accent: '#A52020',
          muted: '#4A0A0A',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        vibes: ['var(--font-great-vibes)', 'cursive'],
        amiri: ['var(--font-amiri)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F0D060 50%, #C9A84C 100%)',
        'crimson-gradient': 'linear-gradient(180deg, #2D0505 0%, #5C0E0E 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FAF7F0 0%, #FFF5F0 100%)',
      },
    },
  },
  plugins: [],
}

export default config
