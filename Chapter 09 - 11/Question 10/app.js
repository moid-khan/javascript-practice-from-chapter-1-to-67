// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a.T > 40 then “It is too hot outside.”
// b.T > 30 then “The Weather today is Normal.”
// c.T > 20 then “Today’s Weather is cool.”
// d.T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt("Enter temperature:");

if (temp > 40) {
  document.write("It is too hot outside.");
} else if (temp > 30) {
  document.write("The Weather today is Normal.");
} else if (temp > 20) {
  document.write("Today’s Weather is cool.");
} else if (temp > 10) {
  document.write("OMG! Today’s weather is so Cool.");
} else {
  document.write("Toooo Cooool");
}
