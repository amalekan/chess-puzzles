const PuzzleDataResolve = require('./resolves/puzzle-data.resolve');
const SelectedPuzzleResolve = require('./resolves/selected-puzzle.resolve');

function RouterConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<home></home>',
      access: {
        protected: false
      }
    })
    .when('/register', {
      template: '<register></register>',
      access: {
        protected: false
      }
    })
    .when('/login', {
      template: '<login></login>',
      access: {
        protected: false
      }
    })
    .when('/profile', {
      template: '<profile></profile>',
      access: {
        protected: true
      }
    })
    .when('/create', {
      template: '<create-puzzle></create-puzzle>',
      access: {
        protected: true
      }
    })
    .when('/start', {
      template:'<start puzzles ="$resolve.puzzleData"></start>',
      // resolve: {
      //   puzzleData: PuzzleDataResolve
      // },
      access: {
        protected: true
      }
    })
    .otherwise({
      redirectTo: '/',
      access: {
        protected: false
      }
    });
}

RouterConfig.$inject = ['$routeProvider'];

module.exports = RouterConfig;
