// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
//   d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//   e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var firstSubject = prompt("Enter First subject name: ");
var secondSubject = prompt("Enter Second subject name: ");
var thirdSubject = prompt("Enter Third subject name: ");

var totalMarksForEach = 100;

var firstObtained = +prompt(
  "Enter First subject obtained Marks (total marks for each subject is 100):"
);

var secondObtained = +prompt(
  "Enter Second subject obtained Marks (total marks for each subject is 100):"
);

var thirdObtained = +prompt(
  "Enter Third subject obtained Marks (total marks for each subject is 100):"
);

var percentage =
  ((firstObtained + secondObtained + thirdObtained) / (totalMarksForEach * 3)) *
  100;

document.write(
  "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
);
document.write(
  "<tr><td>" +
    firstSubject +
    "</td><td>" +
    totalMarksForEach +
    "</td><td>" +
    firstObtained +
    "</td><td>" +
    firstObtained +
    "%</td></tr>"
);

document.write(
  "<tr><td>" +
    secondSubject +
    "</td><td>" +
    totalMarksForEach +
    "</td><td>" +
    secondObtained +
    "</td><td>" +
    secondObtained +
    "%</td></tr>"
);

document.write(
  "<tr><td>" +
    thirdSubject +
    "</td><td>" +
    totalMarksForEach +
    "</td><td>" +
    thirdObtained +
    "</td><td>" +
    thirdObtained +
    "%</td></tr>"
);

document.write(
  "<tr><td></td><td>" +
    totalMarksForEach * 3 +
    "</td><td>" +
    (firstObtained + secondObtained + thirdObtained) +
    "</td><td>" +
    percentage +
    "</td></tr>"
);

document.write("</table>");
