// 9. Write a program that checks whether the given input is an even number or an odd number.

var num = +prompt("Enter a number to check wether the number is Even or Odd:");

if (num % 2 === 0) {
  document.write("The number " + num + " is an even number");
} else if (num % 2 === 1) {
  document.write("The number " + num + " is an odd number");
} else {
  document.write("The number " + num + " is not even or odd number");
}
