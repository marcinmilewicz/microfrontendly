const uuidv1 = require('uuidv1');

module.exports = {
  output: {
    jsonpFunction: 'bar-microapp-' + uuidv1()
  }
};
