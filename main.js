var letterPicked = "";
var rollClick = document.getElementById('rollClick');

var letters = [
  "A", "B", "C", "D", "E", "F",
  "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]

var usedLetters = [

]

function checkLetters(char){
  if (usedLetters.includes(char)) {
    roll();
  } else {
    usedLetters.push(letterPicked);
  }
}

function roll(){
  if(usedLetters.length > 25){
    alert("Finished");
    reset();
  }
  letterPicked = letters[Math.floor(Math.random() * letters.length)];
  checkLetters(letterPicked);
}

rollClick.addEventListener("click", function(event) {
  roll();
  console.log(letterPicked);
  rollClick.value = "hello";
}, false);

function reset() {
  usedLetters = [
    
  ]
}
