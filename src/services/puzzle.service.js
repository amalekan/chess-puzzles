/*jshint esversion: 6 */
const baseUrl = 'https://radiant-scrubland-69864.herokuapp.com';
function PuzzleService($http) {
  const postUrl = `${baseUrl/puzzles}`;
  return {
    get: get,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
  };

  function get() {
    return $http.get(postUrl)
                .then(response = response.data.puzzles);
  }

  function getOne(puzzleId) {
    return $http.get(`${postUrl}/${puzzleId}`)
                .then(response => response.data.puzzles[0]);
  }

  function create(puzzle) {
    return $http.post(postUrl, puzzle);
  }

  function deleteOne(puzzleId) {
    return $http.delete(`${postUrl}/${puzzleId}`);
  }
}

PuzzleService.$inject =[`$http`];

module.exports = PuzzleService;
