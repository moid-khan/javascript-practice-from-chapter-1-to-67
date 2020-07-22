// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

var today = new Date();

var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

var millSecSince1970 = today.getTime();
var minSince1970 = (millSecSince1970 / 1000) * 60;

var months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

document.write(
  "Current Date: " +
    days[today.getDay()] +
    " " +
    months[today.getMonth()] +
    " " +
    today.getDate() +
    " " +
    today.getFullYear() +
    " " +
    today.getUTCHours() +
    ":" +
    today.getUTCMinutes() +
    ":" +
    today.getSeconds() +
    " " +
    today.toTimeString() +
    "<br>"
);

document.write(
  "Ellapsed milliseconds since January 1, 1970: " + millSecSince1970 + "<br>"
);

document.write("Ellapsed minutes since January 1, 1970: " + minSince1970);
