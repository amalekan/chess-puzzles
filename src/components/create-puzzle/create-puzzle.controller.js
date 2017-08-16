/*jshint esversion: 6 */

function CreatePuzzleController() {
  const Chess = require('chess.js');
  const ChessBoard = require('chessboardjs');

  var board = ChessBoard('newboard', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
});

function clickGetPositionBtn() {
  console.log("Current position as an Object:");
  console.log(board.position());

  console.log("Current position as a FEN string:");
  console.log(board.fen());
}

$('#startBtn').on('click', board.start);
$('#clearBtn').on('click', board.clear);
$('#finishBtn').on('click', clickGetPositionBtn);
}
// console.log(fen);
module.exports = CreatePuzzleController;
