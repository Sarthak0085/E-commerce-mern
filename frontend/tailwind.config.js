/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "4/5":"80%",
      },
      boxShadow: {
        "box-shadow": "0px 8px 6px -6px rgba(108, 122, 137, 0.6) ",
        "green":"0 0 20px #2dce65",
      },
      width: {
        "4/10": "40%",
        "3/10": "30%",
      }
    },
  },
  plugins: [],
}

