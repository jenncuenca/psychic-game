// Computer chooses random variable/Alphabet Array
var choices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables to hold the number of wins, losses, and ties. They start at 0.
var userWins = 0;
var userLosses = 0;
var userGuessesLeft=10;
 
// Function for whenever user presses a key.
document.onkeyup = function(event){

    var userGuess = event.key; // To determine which key was pressed 

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = choices[Math.floor(Math.random() * choices.length)];

//If number is wrong ask the user to try again. Repeat until correct or User runs out of Guesses.

if (userGuess === computerGuess) { //user wins
    userWins += 1;
    userGuessesLeft = 10;
    guess = '';
    document.getElementById("wins").innerHTML = "Wins: " + userWins;
    document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessesLeft;
    document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
}

else if ((userGuess !== computerGuess) && (userGuessesLeft > 1)) {
    userGuessesLeft -= 1;  
    guess = guess + userGuess + ", ";
    document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessesLeft;
    document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guess;
}

else { // user loses
    userLosses+=1;
    userGuessesLeft = 10;
    guess = '';
    document.getElementById("losses").innerHTML = "Losses: " + userLosses;
    document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessesLeft;
    document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
}

}



//If user guess correctly, reveal the correct letter and how many attempts it took.
// Ask if they want to play again.
