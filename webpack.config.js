const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map', // http://blog.teamtreehouse.com/introduction-source-maps
  entry: {
    app: [
      'babel-polyfill', // https://babeljs.io/docs/usage/polyfill/
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
