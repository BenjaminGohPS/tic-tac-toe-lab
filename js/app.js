/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

/*---------------------------- Variables (state) ----------------------------*/

let board = [];
let turn = "";
let winner = "";
let tie = "";
/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");

const messageEl = document.querySelector("#message");

const resetBtnEl = document.querySelector("#reset");

// checks
// console.log(squareEls);
// console.log(messageEl);
// console.log(document.getElementById(1));
// squareEls[1].innerText = 'X';
// console.log(squareEls[1]);
// console.log(document.querySelector(".board"));
// console.log(document.querySelector("#reset"));

/*-------------------------------- Functions --------------------------------*/

const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X"; // X - represent player
  winner = "false";
  tie = "false";
  render();
};

const render = () => {
  updateBoard();
  updateMessage();
};

// using the id method
// const updateBoard = () => {
//   for (let i = 0; i < board.length; i++) {
//     if (board[i] === "X") {
//       document.getElementById(`${i}`).innerText = "X";
//     } else if (board[i] === "O") {
//       document.getElementById(`${i}`).innerText = "O";
//     } else {
//     }
//   }
// };

const updateBoard = () => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "X") {
      squareEls[i].innerText = "X";
    } else if (board[i] === "O") {
      squareEls[i].innerText = "O";
    } else {
      squareEls[i].innerText = "";
    }
  }
};

const updateMessage = () => {
  if (winner === "false" && tie === "false") {
    messageEl.innerText = `Player ${turn} turn`;
  } else if (winner === "false" && tie === "true") {
    messageEl.innerText = "We have a tie";
  } else {
    messageEl.innerText = `Player ${turn} have won`;
  }
};

const placePiece = (index) => {
  board[index] = turn;
};

const checkForWinner = () => {
  for (const winningCombo of winningCombos) {
    if (
      board[winningCombo[0]] !== "" &&
      board[winningCombo[0]] === board[winningCombo[1]] &&
      board[winningCombo[0]] === board[winningCombo[2]]
    ) {
      winner = "true";
    }
  }
};

const checkForTie = () => {
  if (winner === "true") {
    return;
  } else if (board.includes("")) {
    tie = "false";
  } else {
    tie = "true";
  }
};

const switchPlayerTurn = () => {
  if (winner === "true") {
    return;
  } else {
    if (turn === "X") {
      turn = "O";
      messageEl.innerText = "Player O turn";
    } else {
      turn = "X";
      messageEl.innerText = "Player X turn";
    }
  }
};

const handleClick = (event) => {
  const squareIndex = event.target.id;

  if (board[squareIndex] !== "") {
    return;
  }
  if (winner === "true") {
    return;
  }

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
};

init();

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector(".board").addEventListener("click", handleClick);
resetBtnEl.addEventListener("click", init);
