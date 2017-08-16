const angular = require('angular');
const ngRoute = require('angular-route');
const angularJwt = require('angular-jwt');
//components
const BoardComponent = require('./components/chess-board');
const CreateComponent = require('./components/create-puzzle');
const HomeComponent = require('./components/home');
const NavigationComponent = require('./components/navigation');
const ProfileComponent = require('./components/profile');
const LoginComponent = require('./components/login');
const LogoutComponent = require('./components/logout');
const RegisterComponent = require('./components/register');
//services
const AuthService = require('./services/auth.service');
const PuzzleService = require('./services/puzzle.service');

//config
const RoutesConfig = require('./config/routes');
const RouteProtector = require('./config/protect-routes');

angular.module('chessPuzzles', [ ngRoute, angularJwt ])
       .config(RoutesConfig)
       .run(RouteProtector)
       .component('chessBoard', BoardComponent)
       .component('createPuzzle', CreateComponent)
       .component('home', HomeComponent)
       .component('login', LoginComponent)
       .component('logout', LogoutComponent)
       .component('navigation', NavigationComponent)
       .component('register', RegisterComponent)
       .component('profile', ProfileComponent)
       .factory('puzzles', PuzzleService)
       .factory('auth', AuthService);
