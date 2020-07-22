// 8. Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.

var num = +prompt(
  "Enter a number to check whether the number is divisible by 3 or not:"
);

if (num % 3 === 0) {
  document.write("The number " + num + " is divisible by 3");
} else {
  document.write("The number " + num + " is not divisible by 3");
}
