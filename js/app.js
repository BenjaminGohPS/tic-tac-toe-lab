/*-------------------------------- Constants --------------------------------*/

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
  for (const b of board) {
    squareEls[b];
    console.log(squareEls[b]);
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
/*----------------------------- Event Listeners -----------------------------*/
// const squareEls = document
//   .querySelector(".sqr")
//   .addEventListener("click", (event) => {
//     // board = event.target.id;
//     console.log(event.target.id);
//   });
