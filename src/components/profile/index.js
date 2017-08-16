const controller = require('./profile.controller');
const template = require('./profile.html');

const component = {
  controller,
  template,
  bindings: {
    puzzles: '<'
  }
};

module.exports = component;
