// Importing some modules from our node_modules into variables
// we can then use.
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Exports this object to CONFIGURE webpack.
module.exports = {
  // This is where webpack starts the bundling process
  entry: './src/index.js',
  // This is where webpack puts the finished files
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {
    // Based on the file type, use a certain kind of loader for
    // that file
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  // Configure our development server to make writing code easier.
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    historyApiFallback: true
  },
  //
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // If you're building webapps, you want to put that javascript
    // bundle inside a HTML page, in a script tag
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}