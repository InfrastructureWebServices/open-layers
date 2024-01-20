export default {
  base: '/index/static/maps',
  build: {
    sourcemap: true,
    outDir: './dist',    
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }

    }
  }
}
