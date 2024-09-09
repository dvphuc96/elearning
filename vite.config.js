import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import path from 'path'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      assets: path.resolve("./src/assets"),
      components: path.resolve("./src/components"),
      constant: path.resolve("./src/constant"),
      guards: path.resolve("./src/guards"),
      hooks: path.resolve("./src/hooks"),
      pages: path.resolve("./src/pages"),
      router: path.resolve("./src/router"),
      schema: path.resolve("./src/schema"),
      services: path.resolve("./src/services"),
      store: path.resolve("./src/store"),
      types: path.resolve("./src/types"),
      utils: path.resolve("./src/utils")
    },
  },
})