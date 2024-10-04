module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
      colors: {
        light: "#fdfefe",
        dark: "#00483d",
        yellow: "#bfc954",
        gr: "#8fbb46",
        mint: "#abca9e",
        sec: "#4d952f",
        wh: "#fffaf1",
        logo: '#318815',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.text-stroke': {
        '-webkit-text-stroke': '0.4px black',
      },
    })
  }],
};
