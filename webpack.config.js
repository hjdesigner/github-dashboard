const path = require('path');
const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/scripts/app.js'
  },
  output: {
    filename: './dist/js/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { module: false }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
}