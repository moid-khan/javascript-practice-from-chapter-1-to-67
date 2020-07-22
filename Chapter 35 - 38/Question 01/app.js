// 1. Write a function that displays current date & time in your browser.

function getCurrentDate() {
  var date = new Date();
  var currentDate = date.toString();
  return currentDate;
}

document.write("<h1>" + getCurrentDate() + "</h1>");
