const config = {
  hot: true,
  port: 9000,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization'
  }
};

module.exports = {
  config
};
