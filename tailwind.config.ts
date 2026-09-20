import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0b160f',
          900: '#102015',
          800: '#182e1f',
          700: '#213e29',
          600: '#2c5136',
          500: '#3a6647',
          400: '#517d5c',
        },
        olive: {
          900: '#211f10',
          800: '#2c2a17',
          700: '#3a3720',
        },
        leather: {
          950: '#1c120b',
          900: '#2a1c11',
          800: '#3c2818',
          700: '#54371f',
          600: '#734a26',
          500: '#8f5e2f',
          400: '#a8763f',
        },
        gold: {
          300: '#e6cd80',
          400: '#d7b654',
          500: '#c69c3a',
          600: '#a97f28',
          700: '#87651f',
        },
        cream: {
          50: '#fdfbf6',
          100: '#faf5ea',
          200: '#f3ead4',
          300: '#eaddbd',
        },
        ink: {
          900: '#1a1712',
          800: '#241f18',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-grain':
          "radial-gradient(circle at 20% 20%, rgba(198,156,58,0.05), transparent 45%), radial-gradient(circle at 80% 60%, rgba(84,55,31,0.06), transparent 50%)",
        'gold-line':
          'linear-gradient(90deg, transparent, rgba(198,156,58,0.6), transparent)',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(16, 32, 21, 0.35)',
        gold: '0 0 0 1px rgba(198,156,58,0.35)',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        fadeIn: 'fadeIn 0.8s ease-out both',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
