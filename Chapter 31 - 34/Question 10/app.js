// 10. Write a program that displays in your browser the seconds that elapsed between the
// reference date and the beginning of 2015

var referenceDate = new Date("Dec 05, 2015");
var targetDate = new Date("Jan 01, 2015");
var referMillSec = referenceDate.getTime();
var targetMillSec = targetDate.getTime();

var diff = referMillSec - targetMillSec;

var diffSec = diff / (1000 * 60);

var noOfSec = Math.floor(diffSec);

document.write(
  "<h1>On reference date " +
    referenceDate.toString() +
    ",<br>" +
    noOfSec +
    " seconds had passed since beginning of 2015</h1>"
);
