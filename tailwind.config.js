/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./components/**/*.html",
    "./email-template.html",
    "./**/*.jsx",
    "./**/*.tsx",
    "./**/*.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Primary/secondary palettes plus theme-specific semantic colors
      colors: {
        primary: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f8d3dd",
          300: "#f4aec4",
          400: "#ec7fa8",
          500: "#dc3348",
          600: "#c21b35",
          700: "#a2182e",
          800: "#871a2d",
          900: "#721b2d"
        },
        secondary: {
          50: "#fefce8",
          100: "#fffacd",
          200: "#fff59d",
          300: "#ffef5f",
          400: "#fec844",
          500: "#f8b500",
          600: "#d99500",
          700: "#b27600",
          800: "#6b4500",
          900: "#4a3200"
        },
        // theme semantic tokens used across the markup (generates bg-*, text-*, border-*, etc.)
        "dark-bg": "#1a1a1a",
        "dark-surface": "#2a2a2a",
        "dark-card": "#2a2a2a",
        "light-bg": "#ffffff",
        "light-surface": "#f9fafb",
        // text colors
        "dark-text": "#e5e7eb",
        "dark-text-secondary": "#a0aec0",
        "light-text": "#1f2937",
        "light-text-secondary": "#6b7280"
      },
      fontFamily: {
        sans: ["'Belleza'", "'Segoe UI'", "system-ui", "sans-serif"],
        cookie: ["'Cookie'", "cursive"],
        display: ["'Cookie'", "cursive"]
      },
      // removed backgroundColor/textColor in favor of extending `colors` above so
      // utility classes like `bg-light-bg`, `text-dark-text` are generated.
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      height: {
        'hero': '500px',
        'hero-sm': '400px'
      }
    }
  },
  plugins: []
}
