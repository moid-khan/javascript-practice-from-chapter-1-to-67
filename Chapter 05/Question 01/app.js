// 1. Write a program that take two numbers & add them in a new variable.Show the result in your browser.

var valOne = +prompt("Enter first value: ");
var valTwo = +prompt("Enter second value: ");

var sum = valOne + valTwo;

document.write(
  "<h1>Sum of " + valOne + " and " + valTwo + " is " + sum + "</h1>"
);
