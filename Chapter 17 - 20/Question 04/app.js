// 4.  Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

var tableNo = +prompt("Enter the number to show its multplication table:");

var tableLength = +prompt("Enter length multiplication table:");

for (var i = 1; i <= tableLength; i++) {
  document.write("<h3>" + tableNo + " x " + i + " = " + tableNo * i + "</h3>");
}
