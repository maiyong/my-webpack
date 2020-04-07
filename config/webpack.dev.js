const path = require('path');
// const webpack = require('webpack');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    { loader: "style-loader" }, // 直接把css导入到Dom
                ].filter(Boolean)
            }
        ]
    },
    devServer: {
        // 更改静态文件目录位置
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true, // 开启gzip压缩
        port: 3000,
        // hot: true,
    },
    devtool: 'cheap-module-eval-source-map',
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]
}
