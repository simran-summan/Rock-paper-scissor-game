let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// taking computer random move
function computerChoice() {
  let random = Math.floor(Math.random() * 3);

  return random;
}

// assigning a number to each move of user
rock.addEventListener("click", () => Clicked(0));
paper.addEventListener("click", () => Clicked(1));
scissors.addEventListener("click", () => Clicked(2));

let userCount = 0;
let compCount = 0;

let result = document.getElementById("result");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let compMove = document.getElementById("comp-move");

// Comparing user and computer move and computing who won
function Clicked(user) {
  let comp = computerChoice();
  console.log("Computer choice");
  console.log(comp);

  if (
    (user === 1 && comp === 1) ||
    (user === 2 && comp === 2) ||
    (user === 0 && comp === 0)
  ) {
    result.innerHTML = "Its a tie";
  } else if (
    (user === 0 && comp === 2) ||
    (user === 1 && comp === 0) ||
    (user === 2 && comp === 1)
  ) {
    result.innerHTML = "You wins";

    userCount++;
  } else if (
    (user === 2 && comp === 0) ||
    (user === 0 && comp === 1) ||
    (user === 1 && comp === 2)
  ) {
    result.innerHTML = "Computer wins";

    compCount++;
  }
  userScore.innerHTML = userCount;
  computerScore.innerHTML = compCount;

  document.getElementById("comp-text").innerHTML = "Computers Move:";
  if (comp === 0) {
    compMove.innerHTML = "&#x1F44A;";
    compMove.style.backgroundColor = "#ff0000";
  } else if (comp === 1) {
    compMove.innerHTML = "&#x1f590;";
    compMove.style.backgroundColor = "#2196f3";
  } else if (comp === 2) {
    compMove.innerHTML = "&#x270c;";
    compMove.style.backgroundColor = "#4caf50";
  }
}
