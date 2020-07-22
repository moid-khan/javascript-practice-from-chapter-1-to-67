// 7. Guess game: Store a secret number(ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a.If user guesses the same number, show “Bingo! Correct answer”.
// b.If the guessed number + 1 is the secret number, show “Close enough to the correct answer”.

var secretNumber = 6;

var guessedNumber = +prompt("Guess the number from 1 to 10");

if (guessedNumber === secretNumber) {
  document.write("<h1>Bingo! Correct answer</h1>");
} else if (guessedNumber === ++secretNumber) {
  document.write("<h1>Close enough to the correct answer</h1>");
} else {
  document.write("<h1>Number not match</h1>");
}
