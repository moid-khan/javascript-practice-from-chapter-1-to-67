// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a.number
// b.round off value of the number
// c.floor value of the number d.ceil value of the number

var num = -2.673;

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
