var path = require('path');

module.exports = {
  context: __dirname,
  entry: './assets/javascripts/study_hello_backbone.jsx',
  output: {
    filename: 'study_hello_backbone.bundle.js',
    path: '../public/'
  },
  resolve: {
    root: [path.join(__dirname, "assets/javascripts")],
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
  { test: /\.jsx$/, loader: 'jsx-loader' },
  { test: /\.css$/, loader: "style-loader!css-loader" },
  { test: /\.otf$/, loader: "url-loader?mimetype=font/opentype" },
  { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
  ]

}}
