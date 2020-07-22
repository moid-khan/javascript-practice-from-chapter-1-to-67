// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

const pi = 3.14;

function calcCircumference(radius) {
  var circumference = 2 * (pi * radius);

  return "The circumference is " + circumference;
}

function calcArea(radius) {
  var area = pi * radius ** radius;

  return "The area is " + area;
}

alert("Circumference of circle " + calcCircumference(2));
alert("Area of circle " + calcArea(2));
