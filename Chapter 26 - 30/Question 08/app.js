// 8. Write a program that stores a random secret number from 1 to 10 in a variable.
// Ask the user to input a number between 1 and 10.
// If the user input equals the secret number, congratulate the user.

var secretNum = 6;

var guessedNum = +prompt("Enter a number between 1 and 10");

if (guessedNum === secretNum) {
  alert("Congratulations! You guess the same number " + secretNum);
} else {
  alert("Try again!");
}
