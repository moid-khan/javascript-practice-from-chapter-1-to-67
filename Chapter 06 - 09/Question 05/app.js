// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number,
// multiplication table of 5 should be displayed by default.

var num = +prompt("Enter a number for table: ");

if (!isNaN(num)) {
  for (var i = 1; i <= 10; i++) {
    document.write("<h2>" + num + " x " + i + " = " + num * i + "</h2>");
  }
} else {
  num = 5;
  for (var i = 1; i <= 10; i++) {
    document.write("<h2>" + num + " x " + i + " = " + num * i + "</h2>");
  }
}
