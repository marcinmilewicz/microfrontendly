const path = require('path');
const pkg = require('./package.json');

module.exports = {
  output: {
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  entry: {
    index: ['./src/index.ts'],
  },
  module: {
    rules: [
      // {
      //   test: /(\.jsx|\.js)$/,
      //   loader: 'babel-loader',
      //   include: path.resolve(__dirname, './src'),
      //   exclude: /(node_modules|bower_components)/,
      // },
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader', options: { onlyCompileBundledFiles: true } }],
        include: path.resolve(__dirname, './src'),
        exclude: /(node_modules|microfrontend-example)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.ts'],
  },
};
