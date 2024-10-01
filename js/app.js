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
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X"; // X - represent player
  winner = "false";
  tie = "false";
  render();
  console.log(init);
};

init();
/*----------------------------- Event Listeners -----------------------------*/
// const squareEls = document
//   .querySelector(".sqr")
//   .addEventListener("click", (event) => {
//     // board = event.target.id;
//     console.log(event.target.id);
//   });
