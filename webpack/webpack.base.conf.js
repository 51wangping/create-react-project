const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 模板
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css 代码打包分离

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath); // 根据相对路径获取绝对路径

const baseConfig = {
    entry: resolvePath('../src/index.tsx'),
    devtool: 'inline-source-map',
    output: {
        path: resolvePath('../dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        },
        {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: 'ts-loader',
              },
              'babel-loader'
            ]
        }, 
        {
            test: /\.svg$/,
            type: 'asset/resource'
        }
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react app',
            template: resolvePath('../public/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: `[name].[hash:8].css`
        }),
    ]
}

module.exports = {
    resolvePath: resolvePath,
    baseConfig: baseConfig,
}