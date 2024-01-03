module.exports = {
  content: [
    '../../apps/native/**/*.{js,jsx,tsx}',
    '../../../apps/native/**/*.{js,jsx,tsx}',
    '../../packages/**/*.{js,jsx,tsx}',
    '../packages/**/*.{js,jsx,tsx}',
    '../apps/native/**/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
