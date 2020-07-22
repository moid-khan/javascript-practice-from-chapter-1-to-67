// 3. Write a program to take input color of road traffic signal from the user &
// show the message according to this table:

var signalColor = prompt("Enter Road Traffic Signal Color: ");

if (signalColor === "Red") {
  document.write("Must Stop");
} else if (signalColor === "Yellow") {
  document.write("Ready to move");
} else if (signalColor === "Green") {
  document.write("Move Now");
} else {
  document.write("Error! Wrong Input");
}
