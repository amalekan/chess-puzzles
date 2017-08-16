function LogoutController(auth, $location) {
  this.logout = logout;

  function logout() {
    auth.logout();
    $location.path('/');
  }
}

LogoutController.$inject = ['auth', '$location'];
module.exports = LogoutController;
