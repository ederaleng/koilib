/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    koinos: "./src/index2.ts"
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
    library: 'koinos',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  optimization: {
    minimize: false,
  },
};
