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
var remainingAttempts = function () {
    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;
    };

document.onkeyup = function(event) {

    guessesLeft--;

    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess === computerLetter) {
        wins++;
        GuessesLeft = 10;
        userChoices = [];
    };

    if (userGuess !== computerLetter) {
        userChoices.push(userGuess);
        document.getElementById("userchoices-text").innerHTML = userChoices;
        console.log(userChoices);
    };

    if (GuessesLeft === 0) {
        losses++;
        userChoices = [];
        GuessesLeft = 10;
        alert("GAME OVER");
        alert("try again!");
    };

    
};

//display user attempts remaining


    console.log(remainingAttempts);

/*var newLetterToGuess = function() {
    this. */