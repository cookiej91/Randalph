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
    reroll();
  } else {
    usedLetters.push(char);
    console.log(char);

  }
}
