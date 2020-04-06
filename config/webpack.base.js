const path = require('path');
const merge = require('webpack-merge');
// 开发环境
const dev = require('./webpack.dev');
// 生产环境
const prod = require('./webpack.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env) => {
    const base = {
        // 基础配置
        entry: './src/index.js',
        output: {
            filename: 'bundl.[contentHash].js',
            path: path.resolve(__dirname, '../dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: "eslint-loader",
                },
                {
                    oneOf: [
                        {
                            test: /\.(c|le)ss$/,
                            use: [
                                { loader: "css-loader" }, // 解析CSS文件后，使用import加载，并且返回CSS代码
                                {
                                    loader: "postcss-loader",
                                    options: {
                                        plugins: () => [
                                          autoprefixer({
                                            browsers: [
                                              '>1%',
                                              'last 5 versions',
                                              'Firefox ESR',
                                              'not ie < 9', // React doesn't support IE8 anyway
                                              'iOS >= 8',
                                              'Android >= 4',
                                            ],
                                          flexbox: 'no-2009',
                                          }),
                                        ],
                                    }
                                },
                                { loader: "less-loader" },
                            ].filter(Boolean)
                        },
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        {
                            loader: require.resolve('file-loader'),
                            // Exclude `js` files to keep "css" loader working as it injects
                            // its runtime that would otherwise be processed through "file" loader.
                            // Also exclude `html` and `json` extensions so they get processed
                            // by webpacks internal loaders.
                            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        {
                            test: /\.js$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: "babel-loader"
                        }
                    ]
                }
            ],
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
        ],
        resolve: {
            extensions: [".js", ".jsx", ".json", ".css", ".ts", ".tsx", ".vue"]
        },
    }
   if (env.development) {
        return merge(dev, base);
   } else {
        return merge(prod, base);
   }
}
