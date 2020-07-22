// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num = +prompt("Enter a number:");

if (num > 0) {
  document.write("Number is Positive");
} else if (num < 0) {
  document.write("Number is Negative");
} else if (num === 0) {
  document.write("Number is Zero");
} else {
  document.write("Invalid Input");
}
