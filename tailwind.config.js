/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f8ff", // Un fondo claro lavanda suave
        primary: "#7459a9",    // Tu color principal Emilia
        secondary: "#8b6bb8",
        accent: "#5a3d7a",
      },
    },
  },
  plugins: [],
}

