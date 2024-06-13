const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "../dist"),
    // 自动将上次打包目录资源清空
    clean: true,
  },
  plugins: [
    // css压缩
    new CssMinimizerPlugin(),
  ],
  // 模式
  mode: "production",
});
