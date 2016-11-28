var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    contentBase: path.join(__dirname, "dist"),
    watch: true,
    stats: {
      chunkModules: false
    },
  },
  entry: {
    'polyfills': path.resolve(__dirname, "app/polyfills.ts"),
    'app': path.resolve(__dirname, "app/main.ts")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    sourcemapFilename: '[name].map'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // Support for .ts files
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        include: [ path.resolve(__dirname, "./app") ]
      },
      // Support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [ path.resolve(__dirname, "index.html") ]
      }
    ]
  },

  plugins: [
    // Generate the index.html
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]
}
