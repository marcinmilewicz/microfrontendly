const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const pkg = require('./package.json');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(__dirname, './lib'),
  }
});
