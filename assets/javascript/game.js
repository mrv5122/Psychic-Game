//set computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//set all parameters to 0
var wins = 0;
var losses = 0;
var userChoices = [];
var guessesLeft = 10;

//computer letter generator
var computerLetter = computerChoices [Math.floor(Math.random ()) * computerChoices.length];
    console.log(computerLetter);

function computerChoice() {
    computerLetter = computerChoices [Math.floor(Math.random ()) * computerChoices.length];
}

//user input
document.onkeyup = function(event) {
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   
    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;

    var userGuess = event.key;
    console.log(userGuess);
    
    if (userGuess === computerLetter) {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        
        };

    if (userGuess !== computerLetter) {
        userChoices.push(userGuess);
        document.getElementById("userchoices-text").innerHTML = userChoices;
        console.log(userChoices);
        guessesLeft--;    
        };
    
   

    }

/*reset computer letter upon correct guess
newComputerLetter = function() {
   
    if (userGuess === computerLetter) {
    this.computerLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    console.log(computerLetter);
    }; 
} */
