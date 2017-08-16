function RegisterController(auth, $location) {
  this.user = {};
  this.errors = {};
  this.register = register;
  this.clearErrors = clearErrors;

  function clearErrors() {
    this.errors = {};
  }

  function register() {
    auth.register(this.user)
        .then(() => {
          $location.path('/login');
        })
        .catch(() => {
          this.errors.signupError = 'Please complete all of the missing fields.';
        });
  }
}

RegisterController.$inject = ['auth', '$location'];

module.exports = RegisterController;
