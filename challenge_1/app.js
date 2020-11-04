var board = [];
var turn = 'X';


function start() {
  board = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  turn = 'X';
  render();
}


function render() {
  board.forEach((play, index) => {
    blocks[index].textContent = play;
  });
};

const blocks = Array.from(document.querySelectorAll('#board td'))
console.log('blocks', blocks);

// event listeners
  //reset button
document.getElementById('reset').addEventListener('click', start);

//turns: X or O

document.getElementById('board').addEventListener('click', callback);

//when clicked:
function callback(event) {
  var clickedIndex = blocks.indexOf(event.target)
  //change the arr at the specified index if it hasn't been clicked yet
  if (board[clickedIndex] === '') {
    board[clickedIndex] = turn;
    console.log(board);
    //change the turn after click
    turn = turn === 'X' ? 'O' : 'X';
    render();
    findWinner(clickedIndex, board[clickedIndex]);
  }
};

//winning helper function
function findWinner(playIndex, winner) {
  for (var i = 0; i < wins.length; i++) {
    var currentArr = wins[i];
    if (currentArr.indexOf(playIndex) !== -1) {
      if (board[currentArr[0]] === board[currentArr[1]] && board[currentArr[1]] === board[currentArr[2]]) {
        console.log(winner);
        window.alert(`${winner} won!`);
        start();
      }
    }
  }
}

var wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

// function findWinner(playIndex, winner) {
//   console.log('finidng!!')
//   for (var key in wins) {
//     if (key === (playIndex.toString())) {
//       console.log([wins[key]])
//       console.log(board[wins[key][0]])
//       console.log(board[wins[key][1]])
//       if (board[wins[key][0]] === board[wins[key][1]] && board[playIndex] === board[wins[key][0]]) {
//         console.log(winner);
//         window.alert(`${winner} won!`);
//         return winner;
//       } else {
//         continue;
//       }
//     }
//   }
// }

// var wins = {
//   '0': [1, 2],
//   '0': [3, 6],
//   '0': [4, 8],
//   '1': [0, 2],
//   '1': [4, 7],
//   '2': [0, 1],
//   '2': [5, 8],
//   '2': [4, 6],
//   '3': [0, 6],
//   '3': [4, 5],
//   '4': [1, 7],
//   '4': [3, 5],
//   '4': [0, 8],
//   '4': [2, 6],
//   '5': [3, 4],
//   '5': [2, 8],
//   '6': [0, 3],
//   '6': [7, 8],
//   '6': [2, 4],
//   '7': [1, 4],
//   '7': [6, 8],
//   '8': [6, 7],
//   '8': [2, 5],
//   '8': [0, 4]
// }

//initialize
start();


// 0 1 2
// 3 4 5
// 6 7 8