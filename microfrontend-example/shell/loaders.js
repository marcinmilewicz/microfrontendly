const path = require('path');

const JSLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  include: path.resolve(__dirname, './../src'),
  use: {
    loader: 'babel-loader'
  }

};
const ImageLoader = { test: /\.(png|jpg|gif)$/, use: [ 'file-loader' ] };
const StyleLoader = {
  test: /\.(sa|sc|c)ss$/,
  exclude: /header.scss/,
  use: [ 'style-loader', 'css-loader', 'sass-loader' ]
};
const ShellHeaderLoader = {
  test: /header.scss/,
  use: [
    {
      loader: 'style-loader',
      options: {
        insert: (element) => {
          const headerContainer = document.querySelector('#shell-header');
          headerContainer.attachShadow({ mode: 'open' });
          headerContainer.shadowRoot.appendChild(element);
        }
      }
    },
    'css-loader',
    'sass-loader'
  ]
};

module.exports = {
  rules: [ JSLoader, ImageLoader, StyleLoader, ShellHeaderLoader ]
};
