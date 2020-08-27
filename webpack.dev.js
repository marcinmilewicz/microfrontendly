const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const pkg = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: `${pkg.name}.js`,
    path: path.resolve(__dirname, './lib'),
  },
});
