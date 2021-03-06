const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    library: "ReservationsModule"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}