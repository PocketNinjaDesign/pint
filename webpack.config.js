const path = require('path');
const ExtractTextplugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const publicPath = '/build/';

module.exports = {
  mode: 'development',
  entry: "./dev/js/index.js",

  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    publicPath: publicPath,
  },

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextplugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [
                require('path').resolve(__dirname, 'node_modules')
              ]
            }
          }]
        })
      },
    ]
  },

  plugins: [
    new ExtractTextplugin({
      filename: 'primary.css',
    }),
    new HtmlWebpackPlugin({
      template: './dev/templates/index.pug',
      inject: true,
    }),
  ],
};