const alarmSound = new Audio('../sounds/roundend.mp3');
const rollClick = document.getElementById('rollClick');
// Add audio for game finishing
// Const gameEndSound = new Audio('../sounds/gameEnd.mp3');
const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

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
    if (usedLetters.length > letters.length - 1) {
        reset();
        // Using sweetalert2 to produce a nicer alert box
        swal('The Alphabet has been complete!');
    }

    letterPicked = letters[Math.floor(Math.random() * letters.length)];

    checkLetters(letterPicked);

    // Stops the current timer
    clearInterval(timerRef);

    // Starts the new timer
    timerRef = countdownTimer();
}

rollClick.addEventListener(
    'click',
    function(event) {
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
        alarmSound.play();
        swal('TIME IS UP');
    }, 60000);
}

/**
 * A simple reset if usedLetters has reached its limit (removing all letters from array)
 */
function reset() {
    usedLetters = [];
}
