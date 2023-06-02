const path = require('path')
module.exports = {
  devServer: {
    /* ... */
  },
  // ...
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    plugins: {
      add: [
        /* ... */
      ],
      remove: [
        /* ... */
      ]
    },
    configure: {
      /* ... */
    }
  }
}
