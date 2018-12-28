const LETTERS = Array(26)
    .fill()
    .map((_, index) => String.fromCharCode(index + 65));

const roundComplete = new Audio('../sounds/roundComplete.mp3');
const gameComplete = new Audio('../sounds/gameComplete.mp3');
const rollClick = document.getElementById('rollClick');

let letterPicked = '';
let usedLetters = [];

/**
 * Checks a letter that has been picked and pushes into an array
 * @char  {character} letter that has been picked
 */
function checkLetters(char) {
    if (usedLetters.includes(char)) {
        roll();
    } else {
        usedLetters.push(char);
    }
}

// Timer for countdown after roll()
let timerRef;

/**
 * Checks to see if usedLetters has the entire array from letters stored
 * Randomly selects a new letter from letters array
 */
function roll() {
    if (usedLetters.length > LETTERS.length - 1) {
        gameComplete.play();
        reset();
        // Using sweetalert2 to produce a nicer alert box
        swal('GAME END!');
    }

    letterPicked = LETTERS[Math.floor(Math.random() * LETTERS.length)];

    checkLetters(letterPicked);

    // Stops the current timer
    clearInterval(timerRef);

    // Starts the new timer
    timerRef = countdownTimer();
}

rollClick.addEventListener(
    'click',
    function(e) {
        roll();
        showText.innerHTML = letterPicked;
        swal(letterPicked);
    },
    false,
);

/**
 * Iteratively adds 1 to timer until timer reaches 60
 * Once timer has reached 60 - sound will play
 */

function countdownTimer() {
    return setInterval(function() {
        roundComplete.play();
        swal('TIME IS UP');
    }, 60000);
}

/**
 * A simple reset if usedLetters has reached its limit (removing all letters from array)
 */
function reset() {
    usedLetters = [];
}
