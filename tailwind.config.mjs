/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        vesubio: {
          DEFAULT: '#0E7A3D',
          50: '#E8F5EE',
          100: '#C9E7D5',
          200: '#9BD3B0',
          300: '#6BBE8A',
          400: '#4FB37D',
          500: '#0E7A3D',
          600: '#0B6433',
          700: '#084E28',
          800: '#06381D',
          900: '#042212',
        },
        sanmarzano: {
          DEFAULT: '#C8332A',
          50: '#FBEAE8',
          100: '#F5C9C5',
          400: '#E55A50',
          500: '#C8332A',
          600: '#A52720',
          700: '#7F1D18',
        },
        mozzarella: {
          DEFAULT: '#FBF6EC',
          50: '#FEFCF7',
          100: '#FBF6EC',
          200: '#F4ECD6',
          300: '#EADFBF',
        },
        carbon: {
          DEFAULT: '#1A1410',
          900: '#1A1410',
          800: '#2A211A',
          700: '#3A2E24',
        },
        cornicione: {
          DEFAULT: '#D9A55F',
          400: '#E6BB7D',
          500: '#D9A55F',
          600: '#B8853F',
        },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'serif'],
        accent: ['Caprasimo', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
    },
  },
};
