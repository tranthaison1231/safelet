import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import generouted from '@generouted/react-router/plugin'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), generouted()]
})
