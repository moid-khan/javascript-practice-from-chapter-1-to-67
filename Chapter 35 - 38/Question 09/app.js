// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i.Arguments as value
// ii.Arguments as variables

function areaOfRectangle(width, height) {
  var A = width * height;
  return A;
}

var width = 20;
var height = 10;

alert("Area of a Rectangle is: " + areaOfRectangle(20, 10));
alert("Area of a Rectangle is: " + areaOfRectangle(width, height));
