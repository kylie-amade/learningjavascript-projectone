"use strict";

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

document.querySelector(".rock").addEventListener("click", () => {
  playGame("rock");
});
document.querySelector(".paper").addEventListener("click", () => {
  playGame("paper");
});
document.querySelector(".scissors").addEventListener("click", () => {
  playGame("scissors");
});
document.querySelector(".reset").addEventListener("click", resetGame);

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === computerMove) {
    result = "It's a Tie!";
    score.ties += 1;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You Win!";
    score.wins += 1;
  } else {
    result = "You Lose!";
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You chose ${playerMove}, Computer chose ${computerMove}.`;
}

function updateScore() {
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function resetGame() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
}
