var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Dev-server config to automatically reload and serve for testing
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    contentBase: path.join(__dirname, "dist"),
    watch: true,
    stats: {
      chunkModules: false
    },
  },
  // The different entry points to our bundle.
  // Vendor contains all the common angular 2 modules
  // Polyfills contains core-js es6 polyfills and zone.js
  // Main will contain our main code.
  entry: {
    'polyfills': path.resolve(__dirname, "app/polyfills.ts"),
    'vendor': path.resolve(__dirname, "app/vendor.ts"),
    'app': path.resolve(__dirname, "app/main.ts")
  },
  // Output configuration.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    sourcemapFilename: '[name].map'
  },
  // Type of files to look automatically when importing.
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  // Loaders to apply
  module: {
    loaders: [
      // Support for .ts files
      // Here angular 2 template loader is used to load into the component ts the
      // html inline as a string, instead of doing a different request to the server.
      // Converts templateUrl: 'app.html' into template: require('app.html'), which
      // will inject the html directly in the .ts file when passing through the html loader.
      {
        test: /\.ts?$/,
        loader: ['awesome-typescript-loader', 'angular2-template-loader'],
        include: [ path.resolve(__dirname, "./app") ]
      },
      // loads html into the script as a string when requiring html files.
      {
        test: /\.html$/,
        loader: 'html',
        exclude: [ path.resolve(__dirname, "index.html") ]
      }
    ]
  },

  plugins: [
    // Plugin that takes the html and injects our 3 bundles into it, just before the closing </body> tag.
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]
}
