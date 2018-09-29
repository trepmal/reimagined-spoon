var webpack = require("webpack");

const path = require('path');

module.exports = {

  output: {
    path: path.resolve("dist/assets"),
    filename: "bundle.js",
    publicPath: "assets"
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }

}