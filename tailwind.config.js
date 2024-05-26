/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      boxShadow:{

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ['light', 'dark'],
    themes: ['light'],
  }
}

