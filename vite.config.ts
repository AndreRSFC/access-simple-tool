/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript';
import svgr from 'vite-plugin-svgr';

const SVGR_OPTIONS = {
  ref: true,
  svgProps: {
    role: 'img',
    fill: 'currentColor',
    className: 'cw-svg'
  }
};

export default defineConfig({
  server: {
    port: 3000,
    host: 'localhost'
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: SVGR_OPTIONS
    }),
    typescript()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'access-simple',
      fileName: (format) => `access-simple.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})