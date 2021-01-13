import { makeHeadsOrTails } from './utils.js';
// import functions and grab DOM elements
const guessButton = document.getElementById('guess-button');
const currentThrow = document.getElementById('current-throw');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');


// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    total++;
    //     1) Store the computer's throw
    //     - We need to come up with a "computer throw", randomly between 'heads' or 'tails'
    const computerThrow = Math.round(Math.random());
    //     - we could round a Math.random(). 1 is heads, 0 is tails.
    const computerHeadsOrTails = makeHeadsOrTails(computerThrow);

    // 2) Store the user's throw
    //     - grab the checked input, and get its value
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');

    const userGuess = selectedRadioButton.value;
    // 3) We compare the user's guess to the computer throw

    if (userGuess === computerHeadsOrTails) {
        wins++;
        currentThrow.textContent = `NICE WORK! You guessed ${userGuess}. The correct guess was ${computerHeadsOrTails}.`;
    } else {
        currentThrow.textContent = `AW NOOOO! You guessed ${userGuess}. The correct guess was ${computerHeadsOrTails}.`;
    }

    // 4) We need to display new wins and losses
    winSpan.textContent = wins;
    lossSpan.textContent = total - wins;
    totalSpan.textContent = total;
});