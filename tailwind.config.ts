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
        primary: '#ff7a5c',
        'primary-hover': '#e66949',
        secondary: '#ffb4a0',
        'secondary-hover': '#ff9f88',
        background: '#fff8f3',
        accent: '#a8e6cf',
        'dark-teal': '#2d6659',
        white: '#ffffff',
        'text-dark': '#2c2c2c',
        'text-medium': '#666666',
        'text-light': '#999999',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'system-ui', 'sans-serif'],
        quicksand: ['Quicksand', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'hover': '0 12px 32px rgba(255, 122, 92, 0.25)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'spin-slow': 'spin 0.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
