/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        dark: {
          50:  '#F8FAFC',
          900: '#030712',
          800: '#070D1F',
          700: '#0D1B3E',
        }
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'marquee':     'marquee 35s linear infinite',
        'spin-slow':   'spin 20s linear infinite',
        'gradient-x':  'gradient-x 8s ease infinite',
        'fade-in':     'fade-in 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-24px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%':     { 'background-position': '100% 50%' },
        },
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow':       '0 0 40px rgba(37,99,235,0.3)',
        'glow-lg':    '0 0 80px rgba(37,99,235,0.4)',
        'card':       '0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.12)',
        'glass':      '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
