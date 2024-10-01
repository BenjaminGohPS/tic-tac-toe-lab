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

let board = "";
let turn = "";
let winner = "";
let tie = "";
/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector(".board");

const messageEl = document.querySelector("#message");

// checks
console.log(squareEls);
console.log(messageEl);
console.log(board.id);
/*-------------------------------- Functions --------------------------------*/

const init = () => {
  board = ["X", "X", "", "", "", "", "", "", ""];
  turn = "X"; // X - represent player
  winner = "false";
  tie = "false";
  render();
  console.log(init); // checks
};

const render = () => {
  updateBoard();
  updateMessage();
};

const updateBoard = () => {
  //   //   for (const b of board) {
  //   // squareEls[b];
  //   // console.log(squareEls[b]);
  //   for (const b of board) {
  //     board.forEach((element) => (squareEls.innerText = "X"));
  //   }
  //   //   board.forEach((element) => (squareEls.innerText = "X"));

  for (let i = 0; i < board.length; i++) {
    squareEls.id[i].innerText = "X";
  }
};

const updateMessage = () => {
  if (winner === "false" && tie === "false") {
    messageEl.innerText = "Player turn";
  } else if (winner === "false" && tie === "true") {
    messageEl.innerText = "We have a tie";
  } else {
    messageEl.innerText = "Player have won";
  }
};

init();
console.log(`This is in board: ${board}`);

/*----------------------------- Event Listeners -----------------------------*/
// const squareEls = document
//   .querySelector(".sqr")
//   .addEventListener("click", (event) => {
//     // board = event.target.id;
//     console.log(event.target.id);
//   });
