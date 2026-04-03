import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression (fallback for older browsers)
    compression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression (better compression ratio, smaller files)
    compression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: 'brotli',
      ext: '.br',
    })
  ],
  assetsInclude: ['**/*.JPG', '**/*.gltf', '**/*.glb', '**/*.data'],
  build: {
    // Enable sourcemaps for debugging but keep them small with inline option
    sourcemap: false,
    rollupOptions: {
      output: {
        // Much more aggressive code splitting
        manualChunks: {
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'framer': ['framer-motion'],
          'ui': ['react-tilt', 'react-vertical-timeline-component'],
          'router': ['react-router-dom']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    },
    // Increase chunk size limit since we have heavy 3D assets
    chunkSizeWarningLimit: 600,
    // Optimize CSS minification
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    }
  }
})
