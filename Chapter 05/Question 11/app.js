// 11. The Age Calculator: Forgot how old someone is ? Calculate it!
// a.Store the current year in a variable.
// b.Store their birth year in a variable.
// c.Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = 2020;
var birthYear = 1992;

var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age: " + age);
