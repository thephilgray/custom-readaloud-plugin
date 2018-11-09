const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('config');
const packagejs = require('./package.json');

/*-------------------------------------------------*/

module.exports = {
  // webpack optimization mode
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',

  // entry file(s)
  entry: ['./src/index.js'],

  // output file(s) and chunks
  output: {
    library: 'CustomReadAloud',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: `custom-read-aloud-${packagejs.version}.js`,
    publicPath: config.get('publicPath')
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],

  // development server configuration
  devServer: {
    // must be `true` for SPAs
    historyApiFallback: true,

    // open browser on server start
    open: config.get('open')
  },

  // generate source map
  devtool: config.get('sourcemap')
    ? 'production' === process.env.NODE_ENV
      ? 'source-map'
      : 'cheap-module-eval-source-map'
    : false
};
