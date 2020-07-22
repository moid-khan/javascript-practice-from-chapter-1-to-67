// 17. Write a program to display the last character of a user input.

var name = prompt("Enter any name to get last character");
var lastChar = name[name.length - 1];

document.write(
  "<h1>User input: " + name + "<br>Last character: " + lastChar + "</h1>"
);
