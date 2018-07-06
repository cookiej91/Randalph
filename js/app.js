var letterPicked = "";
var usedLetters = [];

var letters = [
  "A", "B", "C", "D", "E", "F",
  "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]

//all letters that have been rolled go into a separate array
function checkLetters(char) {
  if (usedLetters.includes(char)) {
    roll();
  } else {
    usedLetters.push(letterPicked);
  }
}

//if there are more than 25 letters in the userLetters array the alphabet is complete
//a quick restart happens if you click okay by just emptying the usedLetters array
function roll() {
  hasRolled = true;
  if(usedLetters.length > letters.length - 1) {
    reset();
    //using sweetalert2 to produce a nicer alert box
    swal("The Alphabet has been complete!");
  }
  letterPicked = letters[Math.floor(Math.random() * letters.length)];

  checkLetters(letterPicked);
  countdownTimer();
}

var timer = 0;

function countdownTimer() {
  if(timer > 60) {
    swal("TIME IS UP");
    return;
  }
  setTimeout(function() {
    timer += 1;
    countdownTimer();
  }, 1000)
}

var rollClick = document.getElementById('rollClick');

rollClick.addEventListener("click", function(event) {
  roll();
  showText.innerHTML = letterPicked;
  swal(letterPicked);
}, false);

function reset() {
  usedLetters = []
}
