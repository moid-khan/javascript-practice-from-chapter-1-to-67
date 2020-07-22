// 2. Write a program to take a user input about his favorite mobile phone model.
// Find and display the length of user input in your browser

var favPhone = prompt("Enter your favorite mobile phone:");
var length = favPhone.length;

document.write(
  "<h1>My fovrite phone is: " +
    favPhone +
    " <br>Lenght of string: " +
    length +
    "</h1>"
);
