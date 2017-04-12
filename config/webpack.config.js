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
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader?modules,localIdentName=[path][name]--[local]!sass-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.yml$/, loader: 'json-loader!yaml-loader' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
}