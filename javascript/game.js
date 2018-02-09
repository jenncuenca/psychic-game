    
// Random Letter Stored as Variable

var randomletter = randomString();
    var score = "";
    var loses = "";
    var attempts = "";
    var lives = "";

// Prompt User to guess a letter from A-Z

//Check to see if letter is correct

//If number is wrong ask the user to try again. Repeat until correct or User runs out of Guesses.

//If user guess correctly, reveal the correct letter and how many attempts it took.

// Ask if they want to play again.

//Keep track of wins and losses.


    function randomString() {
        var chars = "abcdefghiklmnopqrstuvwxyz";
        var string_length = 1;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        console.log(randomstring);
        return(randomstring);
    }
