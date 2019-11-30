//set computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//set all parameters to 0
var wins = 0;
var losses = 0;
var userChoices = [];
var guessesLeft = 10;



    
//computer letter generator
var computerLetter = computerChoices [Math.floor(Math.random () * computerChoices.length)];

console.log("computer letter: " + computerLetter);

function computerChoice() {
    computerLetter = computerChoices [Math.floor(Math.random () * computerChoices.length)];
    console.log(computerLetter);
    return computerLetter;
}
//end computer letter generator


//reset function
function reset() {
    userChoices = [];
    guessesLeft = 10;
    computerLetter = computerChoice();
    console.log("new letter to guess: " + computerLetter);
    return userChoices;
}


//user input
document.onkeyup = function(event) {
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    userChoices.push(userGuess);
    document.getElementById("userchoices-text").innerHTML = "Your guesses: " + userChoices;

    console.log("Guesses left: " + guessesLeft);

    // user guesses same letter as computer: add win, reset userGuesses, reset computer letter
    if (userGuess === computerLetter) {

        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        

        alert("YOU ARE PSYCHIC!");

        reset();

        
        };

    if (userGuess !== computerLetter) {
    
        console.log("User guessed: " + userGuess);

        document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;
       
      
        guessesLeft--;    
      
        // document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;
        };
    

    if (guessesLeft < 1) {
        
        losses++;
       
        document.getElementById("losses-text").innerHTML = ("Losses: " + losses);

        alert("Game Over: You are not psychic :/");
        
       reset();
       
    };
    }
