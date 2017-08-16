function ProfileController(auth) {
  this.user = auth.getUser();
}

ProfileController.$inject = ['auth'];

module.exports = ProfileController;
