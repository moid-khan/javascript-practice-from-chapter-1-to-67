// 15. Write a program to store phone manufacturers(Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown / select menu in your browser using document.write() method:

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
