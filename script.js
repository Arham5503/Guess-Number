"use strict";
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highscore = 0;
const displayMessage = function (msg) {
  document.querySelectorAll(".message")[0].textContent = msg;
};
document.querySelectorAll(".check")[0].addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    ("⛔⛔Not Slected a Number!");
  } else if (guess === guessNumber) {
    displayMessage("🏆🏆Correct Number!!🎉🎉🎉");
    document.querySelector(".number").textContent = guessNumber;
    document.querySelector("body").style.background = "#60b347";
    if (scores > highscore) {
      highscore = scores;
      document.querySelector(".highScore").textContent = highscore;
    }
  } else if (guess !== guessNumber) {
    if (scores > 0) {
      displayMessage(guess > guessNumber ? "To High📉" : "To Low📈");
      scores--;
      document.querySelector(".score").textContent = scores;
    } else {
      displayMessage("You Lose the game");
      document.querySelector("body").style.background = "red";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  scores = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = scores;
  document.querySelector("body").style.background = "rgba(27, 27, 27, 0.831)";
  document.querySelector(".guess").value = "";
});
