/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, 
      blue: "#0058A2",
      orange: "#F95D39", 
      red: colors.red,
      zinc: colors.zinc, 
    },
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(-0.2rem)' },
          '50%': { transform: 'translateY(0.2rem)' },
        },
        btn_anim1: {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        btn_anim2: {
            '0%': { top: '-100%' },
            '50%, 100%': { top: '100%' },
        },
        btn_anim3: {
            '0%': { right: '-100%' },
            '50%, 100%': { right: '100%' },
        },
        btn_anim4: {
            '0%': { bottom: '-100%' },
            '50%, 100%': { bottom: '100%' },
        }
      },
      animation: {
        upDown: 'upDown 1.5s ease-in-out infinite',
        btn_anim1: 'btn_anim1 1.5s linear infinite',
        btn_anim2: 'btn_anim2 1.5s linear infinite',
        btn_anim3: 'btn_anim3 1.5s linear infinite',
        btn_anim4: 'btn_anim4 1.5s linear infinite',
      },
      gridTemplateColumns: {
        'autogrid': 'repeat(auto-fit, minmax(300px, 1fr))',
      }

      

    },
  }
};
