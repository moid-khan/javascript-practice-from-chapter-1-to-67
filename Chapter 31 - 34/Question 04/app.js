// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

var today = new Date();

var getCurrentDay = days[today.getUTCDay()];

if (getCurrentDay === "sun" || getCurrentDay === "sat") {
  document.write("Its Fun day");
} else {
  document.write("Its working day");
}
