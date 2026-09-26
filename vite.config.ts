import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: '@/styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@', replacement: path.resolve(__dirname, './src/app') },
      { find: /^(@[^/]+\/[^@/]+)@[\d.]+(.*)$/, replacement: '$1$2' },
      { find: /^([^@/]+)@[\d.]+(.*)$/, replacement: '$1$2' },
    ],
  },
})
