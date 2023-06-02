const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
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
