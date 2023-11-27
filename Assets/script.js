// Initialize variables to keep track of wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Define the options for the game (R for Rock, P for Paper, S for Scissors)
const options = ["R", "P", "S"];

// Function to play the game
var playGame = function () {
  // Prompt the user to input their choice
  let userChoice = prompt("What would you like to choose? === R, P, or S === ");

  if (!userChoice) {
    return;
  }

  userChoice = userChoice.toUpperCase();

  // Generate a random index for the computer's choice using Math.random() and Math.floor()
  const computerChoiceIndex = Math.floor(Math.random() * options.length);

  // Retrieve the computer's choice based on the random index
  const computerChoice = options[computerChoiceIndex];

  window.alert("The computer chose " + computerChoice + "!");

  if (userChoice === computerChoice) {
    window.alert("It's a tie!");
    ties++; // Increment ties count
  } else if (
    (userChoice === "R" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "R")
  ) {
    window.alert("Computer wins! You lose...");
    losses++; // Increment losses countp
  } else {
    console.log("You win! Computer loses...");
    wins++; // Increment wins count
  }

  window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
};

// Call the playGame function to start the game
playGame();
