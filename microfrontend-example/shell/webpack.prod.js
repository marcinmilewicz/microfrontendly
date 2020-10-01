const path = require('path');
const { merge } = require('webpack-merge');
const devServer = require('./server');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: devServer.config
});
