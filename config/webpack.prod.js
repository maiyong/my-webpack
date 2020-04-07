const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 把导入的css文件导出为一个文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
// const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                ].filter(Boolean)
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contentHash].css"
        }),
        new WebpackParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    comments: false
                },
                compress: {
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true,
                }
            }
        }),
        // new PurgeCSSPlugin({ // TODO 有问题，暂时屏蔽
        //     paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true })
        // }),
        // new DllReferencePlugin({ // 使用splitChunk替代
        //     manifest: path.resolve(__dirname, '../dll/manifest.json')
        // }),
        // new AddAssetHtmlWebpackPlugin({
        //     filepath: path.resolve(__dirname, '../dll/react.dll.js')
        // }),
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({
                extractComments: true
            }),
        ],
        splitChunks: {
            minSize: 100,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    filename: '[name].[hash].js'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true,
                    filename: '[name].[hash].js'
                }
            }
        }
    }
}
