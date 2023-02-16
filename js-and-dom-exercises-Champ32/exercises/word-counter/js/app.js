// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const txtInput = document.getElementById("text");
const stats = document.getElementById("stat");


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
input.addEventListener("keyup", function () {
  //variables
  var textArea = txtInput.value;
  var wordCounter = 0;
  var charactersCounter = -1;

  //testing counter
  for (var i = 0; i <= textArea.length; i++) {
    if (textArea.charAt(i) == " ") {
      wordCounter++;
      charactersCounter++;
    } 
  }
  // results
  stats.innerText() = "What you have written: " + wordCounter + ". This is how many characters the word(s) have: " + charactersCounter;
});