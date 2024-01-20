/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '1440px',
    },
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        LightPink: 'hsl(275, 100%, 97%)',
        GrayishPurple: 'hsl(292, 16%, 49%)',
        DarkPurple: 'hsl(292, 42%, 14%)',
        hoverColor: "#AD28EB"
      },
    },
  },
  plugins: [],
}
