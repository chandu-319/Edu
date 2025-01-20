const path = require('path');

module.exports = {
  entry: './app.js',  // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  resolve: {
    fallback: {
      // Polyfill the necessary modules
      url: require.resolve('url/'),
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'), 
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      http: require.resolve('stream-http'),
      buffer: require.resolve('buffer'),
      assert: require.resolve('assert/'),
      // Ignore Node.js specific modules for browser compatibility
      fs: false,  // Ignore fs
      async_hooks: false,  // Ignore async_hooks
      net: false,  // Exclude net if not needed
      vm: require.resolve('vm-browserify'),
    },
  },
  externals: {
    // Ignore the problematic server-side modules
    'fs': 'empty',
    'async_hooks': 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Optional: for ES6+ support in browsers
        },
      },
    ],
  },
  devtool: 'source-map',  // Optional: useful for debugging in browser
};
