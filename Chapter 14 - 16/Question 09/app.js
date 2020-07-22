// 9. Initialize an array with color names.Display the array elements in your browser.
// a.Ask the user what color he / she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b.Ask the user what color he / she wants to add to the end & add that color to the end of the array.
// Display the updated array in your browser.
// c.Add two more color to the beginning of the array.Display the updated array in your browser.
// d.Delete the first color in the array.
// Display the updated array in your browser.
// e.Delete the last color in the array.Display the updated array in your browser.
// f.Ask the user at which index he / she wants to add a color & color name.
// Then add the color to desired position / index. .Display the updated array in your browser.
//   g.Ask the user at which index he / she wants to delete color(s) & how many colors he / she wants to delete.
//   Then Page 3 of 6 remove the same number of color(s) from user - defined position / index. .
//   Display the updated array in your browser.

var colors = ["red", "green", "blue"];

document.write("<br>Orignal Array<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}

var addColor = prompt("Enter color Name to add to the begining:");

colors.push(addColor);

document.write("<br>Updated Array<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}

colors.push("Pink", "Sky blue");

document.write("<br>Updated Array (Added Two more colors)<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}

colors.shift();

document.write("<br>Updated Array (Deleted first color)<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}

colors.pop();

document.write("<br>Updated Array (Deleted last color)<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}

addColor = prompt("At which index you want to add color:");
var colorName = prompt("Enter color name:");

colors.splice(addColor, 0, colorName);

document.write("<br>Updated Array (Add Color in desire index)<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}

var colorIndex = +prompt("At which index you want to delete color:");
var colorsQuantity = +prompt("How many colors you want to delete:");

colors.splice(colorIndex, colorsQuantity);

document.write("<br>Updated Array (Deleted Color in desire index)<br><br>");

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}
