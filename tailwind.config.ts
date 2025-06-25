import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}', // لو مشروعك يستخدم App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',
        accent: '#E2B714',
        background: '#100F0F',
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};

export default config;
