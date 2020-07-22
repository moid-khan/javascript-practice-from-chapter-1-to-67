// 13. Write a program to ask the user about his age.Calculate and show his birth year in your browser.

var age = +prompt("Enter your age: ");

var date = new Date();

var currentYear = date.getFullYear();

var birthYear = currentYear - age;

document.write(
  "<h1>Your age is " + age + "<br>Your birth year is " + birthYear + "</h1>"
);
