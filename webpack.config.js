const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeModules = {};
fs.readdirSync("node_modules")
  .filter((x) => {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  // entry: "./src/app.js",
  entry: path.join(__dirname, "src/app.js"),
  target: "node",
  output: {
    path: path.join(__dirname, "build"),
    filename: "backend.js",
  },
  externals: nodeModules,
  devtool: "sourcemap",
  node: {
    console: false,
    global: false,
    process: false,
    __filename: false,
    __dirname: false,
    Buffer: false,
    setImmediate: false

    // See "Other node core libraries" for additional options.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
      parallel: true,
      compress: {
        warnings: false,
        drop_console: true,
      }
    }),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // compile time plugins
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "\"production\"",
    }),
  ]
};
