/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      colors: {
        // Paleta inspirada en una biblioteca antigua
        slate: {
          50: '#f8f5ec',      // Beige claro (papel antiguo)
          100: '#f3e9d2',     // Marfil
          200: '#e4cfa1',     // Arena
          300: '#c8b08b',     // Marrón claro
          400: '#a68a64',     // Marrón medio
          500: '#7c5e3c',     // Marrón oscuro (madera)
          600: '#5a4327',     // Nogal
          700: '#3e2c1a',     // Marrón profundo
          800: '#2c1d10',     // Casi negro, madera envejecida
          900: '#1a1208',     // Muy oscuro
        },
        gold: {
          100: '#f7e9b0',
          500: '#bfa14a',
          700: '#8c7a2a',
        },
        green: {
          100: '#e6f0e6',
          500: '#4a6a4a',
          700: '#2e3d2e',
        }
      }
    },
  },
  plugins: [],
}