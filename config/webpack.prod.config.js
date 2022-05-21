// 生产环境 webpack 配置文件

const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackConfigBase = require("./webpack.base.config");

const webpackConfigDev = {
  mode: "development",
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React APP",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
