/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        turquoise: {
          DEFAULT: '#0AB9A6',
          50: '#E6F7F6',
          100: '#CCEEED',
          200: '#99DDDB',
          300: '#66CCC9',
          400: '#33BBB7',
          500: '#0AB9A6', // Couleur principale
          600: '#089485',
          700: '#067064',
          800: '#044C43',
          900: '#022821',
        },
        blue: {
          50: '#E6EFF8',
          100: '#CCDEF1',
          200: '#99BDE3',
          300: '#669CD5',
          400: '#337BC7',
          500: '#1660A9', // Bleu medium
          'bright': '#1261AC', // Bleu bright (principal)
          600: '#0E4E8A',
          700: '#0A3A67',
          800: '#072745',
          900: '#031322',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0AB9A6, #1261AC)',
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)', 
        'hard': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'glow-turquoise': '0 0 20px rgba(10, 185, 166, 0.15)',
        'glow-blue': '0 0 20px rgba(18, 97, 172, 0.15)',
      },
      transitionDuration: {
        'quick': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(10, 185, 166, 0.3)' },
          '70%': { boxShadow: '0 0 0 10px rgba(10, 185, 166, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(10, 185, 166, 0)' },
        },
        'bg-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'bg-shimmer': 'bg-shimmer 3s infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
      };
      addUtilities(newUtilities);
    },
  ],
} 