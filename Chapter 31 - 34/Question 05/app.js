// 5. Write a program that shows the message “First fifteen days of the month”
// if the date is less than 16th of the month else shows “Last days of the month”.

var date = new Date();

var getDay = date.getUTCDate();

if (getDay < 16) {
  document.write("<h1>First fifteen days of the month</h1>");
} else {
  document.write("<h1>Last days of the month</h1>");
}
