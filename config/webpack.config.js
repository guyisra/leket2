const path = require('path');
const webpack = require('webpack')
module.exports = {
  devtool: 'source-map',
  
  entry: './src/frontend/index.js',

  output: {
    path: path.resolve('src/public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules,localIdentName=[path][name]--[local]', { loader: 'postcss-loader', options: { plugins: () => ([require('rtlcss')]) } }, 'sass-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: { plugins: () => ([require('rtlcss')]) } } ] },
      { test: /\.yml$/, use: ['json-loader', 'yaml-loader'] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
}