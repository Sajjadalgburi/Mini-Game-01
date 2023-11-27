// Initialize variables to keep track of wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Define the options for the game (R for Rock, P for Paper, S for Scissors)
const options = ["R", "P", "S"];

// Function to play the game
var playGame = function () {
  // Generate a random index for the computer's choice using Math.random() and Math.floor()
  const computerChoiceIndex = Math.floor(Math.random() * options.length);

  // Retrieve the computer's choice based on the random index
  const computerChoice = options[computerChoiceIndex];

  // Prompt the user to input their choice
  const userChoice = prompt(
    "What would you like to choose? === R, P, or S === "
  );

  // Check if it's a tie
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    ties++; // Increment ties count
  } else {
    // Check the game outcomes
    if (
      (userChoice === "R" && computerChoice === "P") ||
      (userChoice === "P" && computerChoice === "S") ||
      (userChoice === "S" && computerChoice === "R")
    ) {
      console.log("Computer wins! You lose...");
      losses++; // Increment losses count
    } else {
      console.log("You win! Computer loses...");
      wins++; // Increment wins count
    }
  }
}; // Added the missing closing curly brace here

// Call the playGame function to start the game
playGame();
