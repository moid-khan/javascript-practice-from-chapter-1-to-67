// 2. Write a JavaScript program that accept two integers and display the larger.
// Also show if the two integers are equal.

var firstNum = +prompt("Enter first number:");
var secondNum = +prompt("Enter second number:");

if (firstNum > secondNum) {
  document.write(firstNum + " is the larger number");
} else if (secondNum > firstNum) {
  document.write(secondNum + " is the larger number");
} else if (firstNum === secondNum) {
  document.write("both numbers are equal");
} else {
  document.write("Invalid input");
}
