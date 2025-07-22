module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // Light mode primary color
          DEFAULT: '#1d4ed8', // Default primary color
          dark: '#1e3a8a', // Dark mode primary color
        },
        background: {
          light: '#ffffff', // Light mode background color
          DEFAULT: '#f3f4f6', // Default background color
          dark: '#1f2937', // Dark mode background color
        },
        text: {
          light: '#000000', // Light mode text color
          DEFAULT: '#374151', // Default text color
          dark: '#ffffff', // Dark mode text color
        },
      },
    },
  },
  plugins: [],
}