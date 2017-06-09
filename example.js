let exampleState = {
  'currentTurn': 'r', // or "y"
  'player1Name': 'Zabij',
  'player2Name': 'atomiczzzzzzzzzzzz',
  'boardObj': {
    a1: null,
    b2: 'y',
    c4: 'y'
    // ....
  },
  'board': [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    ['y', 'r', 'y', null, null, null]
  ]
}

function dropPiece (colIdx, pieceColor) {}
function isColumnFull (colIdx) {}
function startNewGame () {}

// Hint: Just like you render constantly,
//       you can save constantly.
// Double Hint: Use the same state object.

function gameStatus (board) {}
// - "in_progress"
// - "tie"
// - "winner_red"
// - "winner_yellow"

const emptyBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

console.assert(gameStatus(emptyBoard) === 'in_progress')

const tieBoard1 = [
  ['y', 'r', 'y', 'r', 'y', 'r']
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r']
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

console.assert(gameStatus(tieBoard1) === 'tie')

// TODO: make some more tie boards

const redRowWin1 = [
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

console.assert(gameStatus(redRowWin1) === 'winner_red')

const redColWin1 = [
  ['r', 'r', 'r', 'r', null, null],
  ['y', 'y', 'y', null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

console.assert(gameStatus(redColWin1) === 'winner_red')
