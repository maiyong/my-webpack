const path = require('path');
const merge = require('webpack-merge');
// 开发环境
const dev = require('./webpack.dev');
// 生产环境
const prod = require('./webpack.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = {
    // 基础配置
    entry: './src/index.js',
    output: {
        filename: 'bundl.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
	new HtmlWebpackPlugin({
	    filename: 'index.html',
	    template: path.resolve(__dirname, '../public/index.html'),
	    hash: true,
	    minify: {
		removeAttributeQuotes: true // 删除属性双引号
	    }
    }),
    ]
}
module.exports = (env) => {
   if (env.development) {
        return merge(base, dev);
   } else {
        return merge(base, prod);
   }
}
