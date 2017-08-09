/*jshint esversion: 6 */
const angular = require('angular');
const ngRoute = require('angular-route');
//components
const BoardComponent = require('./components/chess-board');
//services

const PuzzleService = require('./services/puzzle.service');

//config
// const RoutesConfig = require('./config/routes');

angular.module('chessPuzzles', [ngRoute])
      //  .config(RoutesConfig)
       .component('chessBoard', BoardComponent)
       .factory('puzzles', PuzzleService);
