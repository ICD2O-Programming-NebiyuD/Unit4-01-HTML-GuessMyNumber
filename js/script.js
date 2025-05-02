"use strict";

/**

 */

function guess() {

    // turn user input into variables

    let userGuess = parseInt(document.getElementById('guess').value);

    let randomNumber = Math.floor(Math.random() * 10) + 1;



    // process

    if (userGuess == randomNumber) {

        document.getElementById('result').innerHTML = 'Right! Good job!';



    }

    if (userGuess != randomNumber) {

        document.getElementById('result').innerHTML = 'Wrong! The correct number was: ' + randomNumber;

    }

}