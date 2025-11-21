module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    /^Mui-/,
  ],
    defaultExtractor: content => typeof content === 'string' ? content.match(/[\w-/:]+(?<!:)/g) || [] : [],
};
