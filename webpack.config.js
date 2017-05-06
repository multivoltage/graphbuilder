// took from https://italonascimento.github.io/configuring-a-basic-environment-for-javascript-development/

const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildExit:['node dist/bundle.js']
    })
  ],
}
