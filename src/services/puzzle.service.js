/*jshint esversion: 6 */
const baseUrl = 'https://radiant-scrubland-69864.herokuapp.com';
function PuzzleService($http) {
  const puzzleUrl = `${baseUrl/puzzles}`;
  return {
    get: get,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
  };

  function get() {
    const config = getHeaderConfig();
    return $http.get(puzzleUrl, config)
                .then(response => response.data.puzzles);
  }

  function getOne(puzzleId) {
    const config = getHeaderConfig();
    return $http.get(`${puzzleUrl}/${puzzleId}`, config)
                .then(response => response.data.puzzles[0]);
  }

  function create(puzzle) {
    const config = getHeaderConfig();
    return $http.post(puzzleUrl, puzzle, config);
  }

  function deleteOne(puzzleId) {
    const config = getHeaderConfig();
    return $http.delete(`${puzzleUrl}/${puzzleId}`, config);
  }

  function getHeaderConfig() {
    return {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    };
  }
}

PuzzleService.$inject =['$http', 'auth'];

module.exports = PuzzleService;
