var letterPicked = "";
var rollClick = document.getElementById('rollClick');

var letters = [
  "A", "B", "C", "D", "E", "F",
  "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]

var usedLetters = []

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
  if(usedLetters.length > 25) {
    reset();
    //using sweetalert2 to produce a nicer alert box
    swal({
      type: "success",
      text: "Finished - Press Ok to restart Randalph"
    })
  }

  letterPicked = letters[Math.floor(Math.random() * letters.length)];
  checkLetters(letterPicked);
}

rollClick.addEventListener("click", function(event) {
  roll();
  rollClick.innerHTML = letterPicked;
}, false);

function reset() {
  usedLetters = []
}
