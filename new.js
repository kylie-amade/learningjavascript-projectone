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


//Rock,paper,scissors
const score = {
}
document.querySelector(".rock").addEventListener("click" ,function(){
  playGame("rock");
} ) ;
document.querySelector(".paper").addEventListener("click", function(){
  playGame("paper");
} ) ;
document.querySelector(".scissors").addEventListener("click" , function(){
  playGame("paper");
} ) ;

function playGame(playerMove) {
  const computerMove = pickComputerMoves();
 

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      alert("You Lose");
    } else if (computerMove === "paper") {
      alert("You Win");
    } else if (computerMove === "scissors") {
      alert("Tie");
    }
  } else if (playerMove === "paper") {
   if (computerMove === "rock") {
     alert("You Lose");
   } else if (computerMove === "paper") {
     alert("You Win");
   } else if (computerMove === "scissors") {
     alert("Tie");
   }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      alert("You Lose");
    } else if (computerMove === "paper") {
      alert("You Win");
    } else if (computerMove === "scissors") {
      alert("Tie");
    }
  }
  
  
}

function pickComputerMoves() {
  const randomNumber = Math.random();
  let computerMove = " ";
 
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = "scissors";
  }
  return computerMove;
   
}
