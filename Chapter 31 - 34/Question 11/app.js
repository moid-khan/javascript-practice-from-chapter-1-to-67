// 11. Create a Date object for the current date and time.Extract the hours, reset the date object an
// hour ahead and finally display the date object in your browser.

var today = new Date();
var currentDate = today.toString();

var currentHour = today.getHours();

var replaceHour = currentDate.replace(currentHour, --currentHour);

document.write(
  "<h1>current date: " +
    currentDate +
    "<br>1 hour ago: it was " +
    replaceHour +
    "</h1>"
);
