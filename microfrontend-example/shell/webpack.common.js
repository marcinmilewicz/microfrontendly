const path = require('path');
const { plugins } = require('./plugins');

const { rules } = require('./loaders');

module.exports = {
  entry: {
    index: [ './src/index.js' ]
  },
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: '[name].bundle.js'
  },
  plugins,
  module: {
    rules
  }
};
