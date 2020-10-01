const uuidv1 = require('uuidv1');

module.exports = {
  output: {
    jsonpFunction: 'foo-microapp-' + uuidv1()
  }
};
