// 8. The distance between two cities(in km.) is input through the keyboard.Write four functions to convert and
// print this distance in meters, feet, inches and centimeters.

function kmToMeter(km) {
  var meter = km * 1000;
  return meter;
}

function kmToFeet(km) {
  var feet = km * 3281;
  return feet;
}

function kmToInches(km) {
  var inches = km * 39370;
  return inches;
}

function kmToCentimeter(km) {
  var centimeters = km * 100000;
  return centimeters;
}

function getDistance(km) {
  document.write("<h1>Distance in Kilometers " + km + "</h1>");
  document.write("<h1>Distance in Meters " + kmToMeter(km) + "</h1>");
  document.write("<h1>Distance in Feet " + kmToFeet(km) + "</h1>");
  document.write("<h1>Distance in Inches " + kmToInches(km) + "</h1>");
  document.write("<h1>Distance in Centimeters " + kmToCentimeter(km) + "</h1>");
}

getDistance(58);
