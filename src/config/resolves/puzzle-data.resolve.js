function PuzzleDataResolve(PuzzleService) {
  return PuzzleService.get();
}

PuzzleDataResolve.$inject = ['puzzles'];

module.exports = PuzzleDataResolve;
