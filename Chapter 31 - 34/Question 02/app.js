// 2. Write a program that alerts the current month in words.For example December.

var months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

var monthNum = new Date();

var getMonth = months[monthNum.getUTCMonth()];

document.write("<h1>Current month: " + getMonth + "</h1>");
