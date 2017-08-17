/*jshint esversion: 6 */
const controller = require('./start.controller');
const template = require('./start.html');

const component = {
  controller,
  template,
  bindings: {
    puzzles: '<'
  }
};

module.exports = component;
