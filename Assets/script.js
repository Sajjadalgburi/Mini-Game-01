// Define the options for the game (R for Rock, P for Paper, S for Scissors)
const options = ["R", "P", "S"];

// Prompt the user to input their choice
const userChoice = prompt("What would you like to choose? === R, P, or S === ");

// Generate a random index for the computer's choice using Math.random() and Math.floor()
const computerChoiceIndex = Math.floor(Math.random() * options.length);

// Retrieve the computer's choice based on the random index
const computerChoice = options[computerChoiceIndex];
