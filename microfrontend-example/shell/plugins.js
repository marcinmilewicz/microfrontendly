const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CleanWebpack = new CleanWebpackPlugin();
const HtmlWebpack = new HtmlWebpackPlugin({
  template: './src/index.html',
  inject: true,
  chunks: [ 'index' ],
  filename: 'index.html'
});
const MiniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

module.exports = {
  plugins: [ CleanWebpack, HtmlWebpack, MiniCssExtract ]
};
