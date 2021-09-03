const {
    merge
} = require('webpack-merge');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); // 清理原来的打包文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const {
    baseConfig
} = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `[name].[hash:8].css`
        }),
        new CssMinimizerWebpackPlugin(),
    ]
})