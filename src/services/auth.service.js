/*jshint esversion: 6 */
const baseUrl = 'https://radiant-scrubland-69864.herokuapp.com';
function AuthService($http, $window, jwtHelper) {
  const userUrl = `${baseUrl}/users`;
  const loginUrl = `${baseUrl}/login`;
  const registerUrl = `${baseUrl}/register`;
  const tokenKey = 'puzzle-token';
  const { localStorage } = $window;

  return {
    login: login,
    register: register,
    getToken: getToken,
    saveToken: saveToken,
    isLoggedIn: isLoggedIn,
    getUser: getUser,
    logout: logout
  };

  function logout() {
    localStorage.removeItem(tokenKey);
  }

  function login(user) {
    return $http.post(loginUrl, user)
                .then(response => {
                  const token = response.data.token;
                  saveToken(token);
                });
  }

  function register(user) {
    return $http.post(registerUrl, user);
  }

  function getToken() {
    return localStorage.getItem(tokenKey);
  }

  function isLoggedIn() {
    const token = getToken();
    if(!token) return false;
    const payload = jwtHelper.decodeToken(token);
    const isExpired = jwtHelper.isTokenExpired(token);
    if(isExpired){
      logout();
      return false;
    } else {
      return true;
    }
  }

  function getUser() {
    if(isLoggedIn()){
      const token = getToken();
      const payload = jwtHelper.decodeToken(token);
      const {_id, username} = payload;
      return {_id, username};
    } else {
      return null;
    }
  }

  function saveToken(token) {
    localStorage.setItem(tokenKey, token);
  }
}

AuthService.$inject = ['$http', '$window', 'jwtHelper'];
module.exports = AuthService;
