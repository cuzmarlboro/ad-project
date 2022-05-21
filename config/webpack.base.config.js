// 开发环境和生产环境共用的基础 webpack 配置文件

const path = require("path");

const webpackBaseConfig = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[fullhase:4].js",
  },
  resolve: {
    // 主要用于文件解析（引入文件时省略扩展名）
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: "babel-loader",
      },
      {
        test: /\.(sc|c)ss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
module.exports = webpackBaseConfig;
