function HomeController(auth) {
  this.isLoggedIn = isLoggedIn;
  this.isNotLoggedIn = isNotLoggedIn;
  this.user = auth.getUser();
  function isLoggedIn() {
    return auth.isLoggedIn();
  }

  function isNotLoggedIn() {
    return !auth.isLoggedIn();
  }
}

HomeController.$inject = ['auth'];

module.exports = HomeController;
