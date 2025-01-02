/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      // This ensures unused CSS is purged in production
      '@fullhuman/postcss-purgecss': {
        content: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
          // Add other paths where Tailwind classes are used
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [], // Custom extractor to handle Tailwind's class names
      },
    }),
  },
};

export default config;
