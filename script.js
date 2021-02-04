document.addEventListener("DOMContentLoaded", start);

let result;
let userSelection;
let computerChoice;

function start() {
  console.log("start");

  getUserSelection();
}

function getUserSelection() {
  console.log("getUserSelection");

  //add eventlisteners to each button
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      //text hidden
      document.querySelector("#win").classList.add("hidden");
      document.querySelector("#lose").classList.add("hidden");
      document.querySelector("#draw").classList.add("hidden");
      //players have default fist image
      document.querySelectorAll(".player").forEach((player) => {
        player.style.backgroundImage = "url('hand_rock.png')";
      });
      //set 'userSelection' to the chosen selection
      if (button.classList.contains("rock")) {
        console.log("rock chosen");
        userSelection = "rock";
      } else if (button.classList.contains("scissors")) {
        console.log("scissors chosen");
        userSelection = "scissors";
      } else if (button.classList.contains("paper")) {
        console.log("paper chosen");
        userSelection = "paper";
      }

      //get computers choice
      makeRandomComputerChoice();
    });
  });
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");

  //array of options for computer
  let options = ["rock", "paper", "scissors"];

  //random choice
  computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log("computer chose: " + computerChoice);

  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");

  //add animation class to both players
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.add("shake");
  });

  //when animation end -> determine winner
  document
    .querySelector(".player")
    .addEventListener("animationend", determineWinner);
}

function determineWinner() {
  console.log("determineWinner");
  //remove animation class from both players
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.remove("shake");
  });

  //change images of hands to choice
  document.querySelector("#player1").style.backgroundImage =
    "url('hand_" + userSelection + ".png')";

  document.querySelector("#player2").style.backgroundImage =
    "url('hand_" + computerChoice + ".png')";

  //who won?
  if (userSelection == computerChoice) {
    result = "draw";
  } else if (
    (userSelection == "rock" && computerChoice == "scissors") ||
    (userSelection == "scissors" && computerChoice == "paper") ||
    (userSelection == "paper" && computerChoice == "rock")
  ) {
    result = "win";
  } else if (
    (userSelection == "rock" && computerChoice == "paper") ||
    (userSelection == "scissors" && computerChoice == "rock") ||
    (userSelection == "paper" && computerChoice == "scissors")
  ) {
    result = "lose";
  }

  console.log("result is: " + result);
  showResult();
}

function showResult() {
  console.log("showResult");

  //show end text
  if (result == "win") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (result == "lose") {
    document.querySelector("#lose").classList.remove("hidden");
  } else if (result == "draw") {
    document.querySelector("#draw").classList.remove("hidden");
  }
}
