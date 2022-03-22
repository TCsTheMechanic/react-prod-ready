const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development'

  return {
    entry: path.resolve(__dirname, './src/public/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    devtool: devMode ? 'source-map' : false,
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/public/index.html'),
      }),
      new Dotenv({
        path: path.resolve(__dirname, '.env'),
        systemvars: true,
      }),
    ],
  }
}
