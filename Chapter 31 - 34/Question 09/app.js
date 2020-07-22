// 9. Create a date object of the starting date of this Ramadan andalert the number of days past since 1st Ramadan ?
// Note : 1st Ramadan was on June 18, 2015

var firstRamadan = new Date("June 18, 2015");
var today = new Date();
var todayMillSec = today.getTime();
var ramadanMillSec = firstRamadan.getTime();

var diff = todayMillSec - ramadanMillSec;

var diffYear = diff / (1000 * 60 * 60 * 24);

var noOfDays = Math.floor(diffYear);

document.write(
  "<h1>" + noOfDays + " days have passed since 1st Ramadan, 2015</h1>"
);
