/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana'],
        Hugiller: ['"Hugiller DEMO"', 'cursive'],
        Nexusbold: ['Nexusbold'],
      },
      keyframes: {
        spin3d: {
          '0%':   { transform: 'perspective(200px) rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'perspective(200px) rotateY(360deg) rotateX(360deg)' },
        },
        flare: {
          '0%, 90%':   { filter: 'drop-shadow(0 0 0 yellow)' },
          '95%':       { filter: 'drop-shadow(0 0 20px yellow)' },
          '100%':      { filter: 'drop-shadow(0 0 0 yellow)' },
        },
        move1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(50vw, 50vh)" },
        },
        move2: {
          "0%, 100%": { transform: "translate(10vw, 10vh)" },
          "50%": { transform: "translate(-40vw, -30vh)" },
        },
        move3: {
          "0%, 100%": { transform: "translate(-10vw, -10vh)" },
          "50%": { transform: "translate(30vw, 40vh)" },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
      animation: {
        'spin-3d': 'spin3d 5s linear infinite',
        'flare': 'flare 1s ease-in-out 3s forwards',
        'spin-slow': 'spin 6s linear infinite',
        'move-1': 'move1 10s infinite ease-in-out alternate',
        'move-2': 'move2 12s infinite ease-in-out alternate',
        'move-3': 'move3 15s infinite ease-in-out alternate',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
    },
  },
  plugins: [],
};
