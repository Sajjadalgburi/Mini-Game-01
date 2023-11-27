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

  // Check if the user cancels the prompt or does not provide any input
  if (!userChoice) {
    return;
  }

  // Convert user choice to uppercase for case-insensitive comparison
  userChoice = userChoice.toUpperCase();

  // Generate a random index for the computer's choice using Math.random() and Math.floor()
  const computerChoiceIndex = Math.floor(Math.random() * options.length);

  // Retrieve the computer's choice based on the random index
  const computerChoice = options[computerChoiceIndex];

  // Display the computer's choice to the user
  window.alert("The computer chose " + computerChoice + "!");

  // Compare user's choice with the computer's choice to determine the winner
  if (userChoice === computerChoice) {
    // It's a tie
    window.alert("It's a tie!");
    ties++; // Increment ties count
  } else if (
    // User wins scenarios
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    window.alert("You win!");
    wins++; // Increment wins count
  } else {
    // Computer wins
    window.alert("Computer wins!");
    losses++; // Increment losses count
  }

  // Display the current score
  window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);

  // Ask the user if they want to play again and recursively call playGame if confirmed
  if (window.confirm("Play again?")) {
    playGame();
  }
};

// Call the playGame function to start the game
playGame();
