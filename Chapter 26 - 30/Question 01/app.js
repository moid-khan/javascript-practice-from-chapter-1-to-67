// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a.number
// b.round off value of the number
// c.floor value of the number d.ceil value of the number

var num = 3.45214;

var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);

document.write(
  "<h1>number: " +
    num +
    "<br>round off value: " +
    roundNum +
    "<br>floor value: " +
    floorNum +
    "<br>ceil value: " +
    ceilNum +
    "</h1>"
);
