// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back ?

var today = new Date();
var currentDate = today.toString();

var currentYear = today.getFullYear();

var replaceYear = currentDate.replace(currentYear, currentYear - 100);

document.write(
  "<h1>current date: " +
    currentDate +
    "<br>100 years back: it was " +
    replaceYear +
    "</h1>"
);
