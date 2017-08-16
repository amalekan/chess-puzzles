function SelectedPuzzleResolve(PuzzleService, $route) {
  const puzzleId = $route.current.params.puzzleId;
  return PuzzleService.getOne(puzzleId);
}

SelectedPuzzleResolve.$inject = ['puzzles', '$route'];

module.exports = SelectedPuzzleResolve;
