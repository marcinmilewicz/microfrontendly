const path = require('path');
const { merge } = require('webpack-merge');
const devServer = require('./server');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: devServer.config
});
