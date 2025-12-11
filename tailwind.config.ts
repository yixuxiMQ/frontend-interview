// ...existing code...
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  // ...existing code...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  plugins: [typography(), daisyui()],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
// ...existing code...
