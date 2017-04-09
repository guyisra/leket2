const path = require('path');

module.exports = {
  entry: './src/frontend/index.js',
  output: {
    path: path.resolve('src/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(css|scss)$/, loader: 'style-loader!css-loader?modules,localIdentName=[path][name]--[local]!sass-loader'}
    ]
  }
}