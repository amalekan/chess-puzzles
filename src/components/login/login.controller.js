function LoginController(auth, $location) {
  this.user = {};
  this.errors = {};
  this.login = login;
  this.clearErrors = clearErrors;

  function clearErrors() {
    this.errors = {};
  }

  function login() {
    auth.login(this.user)
        .then(() => {
          $location.path('/profile');
        })
        .catch(() => {
          this.user.password = '';
          this.errors.loginFail = 'The username/password combination is incorrect.';
        });
  }
}

LoginController.$inject = ['auth', '$location'];

module.exports = LoginController;
