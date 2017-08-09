/*jshint esversion: 6 */
const PuzzleDataResolve = require('./resolves/puzzle-data.resolve');

function RouterConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<board puzzles=$resolve.puzzleData></board>',
      resolve: {
        puzzleData: PuzzleDataResolve
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}

RouterConfig.$inject = ['routeProvider'];

module.exports = RouterConfig;
