'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

for (let i = 0; i < btnOpenModal; i++)
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

function computerMoves(){
  const randomNumber = Math.random();
  let computerMove = " ";

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = "rock";
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = "paper";
  }else (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = "sciscors"
  }
  return computerMove;
}
