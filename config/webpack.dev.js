const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        // 更改静态文件目录位置
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true, // 开启gzip压缩
        port: 3000
    }
}
