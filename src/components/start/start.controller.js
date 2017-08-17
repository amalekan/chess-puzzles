

function StartController() {
  const Chess = require('chess.js');
  var ChessBoard = require('chessboardjs');
  var board,
  game = new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'),
  statusEl = $('#status'),
  fenEl = $('#fen'),
  pgnEl = $('#pgn');

  // do not pick up pieces if the game is over
  // only pick up pieces for the side to move
  var onDragStart = function(source, piece, position, orientation) {
  if (game.game_over() === true ||
    (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
    (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
  return false;
  }
  };

  var onDrop = function(source, target) {
  // see if the move is legal
  var move = game.move({
  from: source,
  to: target,
  promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';

  updateStatus();
  };

  // update the board position after the piece snap
  // for castling, en passant, pawn promotion
  var onSnapEnd = function() {
  board.position(game.fen());
  };

  var updateStatus = function() {
  var status = '';

  var moveColor = 'White';
  if (game.turn() === 'b') {
  moveColor = 'Black';
  }

  // checkmate?
  if (game.in_checkmate() === true) {
  // status = 'Game over, ' + moveColor + ' is in checkmate.';
  }

  // draw?
  else if (game.in_draw() === true) {
  // status = 'Game over, drawn position';
  }

  // game still on
  else {
  status = moveColor + ' to move';

  // check?
  if (game.in_check() === true) {
    // status += ', ' + moveColor + ' is in check';
  }
  }

  statusEl.html(status);
  fenEl.html(game.fen());
  pgnEl.html(game.pgn());
    };

  $('#back').on('click', function() {
    game.undo();
    $.extend(true, cfg, {
      position: game.fen()
    });
    board = ChessBoard('board', cfg);
  });

  $('#fwd').on('click', function() {
    game.move();
    $.extend(true, cfg, {
      position: game.fen()
    });
    board = ChessBoard('board', cfg);
  });

  var cfg = {
  draggable: true,
  position: game.fen(),
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
  orientation: game.turn() === 'w'? 'white' : 'black',
  showNotation: true
  };

  board = ChessBoard('board', cfg);


  updateStatus();

};

StartController.$inject = [];

module.exports = StartController;
