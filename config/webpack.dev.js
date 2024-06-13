const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // 输出
    output: {
        // 开发模式没有输出，不需要指定输出目录
        path: undefined,
        // clean: true, 开发模式没有输出，不需要清空输出结果
    },
    // 开发服务器
    devServer: {
        // 启动服务器域名
        host: "localhost",
        // 启动服务器端口号
        port: "3000",
        // 是否自动打开浏览器
        open: true,
    },
    // source-map
    devtool: "cheap-module-source-map",
    // 模式
    mode: "development",
});
