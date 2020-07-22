// 7. Write a program that asks the user about his weight.Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userWeight = prompt("Enter your weight in kilograms");

var seprateKilo = userWeight.slice(userWeight.indexOf("k"));

var seprateWeight = userWeight.slice(0, userWeight.indexOf("k"));

document.write(
  "<h1>The weight of user is " + seprateWeight + " kilograms</h1>"
);
