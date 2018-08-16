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

// All letters that have been rolled get pushed into a separate array
function checkLetters(char) {
    if (usedLetters.includes(char)) {
        roll();
    } else {
        usedLetters.push(char);
    }
}

// If there are more than 25 letters in the userLetters array the alphabet is complete
// a quick restart happens if you click okay by just emptying the usedLetters array
function roll() {
    hasRolled = true;

    if (usedLetters.length > letters.length - 1) {
        reset();
        // Using sweetalert2 to produce a nicer alert box
        swal('The Alphabet has been complete!');
    }

    letterPicked = letters[Math.floor(Math.random() * letters.length)];

    checkLetters(letterPicked);

    countdownTimer();
}

let timer = 0;

function countdownTimer() {
    if (timer > 60) {
        alarmSound.play();
        swal('TIME IS UP');
        return;
    }

    setTimeout(function() {
        timer += 1;
        countdownTimer();
    }, 60000);
}

// Roll the 'dice'
rollClick.addEventListener(
    'click',
    function(event) {
        roll();
        showText.innerHTML = letterPicked;
        swal(letterPicked);
    },
    false,
);

// Game Reset - Removing all letters picked from usedLetters Array
function reset() {
    usedLetters = [];
}
