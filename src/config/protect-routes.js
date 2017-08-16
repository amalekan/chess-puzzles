function RouteProtection(auth, $location, $rootScope){
  $rootScope.$on('$routeChangeStart', (event, nextRoute, currentRoute) => {
 	if(nextRoute.access.protected && !auth.isLoggedIn()){
	   $location.path('/login');
	}
  });
}


RouteProtection.$inject = ['auth', '$location', '$rootScope'];

module.exports = RouteProtection;
