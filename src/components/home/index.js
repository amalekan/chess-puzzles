/*jshint esversion:6 */
const controller = require('./home.controller');
const template = require('./home.html');

const component = {
  controller,
  template,
  bindings: {
    puzzles: '<'
  }
};

module.exports = component;
