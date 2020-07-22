// 3. Write a program that alerts the first 3 letters of the current day,
// for example if today is Sunday then alert will show Sun.

var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

var today = new Date();

var getCurrentDay = days[today.getUTCDay()];

alert("Today is " + getCurrentDay);
