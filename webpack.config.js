const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    path: path.resolve(__dirname, "src/main.js"),

  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    open: true,
    port: 8888,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  mode: "development",
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: [
    //       {
    //         loader: path.resolve("./loader.js"),
    //         options: {
    //           name: "kahone",
    //         },
    //       },
    //     ],
    //   },
    // ],
  },
};
