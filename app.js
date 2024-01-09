let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

// taking computer random move
function computerChoice() {
  const moves = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// assigning a number to each move of user
rock.addEventListener("click", () => Clicked('Rock'));
paper.addEventListener("click", () => Clicked('Paper'));
scissors.addEventListener("click", () => Clicked('Scissors'));
lizard.addEventListener("click", () => Clicked('Lizard'));
spock.addEventListener("click", () => Clicked('Spock'));

let userCount = 0;
let compCount = 0;

let result = document.getElementById("result");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let compMove = document.getElementById("comp-move");

// Map action verb for proper output
const verbMap = {
  'Rock': {
    'Scissors': 'crushes',
    'Lizard': 'crushes'
  },
  'Paper': {
    'Rock': 'covers',
    'Spock': 'disproves'
  },
  'Scissors': {
    'Paper': 'cuts',
    'Lizard': 'decapitates'
  },
  'Lizard': {
    'Paper': 'eats',
    'Spock': 'poisons'
  },
  'Spock': {
    'Rock': 'vaporizes',
    'Scissors': 'smashes'
  }
};

// Comparing user and computer move and computing who won
function Clicked(player1) {
  let player2 = computerChoice();
  /*  Here you can use OpenAI as an opponent, remember don't put your API key in Public Code :D
  computerOpenAIMove().then((move) => {
    return move;
  });
  */
  console.log("Computer choice");
  console.log('P1: '+player1);
  console.log('P2: '+player2);

  if (player1 === player2) {
    result.innerHTML = 'It\'s a tie!';
  } else if (verbMap[player1] && verbMap[player1][player2]) {
    userCount++;
    const verb = verbMap[player1][player2];
    result.innerHTML =  `Player 1 (${player1}) ${verb} Player 2 (${player2})! - You Win!`;
  } else {
    compCount++;
    const verb = verbMap[player2][player1];
    result.innerHTML =  `Player 2 (${player2}) ${verb} Player 1 (${player1})! You Lose!`;
  }

  userScore.innerHTML = userCount;
  computerScore.innerHTML = compCount;

  document.getElementById("comp-text").innerHTML = "Computers Move:";
  if (player2 === 'Rock') {
    compMove.innerHTML = "&#x1F44A;";
    compMove.style.backgroundColor = "#ff0000";
  } else if (player2 === 'Paper') {
    compMove.innerHTML = "&#x1f590;";
    compMove.style.backgroundColor = "#2196f3";
  } else if (player2 === 'Scissor') {
    compMove.innerHTML = "&#x270c;";
    compMove.style.backgroundColor = "#4caf50";
  } else if (player2 === 'Lizard') {
  compMove.innerHTML = "&#129422;";
  compMove.style.backgroundColor = "#ff0000";
  } else if (player2 === 'Spock') {
    compMove.innerHTML = "&#128406;";
    compMove.style.backgroundColor = "#ff0000";
  }
}

// Assuming you have an OpenAI API key
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

async function computerOpenAIMove() {
  const prompt = "Play Rock, Paper, Scissors, Lizard, Spock!";
  const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

  const OpenAIAPI = require('openai'); // Assuming you have the OpenAI npm package installed
  const openai = new OpenAIAPI(OPENAI_API_KEY);

  try {
    const response = await openai.complete({
      prompt: prompt,
      max_tokens: 1,
      n: 1,
      stop: ['\n'],
      temperature: 0.5,
      choices: choices
    });

    const computerChoice = response.data.choices[0].text.trim();
    return computerChoice;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
