import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base:"/fluid_cursor/"
// })
export default defineConfig({
  base: './',
  plugins: [react()],
});
