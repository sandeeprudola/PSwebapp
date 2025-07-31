// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // This is crucial for React projects
    ],
    theme: {
      extend: {
        animation: {
          'scroll-up': 'scrollUp 12s linear infinite',
        },
        keyframes: {
          scrollUp: {
            '0%': { transform: 'translateY(0%)' },
            '100%': { transform: 'translateY(-50%)' },
          },
        },
      },
    },
    plugins: [],
  };
  