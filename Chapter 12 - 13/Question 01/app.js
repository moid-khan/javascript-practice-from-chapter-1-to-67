// 1. Write a program that takes a character(number or string) in a variable &
// checks whether the given input is a number, uppercase letter or lower case letter.
// (Hint: ASCII codes: - A=65, Z = 90, a = 97, z = 122).

var char = prompt("Enter a character:");

if (!isNaN(char)) {
  document.write("Input is a Number");
} else if (char >= "A" && char <= "Z") {
  document.write("Input is a uppercase letter");
} else if (char >= "a" && char <= "z") {
  document.write("Input is a lovercase letter");
}
