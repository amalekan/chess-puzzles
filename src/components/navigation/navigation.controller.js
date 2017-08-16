function NavigationController(auth) {
  this.isLoggedIn = isLoggedIn;
  this.isNotLoggedIn = isNotLoggedIn;

  function isLoggedIn() {
    return auth.isLoggedIn();
  }

  function isNotLoggedIn() {
    return !auth.isLoggedIn();
  }
}

NavigationController.$inject = ['auth'];
module.exports = NavigationController;
