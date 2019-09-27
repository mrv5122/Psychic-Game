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
function reset() {
    
    userChoices = [];
    guessesLeft = 10;
    computerChoice();
}

//user input
document.onkeyup = function(event) {
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var userGuess = event.key;
    console.log(userGuess);
    
    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;
    console.log(guessesLeft);

    if (userGuess === computerLetter) {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        computerLetter = computerChoices [Math.floor(Math.random ()) * computerChoices.length];
        alert("YOU ARE PSYCHIC!");
       // userChoices = [];
      //  guessesLeft = 10;
        reset();
        };

    if (userGuess !== computerLetter) {
      
        userChoices.push(userGuess);

        document.getElementById("userchoices-text").innerHTML = "Your guesses: " + userChoices;
       
        console.log(userChoices);
      
        guessesLeft--;    
      
        document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;
        };
    

    if (guessesLeft < 1) {
        
        losses++;
       
        document.getElementById("losses-text").innerHTML = ("Losses: " + losses);

        alert("Game Over: You are not psychic :/");
        
        reset();
    };
    }
