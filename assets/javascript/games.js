//letters for cpu to choose from
var alphabet = [a, b ,c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
//Will give us a random index number in the array
var random = Math.floor[(Math.random()*alphabet.length)];
//Shows the result of the equation above
var result = alphabet[random];
//Wins start at 0
var wins = 0;
//Losses start at 0
var losses = 0;
//Guesses left start at 9
var guessesLeft = 9;
//Displays the player's guesses
var playerChoice = onkeyup ;
var cpuChoice = result;
//update wins


document.onkeyup = function(event){
    console.log("key pressed" + event.key);

}

if(playerChoice === cpuChoice){
 alert(wins === wins + 1, guessesLeft === guessesLeft - 1)
}
else if(playerChoice !== cpuChoice){
    alert(losses === losses +1, guessesLeft === guessesLeft -1)
}