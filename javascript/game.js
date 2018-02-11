// Computer chooses random variable/Alphabet Array.
var choices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables to hold the number of wins, losses, and guesses left.
var userWins = 0;
var userLosses = 0;
var userGuessesLeft=10;
var guessesMade = [''];

// Function for whenever user presses a key.
document.onkeyup = function(event){
    var userGuess = event.key; // Determine which key was pressed.

    // Computer chooses a letter at random from the choices array.
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
// if user guess is same as computer choice then user wins (true).
    if (userGuess === computerChoice){
        userWins += 1; // wins increases by 1.
        userGuesses: 10; // guesses user has stays the same.
        alert("Congratulations! You Guessed Correctly! " + "I was thinking of the Letter: " + computerChoice) // informs user of win
    }

// if user guess is different then user loses (false).
    else if ((userGuess !== computerChoice) && (userGuessesLeft > 1)) {
    userGuessesLeft -= 1; // guesses left decrease.
}

// losses recorded and guesses left.
    else {
        userLosses+=1;
        userGuessesLeft = 10;
}

//Document prints to HTML
document.getElementById("wins").innerHTML = "Wins: " + userWins; // wins
document.getElementById("losses").innerHTML = "Losses: " + userLosses; // losses
document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessesLeft; // guesses left
document.getElementById("guesses").innerHTML = "Your guesses so far: "+ userGuess; // letters guessed

}

//Game Resets
