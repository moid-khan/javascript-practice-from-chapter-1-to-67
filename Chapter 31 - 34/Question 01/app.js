// 1. Write a program that displays current date and time in your browser.

var today = new Date();

var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

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
    today.toTimeString()
);
